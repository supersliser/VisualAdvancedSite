import * as React from "react"
import styled from 'styled-components'
import Seo from "../components/seo"
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

import Main from "../components/Main"
import NewsBox from "../components/newsBox"
import NewsLinkBox from "../components/newsLinkBox"

const MainBox = styled.div`
  height: 60%;
  width: 40%;
  display: inline-block;
`

const SecondaryBox = styled.div`
  height: 60%;
  width: 40%;
  display: inline-block;
`

const TirtiaryBox = styled.div`
  height: 40%;
  width: 18%;
  display: inline-block;
`

const IndexPage = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <Main>
      <MainBox>
        <NewsLinkBox
          title={`${data.mdx.frontmatter.title}`}
          subtitle={`${data.mdx.frontmatter.subtitle}`}
          img={image}
          link="./AI.js"
          date={`${data.mdx.frontmatter.date}`}
        />
      </MainBox>
      <SecondaryBox>
        <NewsBox
          title="This is a test"
          subtitle="this is still a test but longer"
          img="null"
        />
      </SecondaryBox>
      <div>
        <TirtiaryBox>
          <NewsBox
            title="this is still a test"
            subtitle="i hate Programming but this is fine"
            img="null still"
          />
        </TirtiaryBox>
        <TirtiaryBox>
          <NewsBox
            title="this is still a test"
            subtitle="i hate Programming but this is fine"
            img="null still"
          />
        </TirtiaryBox>
        <TirtiaryBox>
          <NewsBox
            title="this is still a test"
            subtitle="i hate Programming but this is fine"
            img="null still"
          />
        </TirtiaryBox>
        <TirtiaryBox>
          <NewsBox
            title="this is still a test"
            subtitle="i hate Programming but this is fine"
            img="null still"
          />
        </TirtiaryBox>
        <TirtiaryBox>
          <NewsBox
            title="this is still a test"
            subtitle="i hate Programming but this is fine"
            img="null still"
          />
        </TirtiaryBox>
      </div>
    </Main>
  )
}

export const query = graphql`
query MyQuery {
  allMdx(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        title
        subtitle
        date
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        hero_image_alt
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