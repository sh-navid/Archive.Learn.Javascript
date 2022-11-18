import { useEffect, useState } from "react"

const MyForm = (props) => {
    const [name, setName] = useState("Default Value")
    const [last, setLast] = useState("Default Value")

    useEffect(() => {
        console.log("Each Render")
    })

    useEffect(() => {
        console.log("First Render")
    }, [])

    useEffect(() => {
        console.log("Name Changed")
    }, [props, name])

    useEffect(() => {
        console.log("Last Changed")
    }, [props, last])

    return (
        <form>
            <input type="text" value={name} onInput={(e) => setName(e.target.value)} />
            <br />
            <input type="text" value={last} onInput={(e) => setLast(e.target.value)} />
        </form>
    )
}

export default MyForm