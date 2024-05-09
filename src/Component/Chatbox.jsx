// Chatbox.js

import React, { useState } from "react";
import "./Chatbox.css"; // Add your chatbox styles

const Chatbox = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("home");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const toggleChatbox = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`${isOpen ? "open" : ""}`}>
            {/* Chat icon */}
            <div onClick={toggleChatbox}>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/5962/5962463.png"
                    alt="Chat Icon"
                    style={{ height: "40px" }}
                />
            </div>

            {/* Chatbox content */}
            {isOpen && (
                <div className="tabs chatbox">
                    <div
                        className={`tab ${activeTab === "home" ? "active" : ""}`}
                        onClick={() => handleTabChange("home")}
                    >
                        Home
                    </div>
                    <div
                        className={`tab ${activeTab === "messages" ? "active" : ""}`}
                        onClick={() => handleTabChange("messages")}
                    >
                        Messages
                    </div>
                    <div
                        className={`tab ${activeTab === "help" ? "active" : ""}`}
                        onClick={() => handleTabChange("help")}
                    >
                        Help
                    </div>
                </div>
            )}

            {/* Content for each tab */}
            {isOpen && activeTab === "home" && <div className="tab-content">Home Content</div>}
            {isOpen && activeTab === "messages" && <div className="tab-content">Messages Content</div>}
            {isOpen && activeTab === "help" && <div className="tab-content">Help Content</div>}
        </div>
    );
};

export default Chatbox;
