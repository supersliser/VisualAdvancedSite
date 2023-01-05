import * as React from "react"
import styled from 'styled-components'
import NavBar from "./NavBar"
import { StaticImage } from "gatsby-plugin-image"

const Container = styled.body`
    margin: 0;
    padding: 0;
    background-color: #3c3c3b;
    width: 100vw;
    overflow-x: hidden;
    overflow-y: auto;
`

const Stuff = styled.div`
    margin-top: 5vh;
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

const Image = styled(StaticImage)`

`

const Main = ({ children }) => (
<Container>
    <Image src="../images/elliot glasses cropped.jpg" alt="An imagething"/> 
    <NavBarItem/>
    <Stuff>
        {children}
    </Stuff>
</Container>
)

export default Main