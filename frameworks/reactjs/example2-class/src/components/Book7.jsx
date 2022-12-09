import React from "react"

// React Component Lifecycle
// ------------------------------
// - Mount
// ---- Insert component into DOM
// ----
// ---- constructor()
// ---- getDerivedStateFromProps()
// ---- render()
// ---- componentDidMount()
// ------------------------------
// - Update
// ------------------------------
// - Unmount

class BookClass extends React.Component {
    constructor(props) {
        super(props)
        console.log("constructor")
    }

    getDerivedStateFromProps() {
        console.log("getDerivedStateFromProps")
    }

    render() {
        console.log("render")
        return <h4>Book Class Component {this.props.children}</h4>
    }

    componentDidMount() {
        console.log("componentDidMount")
    }
}

export { BookClass as Book7 }