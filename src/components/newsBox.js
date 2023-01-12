import * as React from "react"
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"

const NewsBoxContainer = styled.div`
    position: Static;
    border-style: Solid;
    border-width: Medium;
    border-color: Yellow;
    border-radius: 2px;
    background-color: #333333;
`

const TitleItem = styled.p`
    color: Yellow;
    font-size: 3em;
    width: 40%;
    height: 25%;
    top: 0px;
    padding-top: 5%;
    padding-left: 5%;
    padding-right: 5%;
    position: relative;
    float: right;
`

const SubtitleItem = styled.p`
    color: Yellow;
    font-size: 1em;
    width: 40%;
    height: 75%;
    padding-top: 15%;
    padding-left: 5%;
    padding-right: 5%;
    position: relative;
    float: right;
`

const NewsBox = ({WidthNum, HeightNum, Title, Subtitle, TopNum, LeftNum}) => (
    <NewsBoxContainer width={WidthNum} height={HeightNum} top={TopNum} left={LeftNum}>
        <StaticImage position="relative" width="45%" height="90%" marginLeft="5%" marginRight="10%" float="Left" src="../images/Comps.JPG" alt="relating to the article"/>
        <TitleItem>{Title}</TitleItem>
        <SubtitleItem>{Subtitle}</SubtitleItem>
    </NewsBoxContainer>
)

export default NewsBox