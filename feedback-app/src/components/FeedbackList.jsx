import React, { useContext } from 'react';
import FeedbackItem from "./FeedbackItem"
// import { FeedbackContext } from './context/Feedbackcontext';
import FeedbackContexts from '../context/FeedbackContexts';

function FeedbackList() {
    const {feedback} = useContext(FeedbackContexts)
    if (!feedback || feedback.length === 0) {
        return <h2> No feedback yet !!</h2>
    }
    return (
        <div>
            {feedback.map((item, index) => (
                <FeedbackItem key= {index} feedbackitem ={item} />
            ) )}
        </div>
    );
}

export default FeedbackList;
