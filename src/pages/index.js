import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import HomeContent from "../components/homeContent";
import Imagehotel from "../components/imageHotel";
import Layout from "../components/layout";

const IndexPage = () =>{
  return(
      <>
      <Layout>
        <Imagehotel/>
        <HomeContent/>
      </Layout>
      </>
  )  
}

export default IndexPage
