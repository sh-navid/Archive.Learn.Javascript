# ReactJS
## Hooks
>> Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. <small>***<sup>[[ReactJS 11/11/2022](https://reactjs.org/docs/hooks-state.html)]<sup>***</small>
- `useRef()`
- [`useState()`](../example2/src/components/ComponentWithUseState.jsx)
    >> This is a way to “preserve” some values between the function calls ... Normally, variables “disappear” when the function exits but state variables are preserved by React ... It lets us keep local state in a function component. <small>***<sup>[[ReactJS 11/11/2022](https://reactjs.org/docs/hooks-state.html)]<sup>***</small>
    ~~~js
    const ComponentWithUseState = () => {
        // Array Destructing
        const [count, setCount] = useState(0)
        return (
            <>
                <button type="button" onClick={() => setCount(count + 1)}>Counter {count}</button>
            </>
        )
    }
    ~~~
    >> When the user clicks, we call `setCount` with a new value. React will then re-render the component, passing the new `count` value to it. <small>***<sup>[[ReactJS 11/11/2022](https://reactjs.org/docs/hooks-state.html)]<sup>***</small>
    
- [`useEffect()`](../example-use-effect/)
    ~~~js
    import { useEffect, useState } from "react"

    const MyForm = (props) => {
        const [name, setName] = useState("First Name")
        const [last, setLast] = useState("Last Name")

        useEffect(() => {
            console.log("Each Render")
        })

        useEffect(() => {
            console.log("First Render")
        }, [])

        useEffect(() => {
            console.log("Name Changed")
        }, [name])

        useEffect(() => {
            console.log("Last Changed")
        }, [last])

        return (
            <form>
                <input type="text" value={name} onInput={(e) => setName(e.target.value)} />
                <br />
                <input type="text" value={last} onInput={(e) => setLast(e.target.value)} />
            </form>
        )
    }

    export default MyForm
    ~~~
- `useContext`
- `useMemo`
- `useReducer`
- `useCallback`
- `useTransaction`

