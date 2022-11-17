# ReactJS
- **Helper Links**
    - [Great link to read about 4 ways of styling](https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822)
    - [Documents of styled components](https://styled-components.com/docs/basics)
    - [Github repository of styled components](https://github.com/styled-components/styled-components)
    - [How to use inline style css](https://stackoverflow.com/questions/26882177/react-js-inline-style-best-practices)
    - [How to handle CSS Modules in react](https://stackoverflow.com/questions/53062306/css-modules-not-working-for-react-version-16-6-0)

## Style A Component
- CSS
    - ![](../../../-/1.png) First CSS method
        - Put your css in `App.css` file
            ~~~css
            .button{background-color: tomato;}
            ~~~
        - Make a `.jsx` file like
            - `ActionButton.jsx`
            ~~~js
            import React from "react"
            const ActionButton = () => {return (<div className="button"></div>)}
            export default ActionButton
            ~~~
    - ![](../../../-/1.png) Second CSS method
        - Make a `.css` file like
            - `ActionButton.css`
            ~~~css
            .button{background-color: tomato;}
            ~~~
        - Make a `.jsx` file like
            - `ActionButton.jsx`
            ~~~js
            import React from "react"
            import "./ActionButton.css"
            const ActionButton = () => {return (<div className="button"></div>)}
            export default ActionButton
            ~~~
    - ![](../../../-/2.png) CSS Module
        - Make a `.css` file like
            - `ActionButton.module.css`
            ~~~css
            .button{background-color: tomato;}
            ~~~
        - Make a `.jsx` file like
            - `ActionButton.jsx`
            ~~~js
            import React from "react"
            import styles from "./ActionButton.module.css"
            const ActionButton = () => {return (<div className={styles.button}></div>)}
            export default ActionButton
            ~~~
    - ![](../../../-/2.png) Pass className from Parent
        - If you have a css in `App.css` file like this
            ~~~css
            .button{background-color: tomato;}
            ~~~
        - Think that you have a `ActionButtonUser.jsx` like this; and passed a css class to it
            ~~~js
            ...
            <ActionButton className="button"></ActionButton>
            ...
            ~~~
        - Then in your `ActionButton.jsx` you can use that css class like this
            ~~~js
            import React from "react"
            const ActionButton = (props) => {return (<div className={props.className}></div>)}
            export default ActionButton
            ~~~
    - Inline CSS
        - ![](../../../-/1.png) First inline method
            ~~~js
            import React from "react"
            const ActionButton = () => {return (<div style={{backgroundColor:"tomato"}}></div>)}
            export default ActionButton
            ~~~
        - ![](../../../-/1.png) Second inline method
            ~~~js
            import React from "react"
            const ActionButtonStyle = {backgroundColor:"tomato"}
            const ActionButton = () => {return (<div style={ActionButtonStyle}></div>)}
            export default ActionButton
            ~~~
- ![](../../../-/3.png) Styled Component ([Github Repo](https://github.com/styled-components/styled-components))
    - Setup
        - `npm install --save styled-components`
    - Usage
        ~~~js
        import React from "react"
        import styled from "styled-components"

        const ActionCore = styled.button`
            background: tomato;
        `
        const ActionButton = () => {return (<ActionCore></ActionCore>)}
        export default ActionButton
        ~~~
- ![](../../../-/1.png) SASS
    - Setup
        - `npm i sass`
    - [Button.jsx](../example3/src/components/sass/Button.jsx)
    ~~~js
    import "./Button.sass"

    const Button=()=>{
        return (<button className="btn">My Button</button>)
    }

    export default Button
    ~~~
    - [Button.sass](../example3/src/components/sass/Button.sass)
    ~~~sass
    $color:royalblue

    .btn
        background-color:$color
        padding:2em
    ~~~