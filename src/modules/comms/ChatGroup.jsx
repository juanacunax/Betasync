import React, { useState } from 'react';
import './ChatGroup.css'; // Assuming you might have some styles

const ChatGroup = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const addMessage = () => {
        if (newMessage.trim()) {
            setMessages([...messages, { text: newMessage, highlighted: false }]);
            setNewMessage('');
        }
    };

    const toggleHighlight = (index) => {
        const updatedMessages = messages.map((msg, i) => 
            i === index ? { ...msg, highlighted: !msg.highlighted } : msg
        );
        setMessages(updatedMessages);
    };

    return (
        <div className="chat-group">
            <div className="messages">
                {messages.map((msg, index) => (
                    <div 
                        key={index} 
                        className={`message ${msg.highlighted ? 'highlighted' : ''}`} 
                        onClick={() => toggleHighlight(index)}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>
            <input 
                value={newMessage} 
                onChange={(e) => setNewMessage(e.target.value)} 
                placeholder="Type a message..."
            />
            <button onClick={addMessage}>Send</button>
        </div>
    );
};

export default ChatGroup;