import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const blogPath = `${__PATH_PREFIX__}/writing`
  const chiBlogPath = `${__PATH_PREFIX__}/writing-man`
  const isRootPath = location.pathname === rootPath
  const isBlogPath = location.pathname === blogPath
  const isChiBlogPath = location.pathname === chiBlogPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )

  } else if (isBlogPath) {
    header = (
      <div className="blog-intro-div" data-sal="slide-up" data-sal-duration="2000" data-sal-delay="300" 
          data-sal-easing="ease">
        <h1>
          jennifer's writing
        </h1>
        <p>
          a collection of short stories, poetry, and essays. 
        </p>
        <p>
          you know, sometimes i read a piece of writing and think damn i could be best friends with this author or damn this person just put into words some feeling i've never been able to describe. that's the kind of writer i aspire to be. 
        </p>
        <p>
          i hope you find peace here.
        </p>
      </div>
    )
  }
  else if (isChiBlogPath)
  {
    header = (
      <div className="blog-intro-div" data-sal="slide-up" data-sal-duration="2000" data-sal-delay="300" 
      data-sal-easing="ease">
    <h1>
      大抵是關於絢爛島嶼的文字
    </h1>
    <p>
      This is me clinging onto my language, my culture, my childhood, my identity. 
    </p>
    <p>
      When written out it sounds very cliche, but it's scary to watch yourself forget how to write characters or struggle to articulate thoughts in a language you've spoken for your whole life. And sad when you make byelingual jokes to shrug it off as if it didn't sting.
    </p>
    <p>
      Will mostly be pieces of my childhood I think, I might also post English versions but I'm not sure.
    </p>
  </div> 
    )
  }  
  else {
    header = null
  }

 

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <nav>
        <ul className="nav-links">
          <li className="nav-link-item">
            <Link to="/" className="nav-link-text">home</Link>
            </li>
          <li className="nav-link-item">
            <Link to="/writing" className="nav-link-text">writing</Link>
            </li>
          <li className="nav-link-item">
            <Link to="/writing-man" className="nav-link-text">寫作</Link>
          </li>
        </ul>
      </nav>
      <header className="global-header">{header}</header> 
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        <div>No elephants were harmed in the process</div>
      </footer>
    </div>
  )
}

export default Layout
