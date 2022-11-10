const HelloComponent = () => <h1>is active</h1>

const GreetingsWithAndComponent = (props) => {
    return <>And Operator: {props.value === "true" && <HelloComponent />}</>
}

export default GreetingsWithAndComponent