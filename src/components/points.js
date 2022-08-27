import { useState } from "react";
import Point from "./individual-point";
function Points(props) {
    const {display, onSetPoints} = props;
   const points = [1,2,3,4,5];
   const [clicked, setClicked] = useState(0);
   const pointsList = points.map((p) => {
    if(p === clicked) {
        return <Point point={p} onSetPoints={onSetPoints} clicked={true} onClicked={(point) => setClicked(point)}/>
    }
    return <Point point={p} onSetPoints={onSetPoints} clicked={false} onClicked={(point) => setClicked(point)}/>
   })
    return ( 
        <div className={(display) ? 'points':'points hide'}>
            {pointsList}
        </div>
     );
}

export default Points;