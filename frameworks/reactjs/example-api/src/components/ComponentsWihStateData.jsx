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
const QuestionsWithStateData = () => {
    const [question, setQuestion] = useState(0)
    const [update, setUpdate] = useState(false)
    const [data, setData] = useState([
        {
            "question": "What is the capital of Iran?",
            "answers": ["Tehran", "Paris", "London"],
            "correct": 0,
            "selected": -1
        }, {
            "question": "What is the capital of England?",
            "answers": ["Manhatan", "Tokio", "London"],
            "correct": 2,
            "selected": -1
        }
    ])

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
            <span>{data[question].question}</span>
            <hr />
            <span>Score: {calculateScore()}</span>
            <hr />
            <Answers data={data[question]} change={(i) => { data[question].selected = i; setUpdate(!update) }} />
            <hr />
            <Controls data={data} change={(i) => { setQuestion(i) }} />
        </div>
    )
}

export default QuestionsWithStateData