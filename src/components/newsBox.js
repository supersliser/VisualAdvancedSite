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
    grid-template-areas:
    'image title'
    'image subtitle'
    ;
    width: 40vw;
    height: 30vh;
    top: 120vh;
    left: 20vw;
    position: absolute;
`

const TitleItem = styled.p`
    color: Yellow;
    font-size: 40%;
    padding-top: 5%;
    padding-left: 5%;
    padding-right: 5%;
    grid-area: title;
`

const SubtitleItem = styled.p`
    color: Yellow;
    font-size: 25%;
    padding-top: 15%;
    padding-left: 5%;
    padding-right: 5%;
    grid-area: subtitle;
`

const NewsBox = ({WidthNum, HeightNum, Title, Subtitle, TopNum, LeftNum}) => (
    <NewsBoxContainer >
        <StaticImage style={{GridRow:"1 / 2", GridArea:"image"}} src="../images/Comps.JPG" height="100%" alt="relating to the article"/>
        <TitleItem>{Title}</TitleItem>
        <SubtitleItem>{Subtitle}</SubtitleItem>
    </NewsBoxContainer>
)

export default NewsBox