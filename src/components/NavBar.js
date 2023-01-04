import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const NavContainer = styled.div`
    top: 50vh;
    left: 0px;
    width: 100vw;
    overflow: hidden;
    margin: 0px;
    padding: 0px;
    background-color: #3c3c3b;
    position: sticky;
    height: 5vh;
`

const NavListContainer = styled.ul`
    top: -10px;
    position: relative;
    left: 10vw;
    height: 100%;
    list-style: none;
    display: inline-block;
    z-index: 10;
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
    height: 8px;
    fill: #54569a;
`

const VALogo = styled.text`
    fill: #54569a;
    top: 100%;
    text-decoration: bold;
    font-family: Consolas;
`

const LogoContainer = styled.svg`
    left: 0px;
    top: 0px;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
`

const NavLink = styled(Link)`
    text-decoration: none;
    color: white;
`

const NavBar = () => (
    <NavContainer>
        <LogoContainer>
            <VALogo y="100%" x="50px" letterSpacing="-25" fontSize="500%">VA</VALogo>
            <VALogo y="90%" x="55%" letterSpacing="25" fontSize="160%">Visual Advanced</VALogo>
            <VALine y="20px" x="100px" width="100%"/>
            <VALine y="20px" x="0px" width="65px"/>
        </LogoContainer>
        <NavListContainer>
            <NavItemContainer><NavLink to="/">Home</NavLink></NavItemContainer>
            <NavItemContainer>About Us</NavItemContainer>
            <NavItemContainer>Recent productions</NavItemContainer>
        </NavListContainer>
    </NavContainer>
)

export default NavBar