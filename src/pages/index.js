import * as React from "react"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import Main from "../components/Main"
import Text from "../components/Text"
import NewsBox from "../components/newsBox"

const IndexPage = () => (
    <Main>
        <Text>Hello World</Text>
        <NewsBox Width="35%" Height="20%" Title="This is a test" Subtitle="Im testing something and i dont know if its going to work tbh" Top="120vh" Left="25vw"/>
    </Main>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
