"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button, Input, Card } from "@heroui/react";
import {
  LuBrainCircuit,
  LuSend,
  LuTrash2,
  LuUser,
  LuSparkles,
} from "react-icons/lu";
import { TbHelpCircle } from "react-icons/tb";

// Message Interface Types
interface Message {
  id: string;
  role: "user" | "ai";
  text: string;
  timestamp: Date;
}

const SUGGESTED_QUESTIONS = [
  "Explain this clinical trial.",
  "What is Phase 3?",
  "Am I eligible for this trial?",
  "Explain EGFR mutation."
];

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto Scroll to the latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  /**
   * BACKEND PREPARATION: Gemini API API Handler
   * This function isolates backend connection from the UI logic.
   */
  const fetchAIResponse = async (userPrompt: string): Promise<string> => {
    // API Intregation Point:
    // const response = await fetch('/api/gemini-chat', { method: 'POST', body: JSON.stringify({ prompt: userPrompt }) });
    // const data = await response.json();

    // Simulating Network Latency for Gemini Response
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          `This is a simulated workspace environment response from MedVantage AI analyzing: "${userPrompt}". Connect this block within fetchAIResponse() to standard Gemini SDK endpoints inside production nodes.`
        );
      }, 1500);
    });
  };

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      text: textToSend,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      const aiText = await fetchAIResponse(textToSend);

      const aiMessage: Message = {
        id: crypto.randomUUID(),
        role: "ai",
        text: aiText,
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Failed to generate stream/response:", error);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage(inputValue);
    }
  };

  const clearChat = () => {
    setMessages([]);
    setIsTyping(false);
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 p-1 sm:p-2 selection:bg-emerald-500/10 text-zinc-900 h-[calc(100vh-120px)] flex flex-col justify-between">

      {/* 1. Header Layout */}
      <div>
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
            <LuBrainCircuit className="h-5 w-5" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">AI Assistant</h1>
        </div>
        <p className="text-xs sm:text-sm text-zinc-500 mt-1">
          Ask questions about clinical trials, eligibility, or medical research.
        </p>
      </div>

      {/* 2. Main Chat Workspace Container */}
      <Card className="flex-1 bg-white border border-zinc-100 shadow-sm shadow-zinc-200/50 rounded-2xl flex flex-col overflow-hidden relative min-h-[350px]">

        {/* Chat Scrolling Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          <AnimatePresence initial={false}>
            {messages.length === 0 ? (

              /* Empty State Vector & Welcome Display */
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-3 py-16"
              >
                <div className="h-16 w-16 bg-zinc-50 border border-zinc-100 rounded-full flex items-center justify-center text-zinc-400">
                  <LuSparkles className="h-8 w-8 animate-pulse text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-800">Start a conversation with the AI Assistant</h3>
                  <p className="text-xs text-zinc-400 max-w-xs mt-1">
                    Query protocols, interpret structural inclusion criteria, or expand on complex mutation logs instantly.
                  </p>
                </div>
              </motion.div>

            ) : (

              /* Message Bubble Stream rendering */
              messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex w-full items-start gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {/* AI Avatar */}
                  {msg.role === "ai" && (
                    <div className="h-8 w-8 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center text-xs shrink-0 mt-0.5 shadow-xs">
                      <LuBrainCircuit className="h-4 w-4" />
                    </div>
                  )}

                  {/* Message Bubble Box */}
                  <div
                    className={`max-w-[85%] sm:max-w-[70%] rounded-2xl p-3.5 text-sm shadow-xs ${msg.role === "user"
                      ? "bg-emerald-600 text-white rounded-tr-none"
                      : "bg-zinc-50 text-zinc-800 border border-zinc-100 rounded-tl-none"
                      }`}
                  >
                    <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                    <span className={`block text-[10px] mt-1.5 text-right ${msg.role === "user" ? "text-emerald-200/80" : "text-zinc-400"}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>

                  {/* User Avatar */}
                  {msg.role === "user" && (
                    <div className="h-8 w-8 rounded-lg bg-zinc-100 text-zinc-600 border border-zinc-200 flex items-center justify-center text-xs shrink-0 mt-0.5 shadow-xs">
                      <LuUser className="h-4 w-4" />
                    </div>
                  )}
                </motion.div>
              ))
            )}

            {/* Three Dot Typing Indicator Block */}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-start gap-3 justify-start"
              >
                <div className="h-8 w-8 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center text-xs shrink-0 shadow-xs">
                  <LuBrainCircuit className="h-4 w-4" />
                </div>
                <div className="bg-zinc-50 border border-zinc-100 rounded-2xl rounded-tl-none p-4 flex items-center gap-1.5 shadow-xs">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={chatEndRef} />
        </div>

        {/* 3. Input Console & Quick Actions Wrapper */}
        <div className="p-4 bg-zinc-50/50 border-t border-zinc-100 space-y-3.5">

          {/* Suggested Quick Prompts */}
          {messages.length === 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SUGGESTED_QUESTIONS.map((question, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setInputValue(question)}
                  className="flex items-center gap-2 text-left px-3.5 py-2.5 rounded-xl bg-white border border-zinc-200 hover:border-emerald-500 text-zinc-700 hover:text-emerald-700 text-xs font-medium transition-all shadow-xs cursor-pointer outline-none"
                >
                  <TbHelpCircle className="text-emerald-500 text-sm shrink-0" />
                  <span className="truncate">{question}</span>
                </button>
              ))}
            </div>
          )}

          {/* Interactive Input Form Control Grid */}
          <div className="flex items-center gap-2.5">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything about clinical trials..."
              disabled={isTyping}
              classNames={{
                inputWrapper: "bg-white border border-zinc-200 text-zinc-900 rounded-xl shadow-xs hover:border-zinc-300 focus-within:!border-emerald-500 transition-colors h-11",
                input: "text-sm placeholder:text-zinc-400"
              }}
            />

            <Button
              isIconOnly
              onClick={() => handleSendMessage(inputValue)}
              disabled={!inputValue.trim() || isTyping}
              className="bg-emerald-600 hover:bg-emerald-700 text-white min-w-11 h-11 rounded-xl shadow-xs transition-colors cursor-pointer flex items-center justify-center disabled:opacity-50"
              title="Send Prompt"
            >
              <LuSend className="h-4 w-4" />
            </Button>

            {messages.length > 0 && (
              <Button
                isIconOnly
                onClick={clearChat}
                className="bg-white border border-zinc-200 text-zinc-500 hover:text-rose-600 hover:border-rose-200 min-w-11 h-11 rounded-xl shadow-xs transition-all cursor-pointer flex items-center justify-center"
                title="Clear Workspace History"
              >
                <LuTrash2 className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

      </Card>
    </div>
  );
}