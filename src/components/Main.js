import * as React from "react"
import styled from 'styled-components'
import NavBar from "./NavBar"
import { StaticImage } from "gatsby-plugin-image"

const Container = styled.body`
    margin: 0;
    padding: 0;
    background-color: white;
    width: 100vw;
    overflow-x: hidden;
    overflow-y: auto;
`

const Stuff = styled.div`
    margin-top: 5vh;
    position: static;
    width: 100%;
    color: black;
    z-index: 20;
    font-size: 5em;
    margin-left: 7%;
    margin-right: 7%;
`

const NavBarItem = styled(NavBar)`
    position: static;
`

const Main = ({ children }) => (
<Container>
    <StaticImage src="../images/elliot glasses cropped.jpg" alt="An imagething"/> 
    <NavBarItem/>
    <Stuff>
        {children}
    </Stuff>
</Container>
)

export default Main