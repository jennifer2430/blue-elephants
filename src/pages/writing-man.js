import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Bio from '../components/bio'
import Layout from '../components/layout'
import Seo from '../components/seo'

const WritingMan = ({data, location}) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const posts = data.allMarkdownRemark.nodes
    
    return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}
            data-sal="slide-up" data-sal-duration="2000" data-sal-delay="300" 
            data-sal-easing="ease">
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default WritingMan

export const pageQuery = graphql`
query {
    allMarkdownRemark(
      filter: {frontmatter: {language: {eq: "Chinese"}}}
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      nodes {
        excerpt
        frontmatter {
          date (formatString: "MMMM DD, YYYY")
          description
          language
          title
        }
        fields {
            slug
          }
      }
    }
    site {
        siteMetadata {
          author {
            name
            summary
          }
          description
          siteUrl
          title
        }
      }
  }
  
`
