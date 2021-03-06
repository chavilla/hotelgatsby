import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import  Image  from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const TextHome=styled.div`
    padding-top:4rem;
    max-width:1100px;
    width:95%;
    margin:0 auto;

    @media(min-width:768px){
        display:grid;
        grid-template-columns:2fr 1fr;
        column-gap:2rem;
    }
`;

const HomeContent = () => {

  const information = useStaticQuery(graphql`
    query {
      allDatoCmsPage(filter: { slug: { eq: "inicio" } }) {
        nodes {
          title
          content
          image {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `);

  const { title, content, image:{fluid}}=information.allDatoCmsPage.nodes[0];

  return (
    <>
      <h2
      css={css`
        text-align:center;
        font-size: 4rem;
        margin-top:4rem;
      `}
      >{title}</h2>
      <TextHome>
          <p>
              {content}
          </p>
          <Image fluid={fluid}/>
      </TextHome>
    </>
  )
}

export default HomeContent
