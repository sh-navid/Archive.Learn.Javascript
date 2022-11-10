# NodeJS
## Components
- Components are reusable
- [Simple component](../example/src/components/simple-component/SimpleComponent.jsx)
    ~~~js
    const SimpleComponent = () => <h1>Hello Simple Component</h1>
    ~~~
- [Usage of Brace](../example/src/components/simple-component/SimpleComponent2.jsx)
    ~~~js
    const SimpleComponent2 = () => <h1>Hello Simple Component {100 * 2}</h1>
    ~~~
- [Multiple lines of HTML](../example/src/components/simple-component/SimpleComponent3.jsx)
    ~~~js
    const SimpleComponent3 = () => (
        <>
            <h1>Simple Component 3</h1>
            <h2>Simple Component 3</h2>
            <h3>Simple Component 3</h3>
        </>
    )
    ~~~
- [Condition in component](../example/src/components/simple-component/ComponentWithCondition.jsx)
    ~~~js
    const ComponentWithCondition = (props) => (
        <>
            <h1>Conditional Component</h1>
            {props.num > 100 ? "Greater" : "Lesser"}
        </>
    )
    ~~~