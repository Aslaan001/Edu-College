"use client";
import Link from "next/link";
import {
  FaGraduationCap,
  FaUniversity,
  FaBookOpen,
  FaClipboardCheck,
  FaRobot,
} from "react-icons/fa";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useState, useEffect, useRef } from "react";
import useGetUser from "@/hook/useGetUser";
import { getGeminiResponse } from "@/hook/useGetResponse";

export default function Home() {
  const { data: session } = useSession();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const { user } = useGetUser();

  const isLoggedIn = session?.user || user;

  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);
  const handleSignOut = () => {
    signOut();
    localStorage.clear();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setChatOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Chatbot states
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);
  const chatRef = useRef(null);
  const endOfChatRef = useRef(null);
  const [botThinking, setBotThinking] = useState(false);


  const handleChatSubmit = async () => {
    if (!chatInput.trim()) return;
    setBotThinking(true);
    const userMessage = chatInput;
    setChatHistory((prev) => [
      ...prev,
      { question: userMessage, answer: null },
    ]);
    setChatInput("");
    try {
      const res = await getGeminiResponse(userMessage);
      setChatHistory((prev) => {
        // Replace the last message's answer with the real response
        const updated = [...prev];
        const last = updated.pop();
        updated.push({ ...last, answer: res });
        return updated;
      });
    } catch (error) {
      let errorMsg = "Sorry, something went wrong. Please try again.";
      if (error.message && error.message.includes("503")) {
        errorMsg = "The AI model is overloaded. Please try again in a few minutes.";
      } else if (error.message && error.message.includes("overloaded")) {
        errorMsg = "The AI model is overloaded. Please try again in a few minutes.";
      }
      setChatHistory((prev) => {
        const updated = [...prev];
        const last = updated.pop();
        updated.push({ ...last, answer: errorMsg });
        return updated;
      });
    }
    setBotThinking(false);
  };

  useEffect(() => {
    if (endOfChatRef.current) {
      endOfChatRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory, botThinking]);

  return (
    <>
      <div className="font-sans">
        {/* Header */}
        <header className="bg-gray-200 py-5">
          <div className="container mx-auto px-5">
            <nav className="flex justify-between items-center">
              <div className="flex items-center">
                <FaGraduationCap size={45} color="black" className="mr-2" />
                <h1 className="text-2xl font-bold text-black">Edu-Explorer</h1>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
                {isLoggedIn && (
                  <div className="text-gray-800 font-bold text-2xl lg:text-4xl animate-bounce">
                    Welcome, {session?.user?.name || user.name || "User"}!
                  </div>
                )}
              </div>

              <ul className="flex space-x-8 items-center">
                {isLoggedIn && (
                  <>
                    <li>
                      <Link href="/colleges" className="text-black font-bold">
                        Colleges
                      </Link>
                    </li>
                    <li>
                      <Link href="/add" className="text-black font-bold">
                        Add Your College
                      </Link>
                    </li>
                    <li>
                      <Link href="/about2" className="text-black font-bold">
                        About
                      </Link>
                    </li>
                    <li>
      <Link href="/contact" className="text-black font-bold">
        Contact
      </Link>
    </li>
                  </>
                )}

                <div
                  className="ml-auto flex items-center space-x-8 relative"
                  ref={dropdownRef}
                >
                  {isLoggedIn ? (
                    <>
                      <img
                        src={
                          session?.user?.image ||
                          (user?.name
                            ? `https://ui-avatars.com/api/?name=${encodeURIComponent(
                                user.name
                              )}`
                            : "/default-avatar.png")
                        }
                        alt="Profile Picture"
                        width={40}
                        height={40}
                        className="rounded-full cursor-pointer border-2 border-gray-400 text-black"
                        onClick={toggleDropdown}
                      />
                      {dropdownVisible && (
                        <ul className="absolute right-0 mt-32 w-48 bg-white border rounded-lg shadow-lg z-10">
                          <li className="px-4 py-2 hover:bg-gray-100">
                            <Link href="/profile" className="text-black">
                              View Profile - {session?.user?.name || user?.name}
                            </Link>
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            <button
                              onClick={handleSignOut}
                              className="w-full text-left text-black"
                            >
                              Sign-Out
                            </button>
                          </li>
                        </ul>
                      )}
                    </>
                  ) : (
                    <>
                      <li>
                        <Link
                          href="/login"
                          className="text-black text-xl font-bold"
                        >
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/signup"
                          className="text-black text-xl font-bold"
                        >
                          Sign-up
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about2"
                          className="text-black text-xl font-bold mr-24"
                        >
                          About
                        </Link>
                      </li>
                    </>
                  )}
                </div>
              </ul>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section className="bg-gray-800 text-white py-28 text-center">
          <div className="container mx-auto">
            {isLoggedIn ? (
              <>
                <h1 className="text-4xl font-bold mb-5">
                  Find Your Perfect College Match
                </h1>
                <p className="text-lg mb-8">
                  Use our tools and resources to make the best decision for your
                  future.
                </p>
                <Link
                  href="/colleges"
                  className="bg-orange-500 text-white py-3 px-6 rounded-md font-bold"
                >
                  Explore Categories
                </Link>
              </>
            ) : (
              <>
                <h1 className="text-4xl font-bold mb-5 relative overflow-hidden h-16">
                  {/* <span className="absolute animate-marquee whitespace-nowrap">
                    Welcome to Edu-Explorer | Discover Colleges | Find Your
                    Path! | Made By Aslaan Khan , Amrish Singh , Karan , Aditya
                    Singh , Owaish |
                  </span> */}

                  <span className="absolute animate-marquee whitespace-nowrap">
                    Welcome to Edu-Explorer | Discover Colleges | Find Your
                    Path! | Made By Muskan-Ali | Cooperate Training Project
                  </span>
                </h1>
                <Link
                  href="/signup"
                  className="bg-orange-500 text-white py-3 px-6 rounded-md font-bold"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </section>

        {/* Features */}
        <section className="py-20 ml-10 mr-10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border p-6 rounded-lg text-left">
                <FaUniversity size={60} color="blue" className="mb-5" />
                <h3 className="text-2xl font-bold mb-3">College Search</h3>
                <p>Find detailed information on thousands of colleges.</p>
              </div>
              <div className="border p-6 rounded-lg text-left">
                <FaBookOpen size={60} color="green" className="mb-5" />
                <h3 className="text-2xl font-bold mb-3">Course Comparison</h3>
                <p>Compare different courses and find the best fit for you.</p>
              </div>
              <div className="border p-6 rounded-lg text-left">
                <FaClipboardCheck size={60} color="orange" className="mb-5" />
                <h3 className="text-2xl font-bold mb-3">Admission Guidance</h3>
                <p>Get expert advice on the admission process.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-5 text-center">
          <div className="container mx-auto">
            <p>&copy; 2023 Your College Website. All Rights Reserved.</p>
          </div>
        </footer>

        {/* Floating Chatbot Button */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg flex items-center z-50"
        >
          <FaRobot className="mr-2" />
          Robo Chat
        </button>

        {/* Chatbot Popup */}
        {chatOpen && (
          <div
            ref={chatRef}
            className="fixed bottom-24 right-6 w-80 sm:w-96 max-h-[70vh] bg-gray-900 border border-gray-800 shadow-2xl rounded-2xl flex flex-col z-50 animate-fade-in"
            style={{ transition: 'all 0.3s' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gray-950 text-white rounded-t-2xl border-b border-gray-800">
              <div className="flex items-center gap-2">
                <FaRobot className="text-2xl text-blue-400" />
                <span className="font-bold text-lg">Edu-Explorer AI Assistant</span>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="text-white text-2xl font-bold hover:text-blue-400 focus:outline-none"
                aria-label="Close Chat"
              >
                &times;
              </button>
            </div>
            {/* Chat History */}
            <div className="p-4 flex-1 overflow-y-auto space-y-6 bg-gray-900">
              {chatHistory.length === 0 && (
                <div className="text-center text-gray-500 italic">How can I help you today?</div>
              )}
              {chatHistory.map((item, index) => (
                <div key={index}>
                  {/* User message */}
                  <div className="flex flex-col items-end mb-1">
                    <span className="text-xs text-gray-400 font-semibold mb-1 pr-1">You</span>
                    <div className="bg-blue-600 text-white rounded-2xl px-5 py-2 max-w-[70%] shadow-lg text-sm font-medium">
                      {item.question}
                    </div>
                  </div>
                  {/* Bot message */}
                  {item.answer && (
                    <div className="flex flex-col items-start mt-2">
                      <span className="text-xs text-blue-400 font-semibold mb-1 pl-1">Edu-Chat Bot</span>
                      <div className="bg-gray-800 text-blue-200 rounded-2xl px-5 py-2 max-w-[80%] shadow border border-gray-700 text-sm flex items-center gap-2">
                        <FaRobot className="text-blue-400" />
                        <span>{item.answer}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {botThinking && (
                <div className="flex flex-col items-start mt-2">
                  <span className="text-xs text-blue-400 font-semibold mb-1 pl-1">Edu-Chat Bot</span>
                  <div className="bg-gray-800 text-blue-200 rounded-2xl px-5 py-2 max-w-[80%] shadow border border-gray-700 text-sm flex items-center gap-2 animate-pulse">
                    <FaRobot className="text-blue-400" />
                    <span>Edu-Explorer is thinking...</span>
                  </div>
                </div>
              )}
              <div ref={endOfChatRef} />
            </div>
            {/* Input Area */}
            <div className="p-3 border-t border-gray-800 flex items-center bg-gray-900 rounded-b-2xl">
              <textarea
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onFocus={() => setIsTextareaFocused(true)}
                onBlur={() => setIsTextareaFocused(false)}
                rows={isTextareaFocused ? 3 : 1}
                placeholder="Ask something..."
                className="flex-1 resize-none border border-blue-600 rounded-xl p-2 mr-2 text-white transition-all duration-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 bg-gray-800"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleChatSubmit();
                  }
                }}
              />
              <button
                type="button"
                onClick={handleChatSubmit}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl shadow font-bold flex items-center gap-1 transition-all duration-200 disabled:opacity-50"
                disabled={!chatInput.trim()}
              >
                <FaRobot className="text-lg" />
                Send
              </button>
            </div>
          </div>
        )}

        {/* CSS Animation */}
        <style jsx>{`
          .animate-pulse {
            animation: pulse 2s infinite;
          }
          @keyframes pulse {
            0%,
            100% {
              opacity: 1;
            }
            50% {
              opacity: 0.7;
            }
          }
          .animate-marquee {
            animation: marquee 15s linear infinite;
          }
          @keyframes marquee {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .animate-fade-in {
            animation: fadeIn 0.3s;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </>
  );
}
