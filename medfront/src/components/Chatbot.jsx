import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I am JaanJivan AI. Describe your symptoms." }
  ]);

  const [input, setInput] = useState("");

  const sendMessage = async () => {

    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };

    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    try {

      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: input })
      });

      const data = await res.json();

      const botMessage = {
        sender: "bot",
        text: data.reply || "Sorry I couldn't understand."
      };

      setMessages((prev) => [...prev, botMessage]);

    } catch (error) {

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Server error. Please try again." }
      ]);

    }

  };


  // FORMAT AI RESPONSE
  const formatBotMessage = (text) => {

    const sections = text.split("\n\n");

    return sections.map((section, index) => {

      const lines = section.split("\n");
      const title = lines[0];
      const items = lines.slice(1);

      return (
        <div key={index} className="ai-section">

          <div className="ai-title">{title}</div>

          <ul>
            {items.map((item, i) => (
              <li key={i}>
                {item.replace("-", "").replace("•", "").trim()}
              </li>
            ))}
          </ul>

        </div>
      );

    });

  };


  return (
    <>

      {/* Floating Chat Icon */}

      <div className="chat-icon-container" onClick={() => setIsOpen(!isOpen)}>
        <div className="chat-icon">💬</div>
        <span className="ai-label">AI Diagnosis</span>
      </div>


      {/* Chat Window */}

      {isOpen && (
        <div className="chat-container">

          <div className="chat-header">
            🩺 JaanJivan AI Assistant
            <span className="close-btn" onClick={() => setIsOpen(false)}>✖</span>
          </div>

          <div className="chat-box">

            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>

                {msg.sender === "bot"
                  ? formatBotMessage(msg.text)
                  : msg.text}

              </div>
            ))}

          </div>

          <div className="chat-input">

            <input
              type="text"
              placeholder="Describe your symptoms..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />

            <button onClick={sendMessage}>
              Send
            </button>

          </div>

          <div className="chat-disclaimer">
            ⚠️ AI provides health information only and does not replace a doctor.
          </div>

        </div>
      )}

    </>
  );
};

export default Chatbot;