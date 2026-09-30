'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Phone,
  PhoneCall,
  PhoneOff,
  Mic,
  MicOff,
  X,
  Send,
  CheckCircle2,
  Volume2,
  Minimize2,
  Bot,
  Calendar,
  Sparkles,
  MapPin,
  Clock,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  time: string;
  booking?: {
    name?: string;
    phone?: string;
    address?: string;
    service?: string;
    datetime?: string;
    confirmed?: boolean;
  };
}

interface VoiceTranscriptItem {
  speaker: 'user' | 'agent';
  text: string;
}

export default function AIAssistantModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMode, setActiveMode] = useState<'chat' | 'voice'>('chat');
  const [minimized, setMinimized] = useState(false);

  // Chat State
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        "Hello! I'm Elena, your RoofRight Exterior & Booking Advisor. I can answer questions about our GAF roofing systems, seamless gutters, and James Hardie siding, or schedule your Free Drone Inspection right now. How can I assist you today?",
      time: 'Just now',
    },
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);
  const idCounterRef = useRef(1);

  // Voice Call State
  const [isCallActive, setIsCallActive] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isAgentSpeaking, setIsAgentSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [voiceTranscripts, setVoiceTranscripts] = useState<VoiceTranscriptItem[]>([]);
  const [confirmedBooking, setConfirmedBooking] = useState<any>(null);
  const [voiceStatusText, setVoiceStatusText] = useState('Ready to connect with Elena');
  const [manualVoiceInput, setManualVoiceInput] = useState('');

  const recognitionRef = useRef<any>(null);

  // Handle Text-to-Speech
  const speakAgentVoice = useCallback((text: string, onEnd?: () => void) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      if (onEnd) onEnd();
      return;
    }

    window.speechSynthesis.cancel();
    setIsAgentSpeaking(true);
    setVoiceStatusText('Elena is speaking...');

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.05;

    const voices = window.speechSynthesis.getVoices();
    const naturalVoice = voices.find(
      (v) =>
        (v.name.includes('Natural') ||
          v.name.includes('Samantha') ||
          v.name.includes('Google US') ||
          v.name.includes('Karen') ||
          v.name.includes('Zira') ||
          v.name.includes('Victoria')) &&
        v.lang.startsWith('en')
    );
    if (naturalVoice) {
      utterance.voice = naturalVoice;
    }

    utterance.onend = () => {
      setIsAgentSpeaking(false);
      setVoiceStatusText('Elena is listening...');
      if (onEnd) onEnd();
    };

    utterance.onerror = () => {
      setIsAgentSpeaking(false);
      setVoiceStatusText('Listening for your voice...');
      if (onEnd) onEnd();
    };

    window.speechSynthesis.speak(utterance);
  }, []);

  // Send input to Voice API
  const processUserVoiceMessage = useCallback(
    async (spokenText: string) => {
      if (!spokenText.trim()) return;

      const newUserItem: VoiceTranscriptItem = { speaker: 'user', text: spokenText };
      setVoiceTranscripts((prev) => [...prev, newUserItem]);
      setVoiceStatusText('Elena is analyzing...');

      try {
        const res = await fetch('/api/ai/voice', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userSpokenText: spokenText,
            transcriptHistory: [...voiceTranscripts, newUserItem],
          }),
        });

        if (!res.ok) throw new Error('Voice API failed');

        const data = await res.json();
        const responseText =
          data.speechText ||
          "I'd be delighted to help you schedule a free on-site roof and gutter inspection. What day works best for you?";

        const newAgentItem: VoiceTranscriptItem = { speaker: 'agent', text: responseText };
        setVoiceTranscripts((prev) => [...prev, newAgentItem]);

        if (data.booking) {
          setConfirmedBooking(data.booking);
        }

        speakAgentVoice(responseText);
      } catch (err) {
        console.error('Voice processing error:', err);
        const fallback =
          "I apologize, I had a momentary connection hiccup. Would you like me to book your free inspection for tomorrow morning or afternoon?";
        setVoiceTranscripts((prev) => [...prev, { speaker: 'agent', text: fallback }]);
        speakAgentVoice(fallback);
      }
    },
    [voiceTranscripts, speakAgentVoice]
  );

  // Initialize Speech Recognition
  const startSpeechRecognition = useCallback(() => {
    if (typeof window === 'undefined') return;

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setVoiceStatusText('Mic not supported in this browser. Use text box below.');
      return;
    }

    try {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }

      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
        setVoiceStatusText('Listening... speak now');
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setIsListening(false);
        if (transcript) {
          processUserVoiceMessage(transcript);
        }
      };

      recognition.onerror = (event: any) => {
        console.warn('Speech recognition error:', event.error);
        setIsListening(false);
        if (event.error === 'not-allowed') {
          setVoiceStatusText('Microphone permission needed or use text below');
        } else {
          setVoiceStatusText('Tap microphone to speak or type below');
        }
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (e) {
      console.error('Failed to start speech recognition', e);
      setIsListening(false);
    }
  }, [processUserVoiceMessage]);

  const stopSpeechRecognition = () => {
    if (recognitionRef.current) {
      recognitionRef.current.abort();
      setIsListening(false);
    }
  };

  // Start Call Handler
  const handleStartCall = useCallback(() => {
    setIsCallActive(true);
    setActiveMode('voice');
    setCallDuration(0);
    setConfirmedBooking(null);
    setVoiceTranscripts([
      {
        speaker: 'agent',
        text: "Hi there! I'm Elena with RoofRight Exteriors. Are you calling regarding a roof leak, full roof replacement, gutters, or siding?",
      },
    ]);

    speakAgentVoice(
      "Hi there! I'm Elena with RoofRight Exteriors. Are you calling regarding a roof leak, full roof replacement, gutters, or siding?",
      () => {
        setTimeout(() => {
          startSpeechRecognition();
        }, 300);
      }
    );
  }, [speakAgentVoice, startSpeechRecognition]);

  // End Call Handler
  const handleEndCall = () => {
    setIsCallActive(false);
    stopSpeechRecognition();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsAgentSpeaking(false);
    setVoiceStatusText('Call ended. Thank you for contacting RoofRight.');
  };

  // Toggle Mute
  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      startSpeechRecognition();
    } else {
      setIsMuted(true);
      stopSpeechRecognition();
      setVoiceStatusText('Microphone muted');
    }
  };

  // Handle Text Chat Submission
  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || chatInput;
    if (!text.trim() || isChatLoading) return;

    const userMsg: ChatMessage = {
      id: `u-${idCounterRef.current++}`,
      role: 'user',
      content: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setChatInput('');
    setIsChatLoading(true);

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userMessage: text,
          messages: messages.concat(userMsg),
        }),
      });

      if (!res.ok) throw new Error('API request failed');

      const data = await res.json();
      const assistantMsg: ChatMessage = {
        id: `a-${idCounterRef.current++}`,
        role: 'assistant',
        content:
          data.text ||
          "I'd be happy to assist you with your roofing project or schedule an on-site consultation.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        booking: data.booking || undefined,
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error('Chat error:', err);
      const errorMsg: ChatMessage = {
        id: `err-${idCounterRef.current++}`,
        role: 'assistant',
        content:
          "I'm momentarily having trouble connecting. You can also reach our team directly at (555) 391-ROOF for immediate inspection scheduling!",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsChatLoading(false);
    }
  };

  // Scroll to bottom on new messages
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, voiceTranscripts]);

  // Listen for global custom event to open AI modal
  useEffect(() => {
    const handleOpenAI = (e: any) => {
      setIsOpen(true);
      setMinimized(false);
      if (e.detail?.mode === 'voice') {
        setActiveMode('voice');
        if (!isCallActive) {
          handleStartCall();
        }
      } else {
        setActiveMode('chat');
      }
    };

    window.addEventListener('open-roofright-ai', handleOpenAI);
    return () => window.removeEventListener('open-roofright-ai', handleOpenAI);
  }, [isCallActive, handleStartCall]);

  // Duration timer
  useEffect(() => {
    if (!isCallActive) return;
    const interval = setInterval(() => {
      setCallDuration((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isCallActive]);

  // Suggested prompt chips
  const suggestedPrompts = [
    'Book a free drone inspection',
    'Estimate cost for 2,500 sq ft roof',
    'Do you fix chimney leaks?',
    'Compare GAF vs Metal roof',
  ];

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {/* Refined, Elegant Floating Trigger - Zero Page Layout Disruption */}
      {!isOpen && (
        <div className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-40 flex items-center">
          <button
            type="button"
            onClick={() => {
              setIsOpen(true);
              setMinimized(false);
            }}
            className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-primary text-on-primary shadow-2xl hover:bg-primary-container transition-all hover:scale-105 border border-primary-fixed/30 cursor-pointer group"
            aria-label="Open AI Exterior & Booking Advisor"
          >
            <div className="relative">
              <Bot className="w-5 h-5 text-primary-fixed group-hover:rotate-12 transition-transform" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-primary animate-pulse" />
            </div>
            <span className="font-label-md text-xs sm:text-sm font-bold text-on-primary">
              AI Advisor &amp; Booking
            </span>
          </button>
        </div>
      )}

      {/* Main AI Assistant Dialog Modal */}
      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 z-50 flex items-end sm:items-auto justify-center sm:justify-end animate-fadeIn">
          {/* Backdrop on mobile only */}
          <div
            className="fixed inset-0 bg-primary/40 backdrop-blur-xs sm:hidden"
            onClick={() => setIsOpen(false)}
          />

          <div
            className={`relative w-full sm:w-[420px] md:w-[460px] bg-surface-container-lowest rounded-t-2xl sm:rounded-2xl shadow-2xl border border-surface-container-high flex flex-col overflow-hidden transition-all duration-300 z-10 ${
              minimized ? 'h-16' : 'h-[85vh] sm:h-[620px]'
            }`}
          >
            {/* Header with Mode Switcher */}
            <div className="bg-primary text-on-primary p-3.5 flex items-center justify-between shrink-0 shadow-md">
              <div className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-primary-fixed border border-primary-fixed/30">
                  <Bot className="w-4 h-4" />
                  <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-400 rounded-full ring-1 ring-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-label-md text-sm font-bold text-on-primary">
                      Elena &bull; RoofRight AI
                    </span>
                    <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-primary-container text-primary-fixed uppercase tracking-wider">
                      Live
                    </span>
                  </div>
                  <p className="text-[10px] text-primary-fixed-dim">
                    24/7 Consultation &amp; Drone Booking
                  </p>
                </div>
              </div>

              {/* Mode Toggle & Controls */}
              <div className="flex items-center gap-1.5">
                {/* Mode Selector Tabs */}
                <div className="flex items-center bg-primary-container p-0.5 rounded-lg border border-primary-fixed/20 mr-1">
                  <button
                    type="button"
                    onClick={() => setActiveMode('chat')}
                    className={`px-2 py-1 rounded-md text-xs font-label-sm font-bold transition-all cursor-pointer ${
                      activeMode === 'chat'
                        ? 'bg-surface text-primary shadow-xs'
                        : 'text-primary-fixed hover:text-on-primary'
                    }`}
                  >
                    Chat
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveMode('voice');
                      if (!isCallActive) {
                        handleStartCall();
                      }
                    }}
                    className={`px-2 py-1 rounded-md text-xs font-label-sm font-bold transition-all flex items-center gap-1 cursor-pointer ${
                      activeMode === 'voice'
                        ? 'bg-tertiary-container text-on-tertiary shadow-xs'
                        : 'text-primary-fixed hover:text-on-primary'
                    }`}
                  >
                    <PhoneCall className="w-3 h-3" />
                    <span>Voice</span>
                  </button>
                </div>

                {/* Minimize Button */}
                <button
                  type="button"
                  onClick={() => setMinimized(!minimized)}
                  className="p-1 rounded-md text-primary-fixed hover:bg-primary-container transition-colors cursor-pointer"
                  title={minimized ? 'Maximize' : 'Minimize'}
                >
                  <Minimize2 className="w-4 h-4" />
                </button>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    if (isCallActive) handleEndCall();
                  }}
                  className="p-1 rounded-md text-primary-fixed hover:bg-primary-container transition-colors cursor-pointer"
                  title="Close Assistant"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content Area */}
            {!minimized && (
              <div className="flex-1 flex flex-col min-h-0 bg-surface">
                {/* ========================================================
                    MODE 1: TEXT CHAT & BOOKING
                   ======================================================== */}
                {activeMode === 'chat' && (
                  <div className="flex-1 flex flex-col min-h-0">
                    {/* Chat Messages Scrollable Box */}
                    <div className="flex-1 overflow-y-auto p-3.5 space-y-3">
                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex flex-col ${
                            msg.role === 'user' ? 'items-end' : 'items-start'
                          }`}
                        >
                          <div
                            className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed shadow-xs ${
                              msg.role === 'user'
                                ? 'bg-primary text-on-primary rounded-tr-xs'
                                : 'bg-surface-container-lowest text-on-surface border border-surface-container-high rounded-tl-xs'
                            }`}
                          >
                            <p className="whitespace-pre-line">{msg.content}</p>

                            {/* Verified Booking Card if AI scheduled inspection */}
                            {msg.booking && (
                              <div className="mt-3 p-3 bg-surface-container rounded-xl border border-primary/20 space-y-2">
                                <div className="flex items-center gap-1.5 text-primary font-bold text-xs">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                  <span>Free Drone Inspection Scheduled!</span>
                                </div>
                                <div className="text-[11px] text-secondary space-y-1">
                                  {msg.booking.name && (
                                    <div><strong>Homeowner:</strong> {msg.booking.name}</div>
                                  )}
                                  {msg.booking.phone && (
                                    <div><strong>Callback:</strong> {msg.booking.phone}</div>
                                  )}
                                  {msg.booking.service && (
                                    <div><strong>System:</strong> {msg.booking.service}</div>
                                  )}
                                  {msg.booking.datetime && (
                                    <div><strong>Appointment:</strong> {msg.booking.datetime}</div>
                                  )}
                                  {msg.booking.address && (
                                    <div><strong>Property:</strong> {msg.booking.address}</div>
                                  )}
                                </div>
                                <div className="pt-1 flex items-center gap-1 text-[10px] text-primary font-semibold">
                                  <ShieldCheck className="w-3.5 h-3.5 text-tertiary-container" />
                                  <span>Dispatch team confirmed. 30-day price lock active.</span>
                                </div>
                              </div>
                            )}
                          </div>
                          <span className="text-[10px] text-secondary mt-1 px-1">
                            {msg.time}
                          </span>
                        </div>
                      ))}

                      {isChatLoading && (
                        <div className="flex items-center gap-2 text-secondary text-xs p-2 bg-surface-container rounded-xl self-start animate-pulse">
                          <Bot className="w-4 h-4 text-primary" />
                          <span>Elena is thinking...</span>
                        </div>
                      )}
                      <div ref={chatBottomRef} />
                    </div>

                    {/* Suggested Prompt Chips */}
                    <div className="px-3 py-1.5 border-t border-surface-container flex items-center gap-1.5 overflow-x-auto no-scrollbar bg-surface-container-lowest shrink-0">
                      {suggestedPrompts.map((prompt, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleSendMessage(prompt)}
                          className="px-2.5 py-1 rounded-full bg-surface-container hover:bg-surface-container-high text-primary text-[11px] whitespace-nowrap transition-colors border border-surface-container cursor-pointer shrink-0"
                        >
                          {prompt}
                        </button>
                      ))}
                    </div>

                    {/* Chat Input Form */}
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSendMessage();
                      }}
                      className="p-3 border-t border-surface-container-high bg-surface-container-lowest flex items-center gap-2 shrink-0"
                    >
                      <input
                        type="text"
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        placeholder="Ask a question or request inspection..."
                        className="flex-1 px-3 py-2 text-xs sm:text-sm bg-surface-container rounded-xl border border-surface-container text-on-surface focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                      <button
                        type="submit"
                        disabled={!chatInput.trim() || isChatLoading}
                        className="p-2 rounded-xl bg-primary text-on-primary hover:bg-primary-container disabled:opacity-40 transition-colors cursor-pointer"
                        aria-label="Send message"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </form>
                  </div>
                )}

                {/* ========================================================
                    MODE 2: REAL-TIME AI VOICE CALL
                   ======================================================== */}
                {activeMode === 'voice' && (
                  <div className="flex-1 flex flex-col justify-between p-4 bg-surface-container-lowest overflow-y-auto">
                    {/* Top Call Info */}
                    <div className="flex flex-col items-center text-center space-y-2 pt-2">
                      {/* Audio Pulse Ring Visualizer */}
                      <div className="relative flex items-center justify-center my-3">
                        <span
                          className={`absolute inline-flex h-24 w-24 rounded-full transition-all duration-500 ${
                            isAgentSpeaking
                              ? 'bg-tertiary-container/30 animate-ping'
                              : isListening
                              ? 'bg-primary-container/30 animate-pulse'
                              : 'bg-surface-container'
                          }`}
                        />
                        <span
                          className={`absolute inline-flex h-20 w-20 rounded-full transition-all ${
                            isAgentSpeaking
                              ? 'bg-tertiary-container/40'
                              : isListening
                              ? 'bg-primary/20'
                              : 'bg-surface-container'
                          }`}
                        />
                        <div
                          className={`relative w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-all ${
                            isCallActive
                              ? 'bg-primary text-on-primary ring-4 ring-primary-fixed/40'
                              : 'bg-surface-container text-secondary'
                          }`}
                        >
                          <PhoneCall
                            className={`w-7 h-7 ${
                              isAgentSpeaking ? 'animate-bounce text-primary-fixed' : ''
                            }`}
                          />
                        </div>
                      </div>

                      <div>
                        <h4 className="font-headline-sm text-base font-bold text-primary">
                          Elena &bull; Voice Consultation
                        </h4>
                        <div className="flex items-center justify-center gap-2 mt-1">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-xs font-semibold text-secondary">
                            {isCallActive ? `Call Connected &bull; ${formatTimer(callDuration)}` : 'Call Disconnected'}
                          </span>
                        </div>
                        <p className="text-xs text-primary font-medium mt-1 bg-surface-container px-3 py-1 rounded-full inline-block">
                          {voiceStatusText}
                        </p>
                      </div>
                    </div>

                    {/* Verified Booking Card in Voice Call */}
                    {confirmedBooking && (
                      <div className="my-2 p-3 bg-surface-container rounded-xl border border-primary/20 space-y-1.5 animate-fadeIn">
                        <div className="flex items-center gap-1.5 text-primary font-bold text-xs">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Inspection Confirmed via Phone!</span>
                        </div>
                        <div className="text-[11px] text-secondary space-y-0.5">
                          {confirmedBooking.name && <div><strong>Name:</strong> {confirmedBooking.name}</div>}
                          {confirmedBooking.phone && <div><strong>Phone:</strong> {confirmedBooking.phone}</div>}
                          {confirmedBooking.datetime && <div><strong>Window:</strong> {confirmedBooking.datetime}</div>}
                          {confirmedBooking.address && <div><strong>Location:</strong> {confirmedBooking.address}</div>}
                        </div>
                      </div>
                    )}

                    {/* Live Transcript Snippet */}
                    <div className="my-2 p-2.5 rounded-xl bg-surface-container-low max-h-32 overflow-y-auto space-y-1 text-xs">
                      {voiceTranscripts.slice(-3).map((item, i) => (
                        <div key={i} className="leading-snug">
                          <strong className={item.speaker === 'agent' ? 'text-primary' : 'text-secondary'}>
                            {item.speaker === 'agent' ? 'Elena: ' : 'You: '}
                          </strong>
                          <span className="text-on-surface">{item.text}</span>
                        </div>
                      ))}
                      {voiceTranscripts.length === 0 && (
                        <p className="text-[11px] text-secondary text-center py-2">
                          Speak naturally into your microphone. Elena will answer and schedule your estimate.
                        </p>
                      )}
                    </div>

                    {/* Text fallback input during call */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-1.5">
                        <input
                          type="text"
                          value={manualVoiceInput}
                          onChange={(e) => setManualVoiceInput(e.target.value)}
                          placeholder="Or type what you want to say..."
                          className="flex-1 px-3 py-1.5 text-xs bg-surface-container rounded-lg border border-surface-container text-on-surface focus:outline-none focus:ring-1 focus:ring-primary"
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && manualVoiceInput.trim()) {
                              processUserVoiceMessage(manualVoiceInput);
                              setManualVoiceInput('');
                            }
                          }}
                        />
                        <button
                          type="button"
                          onClick={() => {
                            if (manualVoiceInput.trim()) {
                              processUserVoiceMessage(manualVoiceInput);
                              setManualVoiceInput('');
                            }
                          }}
                          className="px-2.5 py-1.5 bg-primary text-on-primary rounded-lg text-xs font-bold cursor-pointer"
                        >
                          Send
                        </button>
                      </div>

                      {/* Call Action Bar: Mute, Voice Toggle, End Call */}
                      <div className="flex items-center justify-center gap-4 pt-2 border-t border-surface-container">
                        <button
                          type="button"
                          onClick={toggleMute}
                          className={`p-3 rounded-full transition-all cursor-pointer ${
                            isMuted
                              ? 'bg-error-container text-on-error-container'
                              : 'bg-surface-container text-primary hover:bg-surface-container-high'
                          }`}
                          aria-label={isMuted ? 'Unmute microphone' : 'Mute microphone'}
                        >
                          {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            if (isCallActive) {
                              handleEndCall();
                            } else {
                              handleStartCall();
                            }
                          }}
                          className={`px-6 py-3 rounded-full font-label-md text-sm font-bold flex items-center gap-2 shadow-lg transition-all cursor-pointer ${
                            isCallActive
                              ? 'bg-error text-on-error hover:bg-error/90'
                              : 'bg-tertiary-container text-on-tertiary hover:bg-tertiary'
                          }`}
                        >
                          {isCallActive ? (
                            <>
                              <PhoneOff className="w-4 h-4" />
                              <span>End Call</span>
                            </>
                          ) : (
                            <>
                              <PhoneCall className="w-4 h-4" />
                              <span>Start Voice Call</span>
                            </>
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            if (!isListening) {
                              startSpeechRecognition();
                            }
                          }}
                          className={`p-3 rounded-full bg-surface-container text-primary hover:bg-surface-container-high transition-colors cursor-pointer ${
                            isListening ? 'ring-2 ring-primary animate-pulse' : ''
                          }`}
                          title="Tap to speak"
                        >
                          <Volume2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
