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

const Header = () => {
    return ( 
        <header
        css={css`
              background-color:rgba(44,62,80);
            padding: .3rem;
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

                <ToHome to='/'>
                    <h1>Hotel Gatsby</h1>
                </ToHome>
                <Nav/>
            </div>
        </header>
     );
}
 
export default Header;