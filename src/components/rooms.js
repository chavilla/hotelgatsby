import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
query($slug: String!){
    allDatoCmsRoom(filter:{slug:{ eq: $slug }}){
      nodes{
        title
        content
        image{
        fluid(maxWidth:1200){
            ...GatsbyDatoCmsFluid
        }  
          }
      }
    }
  }
`

const RoomTemplate = ({ data:{ allDatoCmsRoom } }) => {
    console.log(allDatoCmsRoom);
  return <h1>Habitacion js</h1>
}

export default RoomTemplate
