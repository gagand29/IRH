import React from 'react';
import FeedbackForm from '../components/FeedbackForm';
import '../styles/pages/Feedback.css';

function Feedback() {
    return (
        <div className="feedback-container">
            <div className="feedback-banner">
                <div className="feedback-content">
                    <h2>We Value Your Feedback</h2>
                    <p>Your feedback helps us improve and serve you better. Please take a moment to answer a few questions and provide your valuable input.</p>
                    <p>Please let us know how we can improve this website and share some of your favorite cuisines in the feedback section below.</p>
                </div>
                <div className="feedback-image">
                    <img src="/images/fb.png" alt="Feedback" />
                </div>
            </div>

            <div className="feedback-section">
                <FeedbackForm />
            </div>
        </div>
    );
}

export default Feedback;
