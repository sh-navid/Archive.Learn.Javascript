import React from "react"

// React Component Lifecycle
// ------------------------------
// - Mount
// ------------------------------
// - Update
// ---- When props or state changes
// ----
// ---- getDerivedStateFromProps()
// ---- shouldComponentUpdate()
// ---- render()
// ---- getSnapshotBeforeUpdate()
// ---- componentDidUpdate()
// ------------------------------
// - Unmount

class BookClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = { num: null }
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps", props, state)
        return state.num == null ? { num: parseInt(props.num) } : state
    }


    render() {
        console.log("render")
        return <h4>Book Class Component {this.props.num} {this.state.num} <button onClick={() => { this.setState({ num: this.state.num + 1 }) }}>Update</button></h4>
    }
}

export { BookClass as Book9 }