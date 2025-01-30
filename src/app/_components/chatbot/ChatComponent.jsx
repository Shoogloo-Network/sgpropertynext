import React, { useState } from "react";

const ChatComponent = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
      {/* Chat Toggle Button */}
      {!isChatOpen && (
        <button
          onClick={toggleChat}
          style={{
            backgroundColor: "#007BFF",
            color: "#fff",
            padding: "15px 20px",
            borderRadius: "30px",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          <span style={{ fontSize: "20px" }}>💬</span>
          <span>Chat</span>
        </button>
      )}

      {/* Chat Section */}
      {isChatOpen && (
        <div
          style={{
            position: "fixed",
            top:"60px",
            bottom: "60px",
            right: "20px",
            width: "400px",
            height: "600px",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
            overflow: "hidden",
            animation: "fadeIn 0.3s ease-in-out",
          }}
        >
          {/* Chat Header */}
          <div
            style={{
              backgroundColor: "#007BFF",
              color: "#fff",
              padding: "10px",
              borderRadius: "20px 20px 0 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            <span>Welcome to Chat</span>
            <button
              onClick={toggleChat}
              style={{
                backgroundColor: "transparent",
                color: "#fff",
                border: "none",
                fontSize: "18px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              ✖
            </button>
          </div>

          {/* Chat Iframe */}
          <iframe
            title="Chatbot"
            src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/01/24/12/20250124121625-VF05UZOK.json"
            style={{
              width: "100%",
              height: "80%",
              border: "none",
              borderRadius: "0 0 20px 20px",
            }}
            allow="clipboard-write"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default ChatComponent;
