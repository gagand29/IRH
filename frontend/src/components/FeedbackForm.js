import React, { useState } from 'react';
import { createFeedback } from '../api'; // Correct import
import '../styles/components/FeedbackForm.css';

function FeedbackForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createFeedback({ name, email, message });
            alert('Feedback submitted!');
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('Error submitting feedback:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="feedback-form">
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Batman"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Batman@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="message">Your Feedback:</label>
                <textarea
                    id="message"
                    placeholder="I like veggie samosa!! as Starter!"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Submit Feedback</button>
        </form>
    );
}

export default FeedbackForm;
