import * as React from "react"
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"
import Text from "./Text"
const NewsBoxContainer = styled.div`
    border-style: Solid;
    border-width: Medium;
    border-color: Yellow;
    border-radius: 2px;
    background-color: #333333;
`

const Title = styled(Text)`
    color: Yellow;
    font-size: 3em;
    width: 40%;
    height: 25%;
    top: 0px;
    padding-top: 5%;
    padding-left: 5%;
    padding-right: 5%;
`

const Subtitle = styled(Text)`
    color: Yellow;
    font-size: 3em;
    width: 40%;
    height: 75%;
    padding-top: 15%;
    padding-left: 5%;
    padding-right: 5%;
`

const NewsBox = ({Width, Height, Title, Subtitle}) => (
    <NewsBoxContainer width="{Width}%" height="{Height}%">
        <StaticImage width="45%" Height="90%" MarginLeft="5%" MarginRight="10%" src="../images/Comps.JPG" alt={Title}/>
        <Title>{Title}</Title>
        <Subtitle>{Subtitle}</Subtitle>
    </NewsBoxContainer>
)

export default NewsBox