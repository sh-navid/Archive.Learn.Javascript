# JS
## Style A Component
- CSS
    - ![](../../../-/1.png) Stylesheet
    - ![](../../../-/2.png) Module
    - Inline
        - ![](../../../-/1.png) First inline method
            ~~~js
            import React from "react"

            const ActionButton = () => {
                return (<div style={{backgroundColor:"yellow"}}></div>)
            }

            export default ActionButton
            ~~~
        - ![](../../../-/1.png) Second inline method
            ~~~js
            import React from "react"

            const BtnStyle={
                backgroundColor:"green"
            }

            const ActionButton = () => {
                return (<div style={BtnStyle}></div>)
            }

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

        const ActionButton = () => {
            return (<ActionCore></ActionCore>)
        }

        export default ActionButton
        ~~~