import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import NavBar from "./NavBar"

const Container = styled.body`
    top: 0px;
    left: 0px;
    background-color: #3c3c3b;
`

const Stuff = styled.div`
    position: static;
    background-image: url(https://github.com/supersliser/VisualAdvancedSite/blob/9ab4095fdb7699f1f7d5af892aeb6624f14e7d03/src/images/elliotglasses.jpg);
    background-position: center center;
    background-repeat: no-repeat;
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
        {children}
    </Stuff>
</Container>
)

export default Main