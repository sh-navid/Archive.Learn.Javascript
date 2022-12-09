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
        super(props) // mandatory

        this.state = { num: 12 } // Good place to init state
        console.log("constructor")
    }

    static getDerivedStateFromProps(props, state) {// Good place to set state based on props values
        console.log("getDerivedStateFromProps", props, state)
        return props.num ? { num: props.num } : state
    }

    render() {
        console.log("render")
        return <h4>Book Class Component {this.props.num} {this.state.num}</h4>
    }

    componentDidMount() {
        console.log("componentDidMount")
    }
}

export { BookClass as Book7 }