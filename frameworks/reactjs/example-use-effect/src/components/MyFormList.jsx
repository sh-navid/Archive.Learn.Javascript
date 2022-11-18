import { useState } from "react"
import MyForm from "./MyForm"

const MyFormList = () => {
    const [number, setNumber] = useState(0)

    return (
        <>
            <button onClick={() => { setNumber(number + 1) }}>Click here to change children prop from parent</button>
            <p>This will cause to re-render the children</p>
            <MyForm number={number} />
            <MyForm number={number} />
            <MyForm number={number} />
        </>
    )
}

export default MyFormList