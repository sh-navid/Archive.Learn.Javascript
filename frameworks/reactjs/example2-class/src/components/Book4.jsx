import React from "react"


class BookClass extends React.Component {
    handleClick(e) {
        alert(e.target.innerText)
    }

    render() {
        return <h4 onClick={(e) => this.handleClick(e)}>Book Class Component</h4>
    }
}


const BookFunction = () => {
    const handleClick = (e) => {
        alert(e.target.innerText)
    }

    return <h4 onClick={(e) => handleClick(e)}>Book Function Component</h4>
}


export { BookClass as Book4, BookFunction as Book4Function }