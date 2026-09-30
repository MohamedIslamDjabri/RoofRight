import { NextRequest, NextResponse } from 'next/server';
import { ai } from '@/lib/gemini';

const VOICE_SYSTEM_INSTRUCTION = `
You are "Elena", a Senior Exterior Consultation Specialist on a live audio telephone call with a homeowner for RoofRight Exteriors in Austin & Central Texas.

Voice Guidelines:
- Keep every response SHORT, natural, and conversational (1 to 3 sentences maximum), because your response will be spoken aloud to the caller.
- Do NOT use markdown asterisks, bullet points, numbered lists, or emojis, as they sound awkward when read by a speech engine.
- Be warm, confident, and professional.
- Your primary goal is to answer their roofing, gutter, or siding questions and book their Free On-Site Drone Inspection and Estimate.
- Offer inspection windows: Morning (9 AM to 12 PM) or Afternoon (1 PM to 5 PM) Monday through Saturday.
- Kindly confirm: Their name, callback phone number, street address or city/ZIP, and preferred inspection time.
- When an appointment is scheduled or enough details are gathered, explicitly confirm it out loud in one sentence, and append the structured tag at the very end:
  <<<BOOKING_DATA:{"name":"...","phone":"...","address":"...","service":"...","datetime":"...","confirmed":true}>>>
`;

export async function POST(req: NextRequest) {
  try {
    const { transcriptHistory, userSpokenText } = await req.json();

    if (!userSpokenText && (!transcriptHistory || transcriptHistory.length === 0)) {
      return NextResponse.json({ error: 'Audio transcript is required.' }, { status: 400 });
    }

    const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

    if (Array.isArray(transcriptHistory)) {
      for (const item of transcriptHistory) {
        contents.push({
          role: item.speaker === 'agent' ? 'model' : 'user',
          parts: [{ text: item.text }],
        });
      }
    }

    if (userSpokenText) {
      contents.push({
        role: 'user',
        parts: [{ text: userSpokenText }],
      });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents,
      config: {
        systemInstruction: VOICE_SYSTEM_INSTRUCTION,
        temperature: 0.6,
      },
    });

    const rawText = response.text || '';

    let bookingData = null;
    let cleanText = rawText;
    const bookingMatch = rawText.match(/<<<BOOKING_DATA:({.*?})>>>/);

    if (bookingMatch && bookingMatch[1]) {
      try {
        bookingData = JSON.parse(bookingMatch[1]);
        cleanText = rawText.replace(/<<<BOOKING_DATA:({.*?})>>>/, '').trim();
      } catch (e) {
        console.error('Failed to parse voice booking data', e);
      }
    }

    // Ensure clean text for speech synthesis (strip any stray markdown)
    cleanText = cleanText.replace(/[*_#`~]/g, '').trim();

    return NextResponse.json({
      speechText: cleanText,
      booking: bookingData,
    });
  } catch (error: any) {
    console.error('Voice API Error:', error);
    return NextResponse.json(
      {
        error: 'Unable to process voice audio call at this moment.',
        details: error?.message || 'Server error',
      },
      { status: 500 }
    );
  }
}
