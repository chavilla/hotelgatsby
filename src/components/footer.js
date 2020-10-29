import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import {Link} from 'gatsby';
import Nav from './nav';

const ToHome=styled(Link)`
    color:#ffffff;
    text-align:center; 
    text-decoration:none;
`;

const Footer = ({title}) => {
    return ( 
        <>
        <footer
        css={css`
            background-color:rgba(44,62,80);
            padding: .3rem;
            margin-top:5rem;
        `}>
            <div
            css={
                css`
                max-width:1200px;
                margin: 0 auto;
                @media(min-width:768px){
                    display:flex;
                    align-items:center;
                    justify-content:space-between;
                }
                `
            }>

                <Nav/>
                <ToHome to='/'>
                    <h1>Hotel Gatsby</h1>
                </ToHome>
            </div>
        </footer>
        <p
        css={
            css`
                text-align:center;
                color:#fff;
                background-color: rgb(33,44,55);
                margin:0;
                padding: 1rem;
            `
        }
        >{title}. Todos los deechos reservados { new Date().getFullYear() } &copy; </p>
        </>
     );
}
 
export default Footer;