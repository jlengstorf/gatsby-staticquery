import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/Header';

export default ({ data }) => (
  <>
    <Header title={data.site.siteMetadata.title} />
    <div>Hello world!</div>
  </>
);

export const query = graphql`
  query HeadingQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
