import React from 'react';
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title, description, author
        }
      }
    }
    `)

  return (
    <Helmet title={`${title} | ${data.site.siteMetadata.title}`}>
      <meta charSet="utf-8" />
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="author" content={data.site.siteMetadata.author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  )
}

export default Head;
