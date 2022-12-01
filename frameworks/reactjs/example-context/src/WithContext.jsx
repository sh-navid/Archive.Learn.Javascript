import { createContext } from "react"
import { useContext, useState } from "react"

const DataContext = createContext()

const A = () => {
    const [data, setData] = useState(10)

    return (
        <DataContext.Provider value={data}>
            <h1>A</h1>
            {data}
            <button onClick={() => { setData(data + 1) }}>UP</button>
            <hr />
            <B />
        </DataContext.Provider>
    )
}

const B = () => {
    const data = useContext(DataContext)

    return (
        <>
            <h2>B</h2>
            {data}
            <button onClick={setData(20)}>UP2</button>
            <hr />
            <C />
        </>
    )
}

const C = () => {
    const data = useContext(DataContext)

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