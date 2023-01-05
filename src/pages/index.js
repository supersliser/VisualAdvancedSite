import * as React from "react"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import Main from "../components/Main"
import Text from "../components/Text"

const IndexPage = () => (
    <Main>
        <Text>Hello World</Text>
    </Main>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
