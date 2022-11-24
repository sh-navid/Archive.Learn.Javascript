import { useState } from "react"
import "./Components.sass"

const data = [
    {
        "question": "What is the capital of Iran?",
        "answers": ["Tehran", "Paris", "London"],
        "correct": 0
    }, {
        "question": "What is the capital of England?",
        "answers": ["Manhatan", "Tokio", "London"],
        "correct": 2
    }
]


const Answers = (props) => {
    return (
        <>
            {props.data.map((item, index) => (
                <span className="answer"
                    onClick={() => props.change(index)}>{item}</span>
            ))}
        </>
    )
}

const Controls = (props) => {
    return (
        <>
            {props.data.map((item, index) => (
                <span className="control"
                    onClick={() => props.change(index)}>{index + 1}</span>
            ))}
        </>
    )
}


// What is a hook?
// Why we use state instead of a variable?
const Questions = () => {
    const [question, setQuestion] = useState(0)

    return (
        <div>
            <span>{data[question].question}</span>
            <hr />
            <Answers data={data[question].answers} change={() => { }} />
            <hr />
            <Controls data={data} change={(i) => { setQuestion(i) }} />
        </div>
    )
}

export default Questions