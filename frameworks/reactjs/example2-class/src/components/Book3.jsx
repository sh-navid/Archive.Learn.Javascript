import React, { useState } from "react"


class BookClass extends React.Component {
    constructor() {
        //must call super constructor before using 'this' in derived class constructor
        super()
        this.state = { name: "ReactBook" }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({ name: "PythonBook" })
    }

    render() {
        return <h4 onClick={this.handleClick}>Book Class Component {this.state.name}</h4>
    }
}


const BookFunction = () => {
    const [name, setName] = useState("ReactBook")

    const handleClick = () => {
        setName("PythonBook")
    }

    return <h4 onClick={handleClick}>Book Function Component {name}</h4>
}


export { BookClass as Book3, BookFunction as Book3Function }