const { useState } = require("react")

const ComponentWithUseState = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <button type="button" onClick={() => setCount(count + 1)}>Counter {count}</button>
        </>
    )
}

export default ComponentWithUseState