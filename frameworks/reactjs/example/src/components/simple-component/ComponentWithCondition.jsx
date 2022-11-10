const ComponentWithCondition = (props) => (
    <>
        <h1>Conditional Component</h1>
        {props.num > 100 ? "Greater" : "Lesser"}
    </>
)

export default ComponentWithCondition