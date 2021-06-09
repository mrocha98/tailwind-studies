const siteMetadata = {
  title: 'Gatsby With Tailwind',
  siteUrl: `https://www.example.com`
}

const plugins = [
  'gatsby-plugin-netlify-cms',
  'gatsby-plugin-postcss',
  'gatsby-plugin-image',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-sitemap',
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/images/icon.png'
    }
  },
  'gatsby-remark-images',
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      extensions: [`.md`, `.mdx`],
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200
            }
          },
          `gatsby-remark-autolink-headers`
        ],
        rehypePlugins: [
          require(`rehype-accessible-emojis`).rehypeAccessibleEmojis
        ]
      }
    }
  },
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/static/assets/img`,
      name: 'uploads'
    },
    __key: 'uploads'
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: './src/images/'
    },
    __key: 'images'
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'pages',
      path: './src/pages/'
    },
    __key: 'pages'
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: `${__dirname}/posts`
    },
    __key: 'posts'
  }
]

const flags = {
  DEV_SSR: false,
  FAST_DEV: true
}

module.exports = {
  siteMetadata,
  plugins,
  flags
}
