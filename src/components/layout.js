import React from "react"
import { Global, css } from '@emotion/core';
import Header from "./header"
import Helmet from "react-helmet"

const Layout = props => {
  return (
    <>
        <Global
            styles={css`
                html{
                    font-size:62.5%;
                }
                body{
                    background-color:#e1e1e1;
                    font-size:18px;
                    font-size:1.8rem;
                    line-height:1.5;
                    font-family:'PT Sans'
                }
                h1,h2,h3{
                    margin:0;
                    line-height:1.5;
                }
                h1,h2{
                    font-family:'Roboto', sans-serif
                }
                h3{
                    font-family: 'PT Sans', sans-serif;
                }
                ul{
                    list-style:none;
                    margin:0;
                    padding:0;
                }
            `}
        />
      <Helmet>
        <title>Gatsby Hotel</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"/>
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
      </Helmet>
      <Header />
      {props.children}
    </>
  )
}

export default Layout
