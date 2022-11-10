# NodeJS
## Components
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