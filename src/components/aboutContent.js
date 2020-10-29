import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const TextAbout = styled.main`
  padding-top: 4rem;
  max-width: 992px;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }

  p {
    line-height: 2;
    margin-top: 2rem;
  }
`

const AboutContent = () => {
  const information = useStaticQuery(graphql`
    query {
      allDatoCmsPage(filter: { slug: { eq: "Nosotros" } }) {
        nodes {
          title
          content
          image {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  const {
    title,
    content,
    image: { fluid },
  } = information.allDatoCmsPage.nodes[0]

  return (
    <>
      <h2
        css={css`
          margin-top: 4rem;
          text-align: center;
          font-size: 4rem;
        `}
      >
        {title}
      </h2>
      <TextAbout>
        <p>{content}</p>
        <Image fluid={fluid} />
      </TextAbout>
    </>
  )
}

export default AboutContent
