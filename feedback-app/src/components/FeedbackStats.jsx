import React, { useContext } from 'react';
// import { FeedbackContext } from './context/Feedbackcontext';
import FeedbackContexts from '../context/FeedbackContexts';

function FeedbackStats() {
    const {feedback} = useContext(FeedbackContexts)

    let avgRate = feedback.reduce((accumulator, currentvalue) => {
        return accumulator + currentvalue.rating;
    }, 0) / feedback.length
    
    return (
        <div className="feedback-stats">
            <h4>feedbacks: {feedback.length}</h4>
            <h4>Average: {isNaN(avgRate) ? 0 : avgRate}</h4>
        </div>
    );
}

export default FeedbackStats;
