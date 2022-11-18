import $ from "jquery"

const MyTabButton=(props)=>{
    return <button onClick={props.click}>{props.children}</button>
}

export default MyTabButton