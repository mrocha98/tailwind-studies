import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPost = ({ data }) => {
  const post = data.mdx

  return (
    <article className="prose prose-md">
      <header>
        <Link to="/">⬅</Link>
        <img src={post.image} alt={post.title} />
        <time>
          {post.frontmatter.date} • {post.timeToRead} min de leitura
        </time>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.description}</p>
      </header>
      <MDXRenderer>{post.body}</MDXRenderer>
    </article>
  )
}

export default BlogPost

export const query = graphql`
  query Post($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      fields {
        slug
      }
      frontmatter {
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        image
        description
        title
      }
      timeToRead
    }
  }
`
