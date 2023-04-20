import * as React from "react"
import styled from 'styled-components'
import Seo from "../components/seo"

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

const IndexPage = () => (
  <Main>
    <MainBox>
      <NewsBox 
      title="This is a test" 
      subtitle="This is a test testThis is a test testThis is a test testThis  a test testThis is a test test"
      img="..\images\UnityLogo.png"
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

export const Head = () => <Seo title="Home" />

export default IndexPage