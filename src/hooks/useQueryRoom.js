import { graphql, useStaticQuery } from 'gatsby';

const useQueryRoom = () => {

    const query=useStaticQuery(graphql`
    query{
        allDatoCmsRoom{
          nodes{
            title
            id
            slug 
            content
            image{
              fluid(maxWidth:1200){
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
    `);
    const { allDatoCmsRoom:{ nodes } }=query;

    return nodes.map(room=>({
        title: room.title,
        id:room.id,
        content:room.content,
        image:room.image,
        slug:room.slug
    }));
}
 
export default useQueryRoom;