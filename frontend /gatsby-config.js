require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: "refit",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logo_splashscreen.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: "http://localhost:1337",
        queryLimit: 1000,
        contentTypes: [`services`, `rooms`, `questionnaires`],
      },
    },
  ],
};
