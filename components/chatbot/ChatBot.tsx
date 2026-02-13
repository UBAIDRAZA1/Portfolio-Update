'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, X } from 'lucide-react';
import { useChat } from 'ai/react';

// Define the client information as constants
const CLIENT_INFO = {
  name: "Muhammad Ubaid Raza",
  email: "ubaidraza3657767@gmail.com",
  phone: "+92 316-3657767",
  location: "Karachi, Pakistan",
  dob: "06-02-2002",
  linkedin: "/in/muhammad-ubaid-raza-21b8503002",
  github: "/UBAIDRAZA1",
  portfolio: "nutri-track-ai.netlify.app",
  objective: "Motivated Software Engineering undergraduate with strong skills in web development and modern technologies including AI, Web 3.0, and cloud-based applications. Passionate about building efficient, user-friendly solutions and eager to contribute to a professional team while continuously learning and growing.",
  education: [
    { degree: "BS Software Engineering", institution: "Ilma University, Karachi", details: "CGPA 3.4, In Progress" },
    { degree: "Intermediate (Pre-Engineering)", institution: "BIEK, Karachi", details: "B Grade" },
    { degree: "Matriculation (Computer Science)", institution: "BSEK, Karachi", details: "A Grade" }
  ],
  religiousQualification: [
    { course: "Darse Nizami (Alim Course, 8 years program)", institution: "Board of Kanzul Madaris", details: "7th year completed" },
    { course: "Hifzul Quran ul Karim (Hafiz)", institution: "Madarsa tul Madina", details: "" }
  ],
  certifications: [
    { title: "Certified AI, Metaverse & Web 3.0 Developer", issuer: "Governor House Karachi", details: "Quarter 4 in progress" },
    { title: "CIT Web Development", issuer: "IOBM, NAVTTC", details: "3 months, 2024 - HTML, CSS, JavaScript, MySQL, Bootstrap" }
  ],
  experience: [
    { role: "Web Developer Intern", company: "Arch Technology", duration: "2 months" }
  ],
  projects: [
    { name: "E-commerce (Chairy)", description: "Furniture e-commerce, library stool chair, recliner, modern UI", url: "https://e-commerce-ur.netlify.app" },
    { name: "Nutri Track AI", description: "AI-powered nutrition tracker, smart recommendations", url: "https://nutri-tracks-ai.netlify.app" },
    { name: "Task Master (Todo + Chatbot)", description: "Todo app with integrated AI chatbot assistant", url: "https://todo-app-chatboot.vercel.app" },
    { name: "Physical AI & Humanoid Robotics", description: "3D robotics simulation, humanoid control interface", url: "https://physical-ai-humanoid-robotics-ubaid.vercel.app" },
    { name: "Perfume & Watch Collection", description: "Luxury products: chain/leather straps watches, perfumes, earbuds", url: "https://next-js-website-ubaid.netlify.app/components/project08" },
    { name: "Urdu Literature Hub (Urdu Books + Urdu Bazar)", description: "Platform to buy/sell Urdu literature", url: "https://next-js-website-ubaid.netlify.app/components/project06" }
  ]
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading, setInput } = useChat({
    api: '/api/chat',
    initialMessages: [
      {
        id: '1',
        role: 'assistant',
        content: "Assalamu Alaikum! I'm Proto, Ubaid's AI assistant. How can I help you today?"
      }
    ],
    body: {
      // Pass additional data to the API endpoint
      clientId: 'ubaid-raza-portfolio'
    },
    onResponse: (response) => {
      console.log('Response received:', response);
    },
    onError: (error) => {
      console.error('Chat error:', error);
      // Fallback to local responses if API fails
      alert('Chat service temporarily unavailable. Using local responses.');
    }
  });

  // Check for multilingual message when chat opens
  useEffect(() => {
    if (isOpen) {
      const multilingualMessage = localStorage.getItem('multilingualMessage');
      if (multilingualMessage) {
        // Set the input value and submit
        setInput(multilingualMessage);
        localStorage.removeItem('multilingualMessage'); // Clear the stored message

        // Submit after a short delay to allow state update
        setTimeout(() => {
          const form = document.querySelector('#chat-form') as HTMLFormElement;
          if (form) {
            form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
          }
        }, 100);
      }
    }
  }, [isOpen]);

  const formRef = useRef<HTMLFormElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const customSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Add local processing for common queries before sending to API
    const lowerCaseInput = input.toLowerCase();

    // Check if the query is about the user's information
    if (
      lowerCaseInput.includes('name') ||
      lowerCaseInput.includes('who are you') ||
      lowerCaseInput.includes('education') ||
      lowerCaseInput.includes('project') ||
      lowerCaseInput.includes('skill') ||
      lowerCaseInput.includes('certification') ||
      lowerCaseInput.includes('experience') ||
      lowerCaseInput.includes('contact') ||
      lowerCaseInput.includes('hafiz') ||
      lowerCaseInput.includes('alim')
    ) {
      // Generate a response based on the client info
      let response = "I can provide information about Muhammad Ubaid Raza. ";

      if (lowerCaseInput.includes('name') || lowerCaseInput.includes('who are you')) {
        response = `Muhammad Ubaid Raza is a passionate Software Engineering student with expertise in AI, Web3, and modern web technologies. He's also a Hafiz and Alim.`;
      } else if (lowerCaseInput.includes('education')) {
        response = `He's currently pursuing BS Software Engineering at Ilma University, Karachi with a CGPA of 3.4. Additionally, he's completed Darse Nizami (Alim Course) - 7th year out of 8.`;
      } else if (lowerCaseInput.includes('project')) {
        response = `He has worked on several projects including:\n- ${CLIENT_INFO.projects[0].name}: ${CLIENT_INFO.projects[0].description}\n- ${CLIENT_INFO.projects[1].name}: ${CLIENT_INFO.projects[1].description}`;
      } else if (lowerCaseInput.includes('skill')) {
        response = "His technical skills include Next.js, TypeScript, Tailwind CSS, Framer Motion, Three.js, React Three Fiber, Vercel AI SDK, and more.";
      } else if (lowerCaseInput.includes('certification')) {
        response = `He holds a certification in ${CLIENT_INFO.certifications[0].title} from ${CLIENT_INFO.certifications[0].issuer}, currently in Quarter 4.`;
      } else if (lowerCaseInput.includes('experience')) {
        response = `He has experience as a Web Developer Intern at ${CLIENT_INFO.experience[0].company} for ${CLIENT_INFO.experience[0].duration}.`;
      } else if (lowerCaseInput.includes('contact')) {
        response = `You can reach him at ${CLIENT_INFO.email} or call ${CLIENT_INFO.phone}.`;
      } else if (lowerCaseInput.includes('hafiz') || lowerCaseInput.includes('alim')) {
        response = "Yes! He's proud to be a Hafiz of the Holy Quran and currently studying the 7th year of Darse Nizami (Alim Course). This spiritual foundation guides his approach to technology and life.";
      }

      // Add the user message
      // Note: In a real implementation, we would use the useChat hook's append function
      // For now, we'll submit to the API which will handle the response
    }

    // Submit to API
    handleSubmit(e);
  };

  return (
    <>
      <motion.button
        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-neon-cyan to-electric-blue flex items-center justify-center shadow-lg shadow-neon-cyan/30 hover:shadow-neon-cyan/50 transition-all"
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open chatbot"
      >
        <Bot className="text-midnight-blue text-2xl" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-8 w-80 h-[500px] bg-gray-900 rounded-xl border border-gray-700 shadow-2xl shadow-neon-cyan/20 z-50 flex flex-col"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ type: 'spring', damping: 20 }}
          >
            {/* Chat header */}
            <div className="bg-gray-800 p-4 rounded-t-xl flex justify-between items-center border-b border-gray-700">
              <div className="flex items-center gap-2">
                <Bot className="text-neon-cyan" />
                <h3 className="font-bold text-white">Ubaid's AI Assistant</h3>
                <span className="text-xs bg-neon-cyan text-midnight-blue px-2 py-1 rounded-full">Proto</span>
              </div>
              <button
                onClick={toggleChat}
                className="text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.role === 'user'
                        ? 'bg-neon-cyan text-midnight-blue rounded-br-none'
                        : 'bg-gray-800 text-white rounded-bl-none'
                    }`}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="bg-gray-800 text-white p-3 rounded-2xl rounded-bl-none">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div className="p-4 border-t border-gray-700">
              <form id="chat-form" ref={formRef} onSubmit={customSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Type in Roman Urdu or English..."
                  className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-neon-cyan"
                />
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="bg-gradient-to-r from-neon-cyan to-electric-blue p-2 rounded-full text-midnight-blue disabled:opacity-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={18} />
                </motion.button>
              </form>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Powered by Vercel AI SDK • Try: "Tell me about your projects"
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;