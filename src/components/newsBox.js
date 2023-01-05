import * as React from "react"
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"
import Text from "./Text"
const NewsBoxContainer = styled.div`
    position: absolute;
    border-style: Solid;
    border-width: Medium;
    border-color: Yellow;
    border-radius: 2px;
    background-color: #333333;
`

const TitleItem = styled(Text)`
    color: Yellow;
    font-size: 3em;
    width: 40%;
    height: 25%;
    top: 0px;
    padding-top: 5%;
    padding-left: 5%;
    padding-right: 5%;
    position: relative;
`

const SubtitleItem = styled(Text)`
    color: Yellow;
    font-size: 1em;
    width: 40%;
    height: 75%;
    padding-top: 15%;
    padding-left: 5%;
    padding-right: 5%;
    position: relative;
`

const NewsBox = ({Width, Height, Title, Subtitle}) => (
    <NewsBoxContainer width="{Width}%" height="{Height}%">
        <StaticImage width="45%" Height="90%" MarginLeft="5%" MarginRight="10%" src="../images/Comps.JPG" alt={Title} position="relative"/>
        <TitleItem>{Title}</TitleItem>
        <SubtitleItem>{Subtitle}</SubtitleItem>
    </NewsBoxContainer>
)

export default NewsBox