/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      
      {author?.name && (
        <p>
          <div className="margin-20" 
          data-sal="slide-up" data-sal-duration="2000" data-sal-delay="300" 
          data-sal-easing="ease">
          I'm Jennifer, an electrical engineering sophomore trying to enjoy life despite stress. 
          Aside from tech stuff, I like to read, write, discover cute coffee shops, and learn languages. 
          One thing I love to do is staring at the sky while I walk, which, fortunately, has not ended in me tripping and breaking my legs - yet.
          </div>
          <div className="margin-20"
          data-sal="slide-up" data-sal-duration="2000" data-sal-delay="300" 
          data-sal-easing="ease">
          I've always loved writing, and this year (2022) I've decided to share some of my writing online. So welcome to my writing blog, where I post short stories, poems, and essays about random things.
          </div>
          <div className="margin-20"
          data-sal="slide-up" data-sal-duration="2000" data-sal-delay="300" 
          data-sal-easing="ease">
          I'm also hoping to write more in Chinese (I'm Taiwanese, born and raised, btw), so hopefully there will be some of that here, although they will most likely be edited versions of my diary entries instead of well-planned essays. Have fun reading!
          </div>
          {` `}
          <a href="https://twitter.com/404">
            You should definitely not follow me on Twitter
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
