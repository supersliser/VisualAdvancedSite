import * as React from "react"
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"

const NewsBoxContainer = styled.div`
    border-style: Solid;
    border-width: Medium;
    border-color: #54569a;
    border-radius: 2px;
    background-color: #dedede;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
    'image title'
    'image subtitle'
    ;
    justify-content: center;

    height: 100%;

    margin-left: 5%;
    margin-top: 2%;
    margin-bottom: 2%;
`

const TitleItem = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Sofia+Sans:wght@800&display=swap');
    color: #54569a;
    font-size: 40%;
    padding-top: 5%;
    padding-left: 5%;
    padding-right: 5%;
    grid-area: title;
    text-align: center;
    font-family: 'Sofia Sans', sans-serif;
    text-decoration: none;
`

const SubtitleItem = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Exo:ital,wght@1,200&display=swap');
    color: black;
    font-size: 25%;
    padding-left: 5%;
    padding-right: 5%;
    grid-area: subtitle;
    text-align: center;
    font-family: 'Exo', sans-serif;
    text-decoration: none;
`

const NewsBox = ({ title, subtitle, img, date }) => (
    <NewsBoxContainer>
        <GatsbyImage style={{
            gridRowStart: "1",
            gridRowEnd: "2",
            gridArea: "image",
            height: "100%",
            margin: "0px"
        }}
            image={img}
            alt="image relating to the article"
        />
        <TitleItem>{title}</TitleItem>
        <SubtitleItem>{subtitle}{date}</SubtitleItem>
    </NewsBoxContainer>
)

export default NewsBox