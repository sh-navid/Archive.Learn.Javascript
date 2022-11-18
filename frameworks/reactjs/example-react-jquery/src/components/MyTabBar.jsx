import $ from "jquery"
import { useEffect, useState } from "react"
import MyTab from "./MyTab"
import MyTabButton from "./MyTabButton"

const MyTabBar = () => {
    const [current, setCurrent] = useState(1)

    useEffect(() => {
        $(":button:eq(3)").off("click").on("click", () => {
            alert("We used jquery in react")
        })
    })
    return (
        <>
            <MyTabButton click={() => { setCurrent(1) }}>Tab1</MyTabButton>
            <MyTabButton click={() => { setCurrent(2) }}>Tab2</MyTabButton>
            <MyTabButton click={() => { setCurrent(3) }}>Tab3</MyTabButton>
            <MyTabButton>Tab4 Jquery</MyTabButton>

            {current == 1 && <MyTab>Tab1 Content</MyTab>}
            {current == 2 && <MyTab>Tab2 Content</MyTab>}
            {current == 3 && <MyTab>Tab3 Content</MyTab>}
        </>
    )
}

export default MyTabBar