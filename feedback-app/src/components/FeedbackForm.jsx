import React, { useEffect, useState } from 'react';
import Button from "./shared/Button"
import Card from "./shared/Card"
import SelectRated from './selectrated';
import { useContext } from 'react';
// import { FeedbackContext } from './context/FeedbackContext';
// import {FeedbackContext} from './context/Feedbackcontext';
import FeedbackContexts from '../context/FeedbackContexts';

function FeedbackForm() {
    const {addFeedback, feedbackEdit, updatedFeedback} =useContext(FeedbackContexts)
    const [text, setText] = useState ('')
    const [btnDisabled, setbtnDisabled] = useState(true)
    const [message, setmessage] = useState('')
    const [rating, setRating] = useState(6)

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setbtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit]);


    const handleFeedback = (event) => {
        if (text === '') {
            setmessage(null)
            setbtnDisabled(true)
        } else if (text !== null && text.trim().length <=15) {
            setmessage("you must have atleast 15 characters")
        } else{
            setbtnDisabled(false)
            setmessage("")
        }
        setText(event.target.value)
        console.log(event.target.value);
        
    };

    const handleSubmit = (e) => {  
        if (text.trim().length > 15) {
            const newfeedback ={
                text: text,
                rating: rating
            }
            if (feedbackEdit.item === true){
                updatedFeedback(feedbackEdit.item.id, newfeedback)

            }else{
                addFeedback(newfeedback)
            }
            console.log(newfeedback)
            // addhandler(newfeedback)//
            // console.log(newfeedback);
        };
        setText("");
        e.preventDefault();
    };
    


    return (
        <Card>
            <h2>How would you like to rate our service</h2>
            <form onSubmit={handleSubmit}>
                <SelectRated select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input type="text" value={text} placeholder='write a view' onChange={handleFeedback} />
                    <Button type={"submit"} isdisabled={btnDisabled} version={"secondary"}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div> }
            </form>
            
            
        </Card>
    );
}

export default FeedbackForm;
