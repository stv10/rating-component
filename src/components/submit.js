function Submit(props) {
    const {onSubmit,display} = props;

    function submit() {
        onSubmit();
    }
    return (
        <div className={(display) ? 'btn':'btn hide'}>
            <button className="submit" onClick={submit}>SUBMIT</button>
        </div>
     );
}

export default Submit;