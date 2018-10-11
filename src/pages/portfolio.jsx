import React from 'react';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';
import ProjectListing from '../components/ProjectListing/ProjectListing';

const Portfolio = props => {
  const projectEdges = props.data.allMarkdownRemark.edges;
  return (
    <div className="container index-container">
      <Helmet title={`${config.siteTitle} | Portfolio`} />
      <div>
        <ProjectListing projectEdges={projectEdges} />
      </div>
    </div>
  );
};

export default Portfolio;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            service
            client
            cover {
              childImageSharp {
                sizes(maxWidth: 850, quality: 90, traceSVG: { color: "#f3f3f3" }) {
                  ...GatsbyImageSharpSizes_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
