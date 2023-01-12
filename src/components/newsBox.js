import * as React from "react"
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"

const NewsBoxContainer = styled.div`
    border-style: Solid;
    border-width: Medium;
    border-color: Yellow;
    border-radius: 2px;
    background-color: #333333;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
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
`

const SubtitleItem = styled.p`
    color: Yellow;
    font-size: 1em;
    width: 40%;
    height: 75%;
    padding-top: 15%;
    padding-left: 5%;
    padding-right: 5%;
`

const NewsBox = ({WidthNum, HeightNum, Title, Subtitle, TopNum, LeftNum}) => (
    <NewsBoxContainer width={WidthNum} height={HeightNum} top={TopNum} left={LeftNum}>
        <StaticImage style={{GridRow:"1 / 2"}} src="../images/Comps.JPG" alt="relating to the article"/>
        <TitleItem>{Title}</TitleItem>
        <SubtitleItem>{Subtitle}</SubtitleItem>
    </NewsBoxContainer>
)

export default NewsBox