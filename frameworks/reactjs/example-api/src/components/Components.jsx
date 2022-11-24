import { useState } from "react"
import "./Components.sass"

const list = [
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

// Why we use state instead of a variable?
const Questions = () => {
    const [question, setQuestion] = useState(0)
    return (
        <div>
            <span>{list[question]}</span>
            <hr/>
            <span></span>
        </div>
    )
}

export default Questions