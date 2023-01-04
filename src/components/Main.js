import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import NavBar from "./NavBar"

const Container = styled.body`
    top: 0px;
    left: 0px;
    background-color: #3c3c3b;
`

const Main = ({ children }) => (
<Container>
    <NavBar/>
    {children}
</Container>
)

export default Main