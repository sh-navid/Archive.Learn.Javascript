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

- ![](../../../-/1.png) [Click with event object and argument](../example/src/components/event-component/ComponentWithEventAndArg.jsx)
    ~~~js
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
    ~~~
    - Usage
        ~~~js
        <ComponentWithEventAndArg num=12/>
        ~~~