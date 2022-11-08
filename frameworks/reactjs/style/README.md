# JS
## Style A Component
- CSS
    - Stylesheet
        - ![](../../../-/1.png) First stylesheet method
            - Put your css in `App.css` file
                ~~~css
                .button{background-color: tomato !important;}
                ~~~
            - Make a `.jsx` file like
                - `ActionButton.jsx`
                ~~~js
                import React from "react"
                const ActionButton = () => {return (<div className="button"></div>)}
                export default ActionButton
                ~~~
        - ![](../../../-/1.png) Second stylesheet method
            - Make a `.css` file like
                - `ActionButton.css`
                ~~~css
                .button{background-color: tomato !important;}
                ~~~
            - Make a `.jsx` file like
                - `ActionButton.jsx`
                ~~~js
                import React from "react"
                import "./ActionButton.css"
                const ActionButton = () => {return (<div className="button"></div>)}
                export default ActionButton
                ~~~
    - ![](../../../-/2.png) Module
        - Make a `.css` file like
            - `ActionButton.module.css`
            ~~~css
            .button{background-color: tomato !important;}
            ~~~
        - Make a `.jsx` file like
            - `ActionButton.jsx`
            ~~~js
            import React from "react"
            import styles from "./ActionButton.module.css"
            const ActionButton = () => {return (<div className={styles.button}></div>)}
            export default ActionButton
            ~~~
        
    - Inline
        - ![](../../../-/1.png) First inline method
            ~~~js
            import React from "react"
            const ActionButton = () => {return (<div style={{backgroundColor:"yellow"}}></div>)}
            export default ActionButton
            ~~~
        - ![](../../../-/1.png) Second inline method
            ~~~js
            import React from "react"
            const BtnStyle = {backgroundColor:"green"}
            const ActionButton = () => {return (<div style={BtnStyle}></div>)}
            export default ActionButton
            ~~~
- ![](../../../-/3.png) Styled Component
    - [Original Github Repo](https://github.com/styled-components/styled-components)
    - Setup
        - `npm install --save styled-components`
    - Usage
        ~~~js
        import React from "react"
        import styled from "styled-components"

        const ActionCore = styled.button`
            background: orangered;
            color: white;
        `
        const ActionButton = () => {return (<ActionCore></ActionCore>)}
        export default ActionButton
        ~~~