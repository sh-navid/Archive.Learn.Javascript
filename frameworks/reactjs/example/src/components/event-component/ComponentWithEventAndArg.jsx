const ComponentWithEventAndArg = (props) => {
    const clicked = (e, num) => {
        alert("Clicked on " + num)
        alert(e.target)
    }

    return (
        <div onClick={(e) => clicked(e, props.num)}>
            <h3>Click Here</h3>
        </div>
    )
}

export default ComponentWithEventAndArg