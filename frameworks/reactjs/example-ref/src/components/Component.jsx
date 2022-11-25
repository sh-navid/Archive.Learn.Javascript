import React from "react"

const MyButton = React.forwardRef((props, ref) => {
    return (
        <button onClick={props.handle} ref={ref}>Hello</button>
    )
})

const Component = () => {
    const ref = React.createRef()

    const handleClick=()=>{
        ref.current.innerHTML="HI HI"
    }

    return (
        <>
            <MyButton ref={ref} handle={handleClick}/>
        </>
    )
}

export default Component