import * as React from "react"
import Seo from "../components/seo"

import NavBar from "../components/NavBar"
import Main from "../components/Main"

const IndexPage = () => (
    <Main>
        Hi
    </Main>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
