# ReactJS
## Hooks
>> Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. <small>***<sup>[[ReactJS 11/11/2022](https://reactjs.org/docs/hooks-state.html)]<sup>***</small>
- `useRef()`
- [`useState()`](../example2/src/components/ComponentWithUseState.jsx)
    >> This is a way to “preserve” some values between the function calls ... Normally, variables “disappear” when the function exits but state variables are preserved by React ... It lets us keep local state in a function component. <small>***<sup>[[ReactJS 11/11/2022](https://reactjs.org/docs/hooks-state.html)]<sup>***</small>
    ~~~js
    const ComponentWithUseState = () => {
        const [count, setCount] = useState(0)
        return (
            <>
                <button type="button" onClick={() => setCount(count + 1)}>Counter {count}</button>
            </>
        )
    }
    ~~~
    >> When the user clicks, we call `setCount` with a new value. React will then re-render the component, passing the new `count` value to it. <small>***<sup>[[ReactJS 11/11/2022](https://reactjs.org/docs/hooks-state.html)]<sup>***</small>
- `useEffect()`
- `useContext`
- `useMemo`
- `useReducer`
- `useCallback`

