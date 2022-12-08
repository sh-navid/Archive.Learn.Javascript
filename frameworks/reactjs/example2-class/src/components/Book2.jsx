import React, { useState } from "react"


class BookClass extends React.Component {
    constructor() {
        //must call super constructor before using 'this' in derived class constructor
        super()
        this.state = { name: "ReactBook" }
    }

    render() {
        return <h4>Book Class Component {this.state.name}</h4>
    }
}


const BookFunction = () => {
    const [name, setName] = useState("ReactBook")
    return <h4>Book Function Component {name}</h4>
}


export { BookClass as Book2, BookFunction as Book2Function }