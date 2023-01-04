import * as React from "react"
import Seo from "../components/seo"

import Main from "../components/Main"

const IndexPage = () => (
    <Main>
        <p>hello world</p>
    </Main>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
