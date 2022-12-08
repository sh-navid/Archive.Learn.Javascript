import React from "react"


class BookClass extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <h4>Book Class Component {this.props.children}</h4>
    }
}


const BookFunction = (props) => {
    return <h4>Book Function Component {props.children}</h4>
}


export { BookClass as Book5, BookFunction as Book5Function }