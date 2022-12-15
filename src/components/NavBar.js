import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"

const NavContainer = styled.div`
    width: 100vw;
    overflow: none;
    margin: 0;
    padding: 0;
    background-color: #3c3c3b;
    position: sticky;
    display: inline-block;
    height: 5vh;
`

const NavListContainer = styled.ul`
    height: 100%;
    list-style: none;

`

const NavItemContainer = styled.li`
    display: inline-block;
    color: white;
    border-right-color: black;
    border-right-width: 2px;
    height: 100%;
    width: auto;
    text-align: center;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    padding-right: 5px;
    &:hover{
        background-color: #54569a
    }
`

const VALine = styled.rect`
    fill: #54569a;
    position: absolute;
`

const NavLink = styled(Link)`
    text-decoration: none;
    color: white;
`

const Image = styled(StaticImage)`
    display: inline-block;
    object-fit: contain;
    height: 100%;
`
const NavBar = () => (
    <NavContainer>
        <NavLink to="/"><Image src="../images/VALogo.jpg" alt="Visual Advanced Logo"/></NavLink>
        <NavListContainer>
            <NavItemContainer><NavLink to="/">Home</NavLink></NavItemContainer>
            <NavItemContainer>About Us</NavItemContainer>
            <NavItemContainer>Recent productions</NavItemContainer>
        </NavListContainer>
        <svg width="100%" height="10px">
            <VALine width="100%" height="10px"/>
        </svg>
    </NavContainer>
)

export default NavBar