import { useStaticQuery, graphql } from 'gatsby';

export const UseMetadataQuery = () => {
  const data = useStaticQuery(graphql`
    query MetadataQuery {
      site {
        siteMetadata { 
           author
           description
           title
        }      
      }
    }
  `);

  return data.site.siteMetadata;
}

