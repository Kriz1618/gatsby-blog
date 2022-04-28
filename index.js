import * as React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "components/Layout";
import Seo from "components/SEO"
import HomeBunner from 'components/HomeBanner';
import BlogPostCard from 'components/BlogPostCard';

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
  <Layout>
    <Seo title="Home" />
    <HomeBunner />
    <main>
      {posts.map(({node}, i) => {
        const title = node.frontmatter.title || node.fields.slug;
        console.log('20 node', node);
        return (
          <BlogPostCard
            key={i}
            slug={node.fields.slug}
            title={title}
            date={node.frontmatter.date}
            readingTime={node.fields.readingTime.text}
            excerpt={node.excerpt}
            image={node.frontmatter.image.childImageSharp.fluid}
          />
        )
      })}
    </main>
  </Layout>

  )
}

export default IndexPage;

export const query = graphql`
  query blogListQuery {
    allMarkdownRemark(
      filter: {frontmatter: {type: {eq: "post"}}}
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      edges {
        node {
          fields {
            readingTime {
              text
            }
          }
          frontmatter {
            date
            title
            image {
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
