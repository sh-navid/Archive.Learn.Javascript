# JS
## Style A Component
- CSS
    - ![](../../../-/1.png) Stylesheet
    - ![](../../../-/2.png) Module
- ![](../../../-/1.png) Inline
- ![](../../../-/3.png) Styled Component
    - [Original Github Repo](https://github.com/styled-components/styled-components)
    - Setup
        - `npm install --save styled-components`
    - Usage
        ~~~js
        import React from "react"
        import styled from "styled-components"

        const ActionButtonCore = styled.button`
            background: orangered;
            color: white;
        `

        const ActionButton = (props) => {
            return (<ActionButtonCore>props.children</ActionButtonCore>)
        }

        export default ActionButton
        ~~~