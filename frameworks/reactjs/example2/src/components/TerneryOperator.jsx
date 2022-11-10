const HelloComponent = () => <h1>Hello</h1>
const GoodByeComponent = () => <h1>GoodBye</h1>

const GreetingsComponent = (props) => {
    return <>{props.value === "true" ? <HelloComponent /> : <GoodByeComponent />}</>
}

export default GreetingsComponent