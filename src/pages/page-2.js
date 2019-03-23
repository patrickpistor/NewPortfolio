import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="container">
      <h1 className="h1-on-light">Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/" className="light-link">
        Go back to the homepage!
      </Link>
    </div>
  </Layout>
)

export default SecondPage
