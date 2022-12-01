import { useState } from "react"

const A = () => {
    const [data, setData] = useState(10)

    return (
        <>
            <h1>A</h1>
            {data}
            <button onClick={() => { setData(data + 1) }}>UP</button>
            <hr />
            <B data={data} handle={() => { setData(data + 2) }} />
        </>
    )
}

const B = (props) => {
    return (
        <>
            <h2>B</h2>
            {props.data}
            <button onClick={props.handle}>UP2</button>
            <hr />
            <C data={props.data} />
        </>
    )
}

const C = ({ data }) => {
    return (
        <>
            <h3>C</h3>
            {data}
            <hr />
        </>
    )
}

export { B, C }
export default A