const ComponentWithEvent = () => {
    const clicked = () => {
        alert("Clicked")
    }

    return (
        <div onClick={clicked}>
            <h3>Click Here</h3>
        </div>
    )
}

export default ComponentWithEvent