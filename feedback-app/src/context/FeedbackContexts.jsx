import { createContext, useEffect } from "react";
import { useState } from "react";
// import FeedbackContext from "./FeedbackContext";

const FeedbackContexts = createContext()

export function FeedbackProvider({children}) {
    const [feedback, setfeedback] = useState([])

    const [feedbackEdit, setfeedbackEdit] = useState({
        item: {},
        edit: false
    });

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const response= await fetch("http://localhost:3000/feedback")
        const data = await response.json();
        setfeedback(data )
    }

    const editHandler = (item) => {
        setfeedbackEdit({
            item,
            edit:true
        })
    };

    const updatedFeedback =async (id, uptItem) => {
        const response = await fetch (`http://localhost:3000/feedback/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "appplication/json"
            },
            body: JSON.stringify(uptItem)
        })
        const data = await response.json()
        setfeedbackEdit(feedback.map((item) => item.id ===id? {...item, ...data} : item))
    };

    const deleteFeedback =  async (id) => {
        if (window.confirm("Are you sure you want to delete?...")){
            await fetch(`http://localhost:3000/feedback/${id}`, {method: 'DELETE'})
            setfeedback(feedback.filter((item) => item.id !== id))
        }
    };

    const addFeedback = async (newfeedback) => {
        const response = await fetch("http://localhost:3000/feedback",{
            method: "POST",
            header: { 
                "content-type": "application/json",
            },
            body: JSON.stringify(newfeedback)
        })
        const data = await response.json()
        setfeedback([data, ...feedback])

        // newfeedback.id = feedback.length + 1;
        // setfeedback([newfeedback, ...feedback])
    }

    return(
        <FeedbackContexts.Provider value = {{
            feedback,
            feedbackEdit,
            addFeedback,
            deleteFeedback,
            editHandler,
            updatedFeedback,
        }}>
            {children}
        </FeedbackContexts.Provider>
    )
}

export default FeedbackContexts;