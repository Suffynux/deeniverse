import React, { useState, useRef, useEffect } from "react";
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
  const [autoScroll, setAutoScroll] = useState(false);
  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  // Initialize Gemini AI
  const genAI = new GoogleGenerativeAI(API_KEY);
  
  // Function to simulate AI typing animation
  const simulateTyping = (text) => {
    setIsTyping(true);
    let i = 0;
    let formattedText = text.replace(/\n\n/g, "<br/><br/>");
    formattedText = formattedText.replace(/\n/g, "<br/>");
    formattedText = formattedText.replace(/\* /g, "• ");
    
    // Create an empty message placeholder
    const messageIndex = history.length;
    setHistory((prev) => [...prev, { role: "model", parts: [{ text: "" }] }]);
    
    const typingInterval = setInterval(() => {
      if (i <= formattedText.length) {
        setHistory((prev) => {
          const newHistory = [...prev];
          if (newHistory[messageIndex]) {
            newHistory[messageIndex].parts[0].text = formattedText.substring(0, i);
          }
          return newHistory;
        });
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        setAutoScroll(true);
      }
    }, 15); // Adjust typing speed here
  };

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  useEffect(() => {
    if (autoScroll && chatEndRef.current) {
      scrollToBottom();
      setAutoScroll(false);
    }
  }, [history, autoScroll]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = { role: "user", parts: [{ text: input }] };
    setHistory((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput("");
    setIsTyping(true);

    try {
      // Using the latest gemini-2.0-flash model
   const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" })
      
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
      <div className="flex flex-col h-[calc(100vh-80px)] bg-gradient-to-b from-[#182F51] to-[#0f1f3a] text-white">
        <header className="p-4 text-center border-b border-[#366AB7]/30">
          <SparklesText text="Deeniverse AI Assistant" />
          <p className="text-sm text-gray-400 mt-1">
            Your guide to Islamic knowledge
          </p>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
          {history.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.role === "model" && (
                <div className="w-8 h-8 bg-[#C0A34E] rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot size={20} className="text-[#182F51]" />
                </div>
              )}
              <div
                className={`max-w-lg p-3 rounded-2xl ${
                  msg.role === "user"
                    ? "bg-[#C0A34E] text-[#182F51] rounded-br-none"
                    : "bg-[#1a3258]/80 border border-[#366AB7]/30 rounded-bl-none"
                }`}
              >
                <div
                  className="prose prose-invert text-sm leading-relaxed"
                  // Using dangerouslySetInnerHTML to render the HTML formatted text
                  dangerouslySetInnerHTML={{ __html: msg.parts[0].text }}
                />
              </div>
              {msg.role === "user" && (
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <User size={20} />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-start gap-3 justify-start">
              <div className="w-8 h-8 bg-[#C0A34E] rounded-full flex items-center justify-center flex-shrink-0">
                <Bot size={20} className="text-[#182F51]" />
              </div>
              <div className="max-w-lg p-3 rounded-2xl bg-[#1a3258]/80 border border-[#366AB7]/30 rounded-bl-none">
                <div className="flex items-center gap-2">
                  <Loader className="animate-spin" size={20} />
                  <span className="text-sm text-gray-400">Thinking...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </main>

        <footer className="p-4 border-t border-[#366AB7]/30">
          <form
            onSubmit={handleSend}
            className="flex items-center gap-3 max-w-3xl mx-auto"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Islam..."
              className="flex-1 bg-[#1a3258]/50 border border-[#366AB7]/40 rounded-full px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C0A34E] transition"
            />
            <ShimmerButton
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2"
            >
              <Send size={18} />
              <span className="hidden sm:inline">Send</span>
            </ShimmerButton>
          </form>
          <p className="text-xs text-center text-gray-500 mt-2">
            AI can make mistakes. Consider checking important information.
          </p>
        </footer>
      </div>
    </MainLayout>
  );
};

export default GeminiAi;
