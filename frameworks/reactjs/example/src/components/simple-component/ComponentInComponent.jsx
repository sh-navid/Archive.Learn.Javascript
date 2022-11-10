import ComponentWithChildren from "./ComponentWithChildren"

const ComponentInComponent = () => {
    return (
        <>
            <ComponentWithChildren>Child 1</ComponentWithChildren>
            <ComponentWithChildren>Child 2</ComponentWithChildren>
            <ComponentWithChildren>Child 3</ComponentWithChildren>
        </>
    )
}

export default ComponentInComponent