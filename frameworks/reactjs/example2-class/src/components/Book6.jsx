import React from "react"

class BookClass extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <h4>Book Class Component {this.props.children}</h4>
    }
}

class Book6 extends BookClass {
    constructor(props) {
        super(props)
    }

    render() {
        return <>{super.render()} <span>Extended</span></>
    }
}

export default Book6