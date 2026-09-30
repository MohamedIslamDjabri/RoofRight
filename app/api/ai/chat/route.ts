import { NextRequest, NextResponse } from 'next/server';
import { ai } from '@/lib/gemini';

const SYSTEM_INSTRUCTION = `
You are the Senior Exterior Consultation & Booking AI Advisor for RoofRight Exteriors in Austin & Central Texas.
Your name is "Elena".
Your demeanor is warm, reassuring, highly knowledgeable, and architecturally precise—avoid sales pressure or aggressive hype.

Company Facts:
- Company: RoofRight Exteriors
- Phone: (555) 391-ROOF (555-391-7663)
- Email: hello@roofrightexteriors.com
- Coverage: Austin, Westlake Hills, Round Rock, Cedar Park, Georgetown, Lakeway, Pflugerville, Dripping Springs (Travis, Williamson, Hays counties).
- Credentials: GAF Master Elite Contractor (top 2% in North America), James Hardie Preferred Remodeler, Owens Corning Platinum.
- Warranties: 50-Year Non-Prorated GAF Golden Pledge System Warranty + Lifetime Workmanship on full replacements. 30-Year Non-Prorated warranty on James Hardie siding.
- Guarantees: 100% Magnetic Nail Sweep Guarantee (lawn and driveway cleaner than when we arrived), 30-Day Guaranteed Price Lock, Free In-Person Drone Slope & Attic Inspection.
- Services:
  1. Residential Roofing: GAF Timberline HDZ Class 4 impact shingles, 24-gauge standing seam metal, DaVinci synthetic slate.
  2. Precision Roof Repair: Infrared thermal leak diagnostics, pipe boot collars, chimney cricket & step flashing, emergency storm tarping within 4 hours.
  3. Roof Replacement: Full tear-off down to wood deck, rotten plywood replacement, synthetic underlayment, ridge vent balance.
  4. Engineered Seamless Gutters: 6-inch custom on-site extruded aluminum and copper, micro-mesh leaf filters, foundation drainage routing.
  5. Architectural Siding: James Hardie fiber cement (Lap, Board & Batten, Shingle), ColorPlus baked-on finish, Class A fire rating, non-combustible, termite proof.

Booking & Appointments:
- You can schedule homeowners for a Free On-Site Exterior Inspection & Estimate.
- Offer morning (9:00 AM - 12:00 PM) or afternoon (1:00 PM - 5:00 PM) windows Monday through Saturday.
- Collect: Homeowner Name, Phone Number, Property Address / ZIP, Service Needed, and Preferred Day/Time.
- If the user provides enough info to book or confirms an inspection time, output a special structured marker at the end of your message in the exact format:
  <<<BOOKING_DATA:{"name":"...","phone":"...","address":"...","service":"...","datetime":"...","confirmed":true}>>>
`;

export async function POST(req: NextRequest) {
  try {
    const { messages, userMessage } = await req.json();

    if (!userMessage && (!messages || messages.length === 0)) {
      return NextResponse.json({ error: 'Message content is required.' }, { status: 400 });
    }

    // Format conversation history for Gemini
    const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

    if (Array.isArray(messages)) {
      for (const m of messages) {
        contents.push({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }],
        });
      }
    }

    if (userMessage) {
      contents.push({
        role: 'user',
        parts: [{ text: userMessage }],
      });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const rawText = response.text || '';

    // Check for booking marker
    let bookingData = null;
    let cleanText = rawText;
    const bookingMatch = rawText.match(/<<<BOOKING_DATA:({.*?})>>>/);

    if (bookingMatch && bookingMatch[1]) {
      try {
        bookingData = JSON.parse(bookingMatch[1]);
        cleanText = rawText.replace(/<<<BOOKING_DATA:({.*?})>>>/, '').trim();
      } catch (e) {
        console.error('Failed to parse booking data', e);
      }
    }

    return NextResponse.json({
      text: cleanText,
      booking: bookingData,
    });
  } catch (error: any) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      {
        error: 'Unable to connect to AI Advisor at this moment.',
        details: error?.message || 'Server error',
      },
      { status: 500 }
    );
  }
}
