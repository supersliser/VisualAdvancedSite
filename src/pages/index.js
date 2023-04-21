import * as React from "react"
import styled from 'styled-components'
import Seo from "../components/seo"
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

import Main from "../components/Main"
import NewsBox from "../components/newsBox"
import NewsLinkBox from "../components/newsLinkBox"
import AdBox from "../components/adBox"

const MainBox = styled.div`
  height: 50%;
  width: 40%;
  display: inline-block;
  vertical-align: middle;
`

const SecondaryBox = styled.div`
  height: 50%;
  width: 40%;
  display: inline-block;
  vertical-align: middle;
`

const TirtiaryBox = styled.div`
  max-height: 20%;
  width: 20%;
  display: inline-block;
  vertical-align: middle;
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

const IndexPage = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <Main>
      <MainBox>
      <BigH>Recommended Story</BigH>
        <NewsLinkBox
          title={data.mdx.frontmatter.title}
          subtitle={data.mdx.frontmatter.subtitle}
          img={image}
          link="../AI/"
          date={data.mdx.frontmatter.date}
        />
      </MainBox>
      <SecondaryBox>
      <BigH>Start of Advertisement</BigH>
        <AdBox
          title="Download Gatsby NOW!!!"
          subtitle="If you want to learn to make profession websites in the modern era, gatsby is for you."
          date="2016/8/22"
        />
        <BigH>End of Advertisement</BigH>
      </SecondaryBox>
      <div>
      <BigH>Other Stories</BigH>
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
      </div>
    </Main>
  )
}

export const query = graphql`
query MyQuery {
  allMdx(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {title: {ne: "Artificial Contact"}, ad: {eq: "0"}}}
  ) {
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
  mdx(frontmatter: {title: {eq: "Artificial Contact"}}) {
    frontmatter {
      title
      subtitle
      date
      hero_image_alt
      hero_image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}`

export const Head = () => <Seo title="Home" />

export default IndexPage