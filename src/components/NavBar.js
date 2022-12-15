import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"

const Logo = styled(StaticImage)`
    height: 100%;
`

const NavContainer = styled.div`
    width: 100vw;
    overflow: none;
    margin: 0;
    padding: 0;
    background-color:;
    position: sticky;
`

const NavListContainer = styled.ul`
    height: 100%
`

const NavItemContainer = styled.li`
    color:;
    border-right-color: black;
    border-right-thickness: 2px;
    height: 100%;
    width: 20%;
`

const VALine = styled.rect`
    fill: purple;
    position: absolute;
`

const NavLink = style(Link)`
    text-decoration: none;
`

const NavBar = () => (
    <NavContainer>
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