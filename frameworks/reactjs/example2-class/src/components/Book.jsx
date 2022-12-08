import React from "react"

class BookClass extends React.Component {
    render() {
        return <h4>Book Class Component</h4>
    }
}

const BookFunction = () => {
    return <h4>Book Function Component</h4>
}


export { BookClass as Book, BookFunction }