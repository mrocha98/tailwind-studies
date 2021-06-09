import React from 'react'
import { Link, graphql } from 'gatsby'

export default function BlogList({ data }) {
  const postList = data.allMdx.edges

  return (
    <main className="container grid align-middle">
      {postList.map(({ node }, i) => (
        <article key={`article-${i}`}>
          <strong>{node.fields.title}</strong>
          <time>
            {node.frontmatter.date} / {node.timeToRead}
          </time>
          <p>{node.frontmatter.description}</p>
          <Link to={node.fields.slug}>READ</Link>
        </article>
      ))}
    </main>
  )
}

export const PostListQuery = graphql`
  query PostListQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            title
            description
          }
          timeToRead
        }
      }
    }
  }
`
