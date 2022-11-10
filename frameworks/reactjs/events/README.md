# ReactJS
## Events
- ![](../../../-/1.png) [Click](../example/src/components/event-component/ComponentWithEvent.jsx)
    ~~~js
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
    ~~~