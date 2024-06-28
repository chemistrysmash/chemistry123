import React, { useState } from 'react';
import './Chat.css'
export default function Chat(){
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name.trim() !== '' && message.trim() !== '') {
            const newMessage = {
                id: Date.now(),
                name: name,
                message: message
            };
            setMessages([...messages, newMessage]);
            setName('');
            setMessage('');
        } else {
            alert('Please enter both your name and message.');
        }
    };

    return (
        <div>
            <h2>Message Board</h2>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input className='input-box'
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                />
                <br />
                <label>Message:  </label>
                <input
                    id="message"
                    className="input-box"
                    value={message}
                    onChange={handleMessageChange}
                />
                <br />
                <button type="submit" className='submit'>Submit</button>
            </form>
            <br />
            <h3>Messages:</h3>
            <div className='mesageBoard'>
                {messages.map((msg) => (
                    <div key={msg.id} className='m-box'>
                        <strong>{msg.name}:</strong> {msg.message}
                    </div>
                ))}
            </div>
        </div>
    );
}