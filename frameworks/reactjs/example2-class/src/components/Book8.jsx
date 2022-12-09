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
        console.log("getDerivedStateFromProps", "Props", props, "State", state)
        return state.num == null ? { num: parseInt(props.num) } : state
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate")

        // if returns false
        // ---- 1 getDerivedStateFromProps
        // ---- 2 shouldComponentUpdate
        // else if returns true
        // ---- 1 getDerivedStateFromProps
        // ---- 2 shouldComponentUpdate
        // ---- 3 render
        // ---- 4 getSnapshotBeforeUpdate
        // ---- 5 componentDidUpdate
        return true //speak about this
    }

    render() {
        console.log("render")
        return <h4>Book Class Component {this.props.num} {this.state.num} <button onClick={() => { this.setState({ num: this.state.num + 1 }) }}>Update</button></h4>
    }

    getSnapshotBeforeUpdate(oldProps, oldState) { // You can access to props and state before update
        console.log("getSnapshotBeforeUpdate", "OldProps", oldProps, "OldState", oldState)
        return null // Check what is this
    }

    componentDidUpdate() {
        // This method needs the existance of "getSnapshotBeforeUpdate()" method
        // Component is updated completely in the DOM
        console.log("componentDidUpdate")
    }
}

export { BookClass as Book8 }