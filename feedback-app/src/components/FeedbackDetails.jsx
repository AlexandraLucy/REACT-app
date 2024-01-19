import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "./shared/Card";
import FeedbackContexts from "../context/FeedbackContexts";

function FeedbackDetails() {
    const { feedback } = useContext(FeedbackContexts)
    const params = useParams()
    const navigate = useNavigate();
    const currentvalue = feedback.find((feedback) => feedback.id === params.id || +params.id)
    console.log(currentvalue);

    const navhandler = () => {
        console.log("successful navigation or redirect");
        navigate("/");
    }
    return(
        <Card>
            <div className="num-display">{currentvalue.rating}</div>
            <div className="text-display">
                {currentvalue.text}
            </div>
            <button type={"button"} onClick={navhandler}>Back to Home</button>
        </Card>

    )

}

export default FeedbackDetails