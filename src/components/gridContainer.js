import * as React from "react"
import styled from 'styled-components'

const GridContainer = styled.div`
    width: 80vw;
    height: 80vh;
    display: grid;
    grid-template-columns: repeat(6, (100/6)%);
    grid-template-rows: repeat(6, (100/6)%);
    grid-gap:2px;
    margin-left: 10vw;
    margin-right: 10vw;
    margin-top: 25vh;
    margin-bottom: 20vh;
`

const gridContainer = ({ children }) => (
    <GridContainer>
        {children}
    </GridContainer>
)

export default gridContainer