import Points from "./points";
import Submit from "./submit";
import star from '../icon-star.svg'
import thank from '../illustration-thank-you.svg';
import { useState } from "react";
function Rating(props) {
    const [display,setDisplay] = useState('rating');
    const rating = (display === 'rating') ? true : false;
    const [points, setPoints] = useState(0);
    function submit(points) {
        setPoints(points);
    }
    return (
        <div className="container">
            <div className={(rating) ? "main gradient" : 'main text-center'}>
                <picture className={(rating) ? 'star' : 'logo'}>
                    <img src={(rating) ? star : thank} alt="'Star Icon"></img>
                </picture>
                <p className={rating ? 'rate hide' : 'rate'}>You selected {points} out of 5</p>
                <h1>{(rating) ? 'How did we do?' : 'Thank you!'}</h1>
                <p>{(rating) ? 'Please let us know how we did with your support request. All feedback is aprecciated to help us improve our offering' : "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"}</p>
                <Points display={rating} onSetPoints={(points) => submit(points)}/>
                <Submit onSubmit={() => setDisplay('thank-you')} display={rating}/>
            </div>
        </div>
    );
}

export default Rating;