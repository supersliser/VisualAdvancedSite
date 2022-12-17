import * as React from "react"
import Seo from "../components/seo"

import NavBar from "../components/NavBar"

const IndexPage = () => (
    <div>
        <NavBar/>
        <p>Hi</p>
    </div>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
