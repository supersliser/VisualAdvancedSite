import * as React from "react"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import Main from "../components/Main"
import Text from "../components/Text"
import NewsBox from "../components/newsBox"

const IndexPage = () => (
    <Main>
        <Text>Hello World</Text>
        <NewsBox width="35%" height="20%" Title="This is a test" Subtitle="Im testing something and i dont know if its going to work tbh">
            <StaticImage width="45%" Height="90%" MarginLeft="5%" MarginRight="10%" style="float: left" src="../images/Comps.JPG" alt={Title} position="relative"/>
        </NewsBox>
    </Main>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
