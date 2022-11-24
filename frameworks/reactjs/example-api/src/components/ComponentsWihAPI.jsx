import { useState } from "react"
import "./Components.css"

const Answers = (props) => {
    const getClassName = (index) => {
        console.log(index, props.data.selected)
        if (index == props.data.selected) {
            console.log("ACTIVE")
            return "answer active"
        }
        else {
            console.log("NOT ACTIVE")
            return "answer"
        }
    }
    return (
        <>
            {props.data.answers.map((item, index) => (
                <span
                    key={index}
                    className={getClassName(index)}
                    onClick={() => props.change(index)}>
                    {item}
                </span>
            ))}
        </>
    )
}

const Controls = (props) => {
    return (
        <>
            {props.data.map((item, index) => (
                <span
                    key={index}
                    className="control"
                    onClick={() => props.change(index)}>
                    {index + 1}
                </span>
            ))}
        </>
    )
}


// What is a hook?
// Why we use state instead of a variable?
const QuestionsWithAPI = () => {
    const [question, setQuestion] = useState(0)
    const [update, setUpdate] = useState(false)
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)

    useState(() => {
        setTimeout(()=>{
            fetch("/data")
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                setData(res)
                setLoading(false)
            })
        },3000)
    }, [])

    const calculateScore = () => {
        let score = 0
        for (let d of data) {
            if (d.correct == d.selected) {
                score += 1
            }
        }
        return score
    }

    return (
        <div>
            {isLoading == true ?
                <span>Loading ...</span> :
                <div>
                    <span>{data[question].question}</span>
                    <hr />
                    <span>Score: {calculateScore()}</span>
                    <hr />
                    <Answers data={data[question]} change={(i) => { data[question].selected = i; setUpdate(!update) }} />
                    <hr />
                    <Controls data={data} change={(i) => { setQuestion(i) }} />
                </div>
            }
        </div>
    )
}

export default QuestionsWithAPI