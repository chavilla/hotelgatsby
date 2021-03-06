import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';


// styled components
const ImageBackground=styled(BackgroundImage)`
    height:500px;
`;

const TextImage=styled.div`
    background-image: linear-gradient(to top, rgba(34,49,63,.6), rgba(34,49,63,.6));
    color: #fff;
    height:100%;
    display:flex;
    flex-direction:column;
    flex:1;
    align-items:center;
    justify-content:center;

    h1{
        font-size:4rem;
        margin:0;
        text-align:center;

        @media(min-width:992px){
            font-size:4.8rem;
        }
    }

    p{
        font-size:2rem;
        @media(min-width:992px){
            font-size:2.8rem;
        }    
    }
`;

const ImageHotel = () => {

    const { image }=useStaticQuery(graphql`
    query{
        image: file(relativePath:{ eq:"8.jpg" }){
          sharp: childImageSharp{
            fluid{
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `);

    return ( 
        <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn='soft'>
            <TextImage>
                <h1>
                    Bienvenidos a Hotel Gatsby
                </h1>
                <p>El mejor hotel para tus vacaciones</p>
            </TextImage>
        </ImageBackground>
     );
}
 
export default ImageHotel;