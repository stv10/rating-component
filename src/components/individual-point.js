function Point(props) {
    const {onClicked,onSetPoints,clicked,point} = props;
    function btnClicked() {
        onClicked(point)
        onSetPoints(point)
    }
    return ( 
        <div className={(clicked) ? 'point clicked': 'point'} onClick={btnClicked}>
            {point}
        </div>
     );
}

export default Point;