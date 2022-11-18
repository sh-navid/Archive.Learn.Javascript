# ReactJS
## Jquery
- Setup
    - `npm install jquery`
- [Usage](src/components/MyTabBar.jsx)
    ~~~js
    import $ from "jquery"

    //...

    useEffect(() => {
        $(":button:eq(3)").off("click").on("click", () => {
            alert("We used jquery in react")
        })
    })
    ~~~
