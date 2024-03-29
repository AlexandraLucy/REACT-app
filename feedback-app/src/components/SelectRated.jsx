import React, { useContext, useState, useEffect } from "react";
// import FeedbackContext from "./context/Feedbackcontext";
import FeedbackContexts from "../context/FeedbackContexts";

function SelectRated({select}) {
    const { feedbackEdit} = useContext(FeedbackContexts)
    const [ selected, setselected] = useState(6)
    
    useEffect(() => {
        if (feedbackEdit.edit === true){
            setselected(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleselect = (e) => {
        setselected(+e.currentTarget.value)
        select(+e.currentTarget.value)
       // console.log(e.target.value);
        e.preventDefault();
    }
    return (
        <div>
            <ul className="rating">
                <li>
                    <input type="radio" name="rating" onChange={handleselect} id="num1" value={"1"} checked={selected === 1} />
                    <label htmlFor="num">1</label>
                </li>
                <li>
                    <input type="radio" name="rating" onChange={handleselect} id="num2" value={"2"} checked={selected === 2} />
                    <label htmlFor="num">2</label>
                </li>
                <li>
                    <input type="radio" name="rating" onChange={handleselect} id="num3" value={"3"} checked={selected === 3} />
                    <label htmlFor="num">3</label>
                </li>
                <li>
                    <input type="radio" name="rating" onChange={handleselect} id="num4" value={"4"} checked={selected === 4} />
                    <label htmlFor="num">4</label>
                </li>
                <li>
                    <input type="radio" name="rating" onChange={handleselect} id="num5" value={"5"} checked={selected === 5} />
                    <label htmlFor="num">5</label>
                </li>
                <li>
                    <input type="radio" name="rating" onChange={handleselect} id="num6" value={"6"} checked={selected === 6} />
                    <label htmlFor="num">6</label>
                </li>
                <li>
                    <input type="radio" name="rating" onChange={handleselect} id="num7" value={"7"} checked={selected === 7} />
                    <label htmlFor="num">7</label>
                </li>
                <li>
                    <input type="radio" name="rating" onChange={handleselect} id="num8" value={"8"} checked={selected === 8} />
                    <label htmlFor="num">8</label>
                </li>
                <li>
                    <input type="radio" name="rating" onChange={handleselect} id="num9" value={"9"} checked={selected === 9} />
                    <label htmlFor="num">9</label>
                </li>
                <li>
                    <input type="radio" name="rating" onChange={handleselect} id="num10" value={"10"} checked={selected === 10} />
                    <label htmlFor="num">10</label>
                </li>

            </ul>


        </div>
    )
}

export default SelectRated