module.exports = {
  siteMetadata: {
    title: `Glória Neighborhood`,
    description: `Where Neighbors can socialize.`,
    author: `Renan Felipe Teixeira`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `src`,
      path: `${__dirname}/src`,
    },
  },
  'gatsby-plugin-sharp',
  { 
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins : [
        'gatsby-remark-relative-images',
        { 
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 750,
            linkImagesToOriginal: false
          }
        }
      ]
  }
  },
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_SPACE_TOKEN
    },
  },
  ],
}
