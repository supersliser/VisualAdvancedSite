import * as React from "react"
import styled from 'styled-components'
import NavBar from "./NavBar"
import { StaticImage } from "gatsby-plugin-image"

const Container = styled.body`
    top: 0px;
    left: 0px;
    background-color: #3c3c3b;
`

const Image = styled(StaticImage)`
    height: 95vh;
    position: absolute;
    width: 100vw;
`

const Stuff = styled.div`
    position: static;
    height: 95%;
    width: 100%;
    color: white;
    z-index: 20;
    font-size: 5em;
`

const NavBarItem = styled(NavBar)`
    position: static;
`

const Main = ({ children }) => (
<Container>
    <NavBarItem/>
    <Stuff>
        <Image src="../images/elliotglasses.jpg" alt="An image"/>
        {children}
    </Stuff>
</Container>
)

export default Main