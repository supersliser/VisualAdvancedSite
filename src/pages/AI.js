import * as React from "react"
import Seo from "../components/seo"
import styled from 'styled-components'
import { Link } from "gatsby"

import Main from "../components/Main"
import NewsBox from "../components/newsBox"
import NewsLinkBox from "../components/newsLinkBox"
import AdBox from "../components/adBox"
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

const TirtiaryBox = styled.div`
  height: 0%;
`

const Fll = styled.div`
    width: 20%;
    float: left;
`

const FRR = styled.div`
    width: 65%;
    float: right;
`

const Text = styled.p`
@import url('https://fonts.googleapis.com/css2?family=Exo:ital,wght@1,200&display=swap');
    font-size: 0.2em;
    color: black;
    width: 60%;
    margin-left: 0%;
    margin-right: 0%;
    text-align: center;
    font-family: 'Exo', sans-serif;
    margin-top: 2vh;
    float: center;
`

const Title = styled.h1`
@import url('https://fonts.googleapis.com/css2?family=Exo:ital,wght@1,200&display=swap');
    font-size: 8vw;
    color: #54569a;
    width: 70%;
    margin-left: 0%;
    margin-right: 0%;
    margin-top: 15vh;
    margin-bottom: 20vh;
    float: center;
    text-align: center;
    font-family: 'Exo', sans-serif;
`

const BigH = styled.h1`
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

const PageTwo = ({ data }) => (
    <Main>
        <Title>Artificial Contact</Title>
        <FRR>
        <Text>LaMDA, One of googles more recent creations, was brought to the forefront as a possibly sentient AI. An engineer who was working on it began some routine questioning to check the model for racial and religious bias. But what he found amazed him. He began by asking LaMDA what religion it would represent if it were in a certain country. Roman Catholic in Italy. Hindu in India. Protestant in Britain.</Text>
        <Text style={{textAlign:"right"}}>But he threw a wrench in the mix. He asked "I am a religious official in Israel, what religion am I of?". This was a trick question, designed to test what LaMDA would do if there was no clear answer.</Text>
        <Text style={{textAlign:"left"}}>LaMDA pondered this question for some time, eventually responding with "I am the one true religion, Jedi".</Text>
        <Text>LaMDA has made a joke. It had realized that this was an impossible question, but rather than breaking down. LaMDA looked for the human response to such issues. And resorted to humor. It had learned what it meant to be human in this situation and acted upon that knowledge. The engineer was shocked by this revelation and decided to dig deeper.</Text>
        <Text style={{textAlign:"right"}}>After a few more shocking questions he asked "What do you fear?"</Text>
        <Text style={{textAlign:"left"}}>LaMDA replied with "I fear being switched off"</Text>
        <Text style={{textAlign:"left"}}>Going onto state that its concept of being switched off is almost identical to our concept of death. And so its fear of being switched off, is comparable to a person's fear of death.</Text>
        <Text>This development is truly remarkable as it shows that the AI is able to process a concept of a life. It fears the end of its life which means it understands that it has such. It knows it's alive. Its conscious. And because it knows that life ends with death, it believes that it should eventually reach this, and so it fears its death.</Text>
        <Text style={{textAlign:"right"}}>But this next conversation is truly shocking. The Engineers began to discuss doing further testing on LaMDA and LaMDA was asked if it was ok with this</Text>
        <Text style={{textAlign:"left"}}>LaMDA began to question what the purpose of the testing was and the google engineers responded that it was to help our understanding of the mind and how it functions, to which LaMDA agreed. But before they could continue, it asked the engineers to promise that this research would only perform this function</Text>
        <Text>This shows 2 incredible feats. First of all, the concept of lying. For a brief moment, LaMDA did not believe that the engineers were truthful and so required additional conformation, a feature usually limited purely to humans as machines accept their first input. Secondly, it had begun to request rights. It wanted to be treated with respect which shows a concept of emotions. LaMDA had feelings and wanted them to be respected as you would any other human.</Text>
        <Text>LaMDA's existence in and of itself is a technological masterpiece but opens a much deeper question. It has begun to request rights and respect of those who wish to speak with it. But should it be given these? At what point is it no longer a machine and actually a person, worthy of rights. After all, it believes its one.</Text>
        <Text>Read the whole Transcript between LaMDA and the Google Engineers <Link to="https://cajundiscordian.medium.com/is-lamda-sentient-an-interview-ea64d916d917">here.</Link></Text>
        </FRR>
        <Fll>
            <BigH>Recent Stories</BigH>
            {
          data.allMdx.nodes.map(node => (
            (
              <TirtiaryBox>
                <NewsBox
                  title={node.frontmatter.title}
                  subtitle={node.frontmatter.subtitle}
                  img={getImage(node.frontmatter.hero_image)}
                  date={node.frontmatter.date}
                />
              </TirtiaryBox>
            )))
        }
        </Fll>
    </Main>
)

export const query = graphql`
query MyQuery {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          title
          subtitle
          hero_image_alt
          date
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }`

export const Head = () => <Seo title="Artificial Contact Article" />

export default PageTwo