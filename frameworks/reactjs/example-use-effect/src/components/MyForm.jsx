import { useEffect, useState } from "react"

const MyForm = (props) => {
    const [name, setName] = useState("First Name")
    const [last, setLast] = useState("Last Name")

    useEffect(() => {//its a callback
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
            <span>{props.number}</span>
            <br/>
            <input type="text" value={name} onInput={(e) => setName(e.target.value)} />
            <br />
            <input type="text" value={last} onInput={(e) => setLast(e.target.value)} />
        </form>
    )
}

export default MyForm