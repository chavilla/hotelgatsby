import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

//styled zone
const Button=styled(Link)`
    margin-top:2rem;
    text-align:center;
    padding: 1rem;
    background-color: rgba(44,62,80,.85);
    width:100%;
    color:#FFF;
    display:block;
    text-decoration:none;
    text-transform: uppercase;
    font-weight:700;
`;

const RoomPreview = ({room}) => {
    
    const { content, image, title, slug }=room;

    return ( 
        <div
        css={css`
            border:1px solid #e1e1e1;
            margin-bottom:1rem;
            `}>

            <Image
            fluid={image.fluid}
            />

            <div
            css={css`
                padding:2rem;
            `}
            >
                <h3>{title}</h3>
                <p>{content}</p>
                <Button to={slug}>Ver Habitación</Button>
            </div>
        </div>
     );
}
 
export default RoomPreview;