# NodeJS
## Function Components
- Intro
    - Components are reusable
- ![](../../../-/1.png) [Simple component](../example/src/components/simple-component/SimpleComponent.jsx)
    ~~~js
    const SimpleComponent = () => <h1>Hello Simple Component</h1>
    ~~~
- ![](../../../-/1.png) [Usage of Brace](../example/src/components/simple-component/SimpleComponent2.jsx)
    ~~~js
    const SimpleComponent2 = () => <h1>Hello Simple Component {100 * 2}</h1>
    ~~~
- ![](../../../-/1.png) [Multiple lines of HTML](../example/src/components/simple-component/SimpleComponent3.jsx)
    ~~~js
    const SimpleComponent3 = () => (
        <>
            <h1>Simple Component 3</h1>
            <h2>Simple Component 3</h2>
            <h3>Simple Component 3</h3>
        </>
    )
    ~~~
- ![](../../../-/1.png) [Condition in component](../example/src/components/simple-component/ComponentWithCondition.jsx)
    ~~~js
    const ComponentWithCondition = (props) => (
        <>
            <h1>Conditional Component</h1>
            {props.num > 100 ? "Greater" : "Lesser"}
        </>
    )
    ~~~
    - Usage
        ~~~js
        <ComponentWithCondition num="200"/>
        ~~~
- ![](../../../-/1.png) [Component with children](../example/src/components/simple-component/ComponentWithChildren.jsx)
    ~~~js
    const ComponentWithChildren = (props) => (
        <>
            <h1>Children: {props.children}</h1>
        </>
    )
    ~~~
    - Usage
        ~~~js
        <ComponentWithChildren>Hello world</ComponentWithChildren>
        ~~~
- ![](../../../-/1.png) [Component in component](../example/src/components/simple-component/ComponentInComponent.jsx)
    ~~~js
    const ComponentInComponent = () => {
        return (
            <>
                <ComponentWithChildren>Child 1</ComponentWithChildren>
                <ComponentWithChildren>Child 2</ComponentWithChildren>
                <ComponentWithChildren>Child 3</ComponentWithChildren>
            </>
        )
    }
    ~~~
- ![](../../../-/1.png) [Ternary Operator](../example2/src/components/TerneryOperator.jsx)
    ~~~js
    const GreetingsComponent = (props) => {
        return <>{props.value == true ? <HelloComponent /> : <GoodByeComponent />}</>
    }
    ~~~
    - Usage
        ~~~js
        <GreetingsComponent value="true"/>
        ~~~

- ![](../../../-/1.png) [&& Operator](../example2/src/components/AndOperator.jsx)
    ~~~js
    const GreetingsWithAndComponent = (props) => {
        return <>And Operator: {props.value === "true" && <HelloComponent />}</>
    }
    ~~~
    - Usage
        ~~~js
        <GreetingsWithAndComponent value="true"/>
        ~~~

- ![](../../../-/1.png) [List](../example2/src/components/ListComponent.jsx)
    ~~~js
    const ListComponent = () => {
        const COLORS = [
            { id: 1, name: "green" },
            { id: 2, name: "blue" },
            { id: 3, name: "red" },
        ]

        return (
            <>
                {COLORS.map((color) => (
                    <h1 key={color.id}>Color: {color.name}</h1>
                ))}
            </>
        )
    }
    ~~~