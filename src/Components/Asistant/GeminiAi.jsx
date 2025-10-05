import React, { useState, useRef, useEffect, useCallback } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import MainLayout from "../Layout/MainLayout"; // <--- UI Component Import
import { Send, Bot, User, Loader } from "lucide-react";
import { SparklesText } from "../UI/sparkles-text"; // <--- UI Component Import
import { ShimmerButton } from "../UI/shimmer-button"; // <--- UI Component Import

// ⚠️ IMPORTANT: Use env variable in production, not hardcoded
const API_KEY = "AIzaSyD051-66ulVct_Ar3eRNb0bbwzVpd8F7L8";

const GeminiAi = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    {
      role: "model",
      parts: [
        {
          text: "As-salamu alaykum! I am your Deeniverse AI Assistant. How may I help you learn more about Islam today?",
        },
      ],
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);
  const inputRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const userNearBottomRef = useRef(true);

  // Initialize Gemini AI
  const genAI = new GoogleGenerativeAI(API_KEY);
  
  // Scroll helpers
  const isNearBottom = useCallback(() => {
    const el = messagesContainerRef.current;
    if (!el) return true;
    const threshold = 140; // px from bottom
    return el.scrollHeight - (el.scrollTop + el.clientHeight) < threshold;
  }, []);

  const scrollToBottom = useCallback((smooth = true) => {
    const el = messagesContainerRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: smooth ? "smooth" : "auto" });
  }, []);

  useEffect(() => {
    // initial scroll on mount for greeting
    scrollToBottom(false);
  }, [scrollToBottom]);

  // Track manual scroll to decide if we auto-scroll
  useEffect(() => {
    const el = messagesContainerRef.current;
    if (!el) return;
    const handleScroll = () => {
      userNearBottomRef.current = isNearBottom();
    };
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [isNearBottom]);

  // Typing animation with controlled auto-scroll
  const simulateTyping = (text) => {
    setIsTyping(true);
    let i = 0;
    let formattedText = text.replace(/\n\n/g, "<br/><br/>")
      .replace(/\n/g, "<br/>")
      .replace(/\* /g, "• ");
    let messageIndex;
    setHistory((prev) => {
      messageIndex = prev.length;
      return [...prev, { role: "model", parts: [{ text: "" }] }];
    });
    const typingInterval = setInterval(() => {
      if (i <= formattedText.length) {
        const slice = formattedText.substring(0, i);
        setHistory((prev) => {
          const copy = [...prev];
          if (copy[messageIndex]) copy[messageIndex].parts[0].text = slice;
          return copy;
        });
        if (userNearBottomRef.current && (i % 24 === 0 || i === formattedText.length)) {
          scrollToBottom(true);
        }
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        if (userNearBottomRef.current) scrollToBottom(true);
      }
    }, 18);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = { role: "user", parts: [{ text: input }] };
    setHistory((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput("");
  setIsTyping(true);
  // Scroll after rendering user message
  requestAnimationFrame(() => scrollToBottom(true));

    try {
  // Using the latest gemini-2.0-flash model
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      
      const result = await model.generateContent(currentInput);
      const responseText = result.response.text();
      
      // Use typing animation instead of immediate response
      simulateTyping(responseText);
    } catch (error) {
      console.error("Error sending message:", error);
      simulateTyping("Sorry, I encountered an error. Please try again.");
    }
  };

  // ------------------------------------
  // THIS IS THE MISSING UI (JSX RETURN)
  // ------------------------------------
  return (
    <MainLayout>
      <div className="flex flex-col h-[calc(100vh-80px)] bg-gradient-to-b from-[#162a49] via-[#14263f] to-[#0d1b33] text-white">
        <header className="px-4 py-3 md:py-4 text-center border-b border-[#2d5085]/40 bg-[#182F51]/40 backdrop-blur-sm sticky top-0 z-10">
          <SparklesText text="Deeniverse AI Assistant" />
          <p className="text-[13px] md:text-sm text-[#b1c2db] mt-1 tracking-wide">Your guide to Islamic knowledge</p>
        </header>
        <main
          ref={messagesContainerRef}
          className="flex-1 overflow-y-auto p-3 md:p-6 space-y-5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#2c4d7a]/60 hover:scrollbar-thumb-[#35619b]/70"
        >
          {history.map((msg, index) => (
            <div
              key={index}
              className={`group flex w-full items-end gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"} font-[450]`}
            >
              {msg.role === "model" && (
                <div className="w-9 h-9 bg-[#C0A34E] shadow-inner shadow-black/30 ring-2 ring-[#c0a34e]/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot size={20} className="text-[#182F51]" />
                </div>
              )}
              <div
                className={`relative max-w-[78%] md:max-w-[70%] px-4 py-3 rounded-2xl leading-relaxed tracking-wide text-[13.5px] md:text-[14px] shadow-sm transition-colors ${msg.role === "user" ? "bg-[#C0A34E] text-[#1c2f4d] rounded-br-sm shadow-[#c0a34e]/20" : "bg-[#1c345b]/70 backdrop-blur-sm border border-[#325f9f]/30 rounded-bl-sm text-[#e6edf5]"}`}
              >
                <div
                  className="prose prose-invert max-w-none [&_strong]:text-[#C0A34E]"
                  dangerouslySetInnerHTML={{ __html: msg.parts[0].text || "&nbsp;" }}
                ></div>
                {index === 0 && (
                  <span className="absolute -top-2 left-3 text-[10px] uppercase tracking-wider text-[#c0a34e]/70">Assistant</span>
                )}
              </div>
              {msg.role === "user" && (
                <div className="w-9 h-9 bg-gray-500/70 ring-2 ring-gray-400/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <User size={19} />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-start gap-3 justify-start">
              <div className="w-9 h-9 bg-[#C0A34E] rounded-full flex items-center justify-center flex-shrink-0 ring-2 ring-[#c0a34e]/30">
                <Bot size={20} className="text-[#182F51]" />
              </div>
              <div className="max-w-[78%] md:max-w-[70%] px-4 py-3 rounded-2xl bg-[#1d375f]/70 backdrop-blur-md border border-[#325f9f]/30 rounded-bl-sm shadow-sm">
                <Loader className="animate-spin mx-auto text-[#c0a34e]" size={20} />
                <span className="block mt-1 text-[12px] tracking-wide text-gray-300 text-center">Thinking...</span>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </main>
        <footer className="p-3 md:p-4 border-t border-[#2d5085]/40 bg-[#182F51]/40 backdrop-blur-sm">
          <form
            onSubmit={handleSend}
            className="flex items-center gap-2 md:gap-3 max-w-4xl mx-auto"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend(e);
                }
              }}
              placeholder="Ask about Quran, Hadith, history..."
              className="flex-1 bg-[#1d3356]/70 border border-[#2f538c]/50 rounded-full px-5 py-3 text-[14px] text-white placeholder-[#90a4be]/50 focus:outline-none focus:ring-2 focus:ring-[#C0A34E] focus:border-transparent transition shadow-inner"
              autoComplete="off"
            />
            <ShimmerButton
              type="submit"
              disabled={loading || !input.trim()}
              className="flex items-center justify-center gap-2 min-w-[90px]"
            >
              <Send size={18} />
              <span className="hidden sm:inline">Send</span>
            </ShimmerButton>
          </form>
          <p className="text-[11px] md:text-[12px] text-center text-[#8aa2c1] mt-2 tracking-wide">AI may err. Verify important religious information with qualified scholars.</p>
        </footer>
      </div>
    </MainLayout>
  );
};

export default GeminiAi;
