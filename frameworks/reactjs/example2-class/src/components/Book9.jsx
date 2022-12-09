import React from "react"

// React Component Lifecycle
// ------------------------------
// - Mount
// ------------------------------
// - Update
// ------------------------------
// - Unmount
// ---- Component removed from DOM
// ----
// ---- componentWillUnmount()

class Book extends React.Component {
    render() {
        return <h1>Book</h1>
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }
}

class BookClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = { flag: true }
    }

    render() {
        console.log("render", this.props)
        return <h4>{this.state.flag ? <Book />:<h1>NONE</h1>} <button onClick={() => { this.setState({ flag: false }) }}>Unmount</button></h4>
    }
}

export { BookClass as Book9 }