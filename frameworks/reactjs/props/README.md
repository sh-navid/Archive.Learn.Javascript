# ReactJS
## Props
> To pass properties to child components
- ![](../../../-/1.png) Children
    > The content inside the react component  
    > You can imagine `props.children` as `el.innerHTML` or `$(el).html()`
    ~~~javascript
    import React from "react"
    const MyFunctionComponent = (props) => {
        return (<>{props.children}</>)
    }
    export default MyFunctionComponent
    ~~~
    ~~~html
    <MyFunctionComponent>Some Contrent</MyFunctionComponent>
    ~~~