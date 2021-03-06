import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="container-column">
      <h1 className="h1-on-light">H1</h1>
      <h2 className="on-light-text">H2</h2>
      <h3 className="on-light-text">H3</h3>
      <h4 className="on-light-text">H4</h4>

      <div className="large-space-vertical" />

      <div className="row">
        <p className="large-text on-light-text">Large Text</p>
        <div className="small-space-horizontal" />
        <p className="large-text medium on-light-text">Large Text - Medium</p>
      </div>

      <div className="small-space-vertical" />

      <div className="row">
        <p className="medium-text on-light-text">Medium Text</p>
        <div className="small-space-horizontal" />
        <p className="medium-text medium on-light-text">Medium Text - Medium</p>
      </div>

      <div className="small-space-vertical" />

      <div className="row">
        <p className="caption">Caption</p>
        <div className="small-space-horizontal" />
        <p className="caption alt">Caption - Alt</p>
      </div>

      <div className="small-space-vertical" />

      <div className="row">
        <p className="normal-text on-light-text">Normal Text</p>
        <div className="small-space-horizontal" />
        <p className="normal-text medium on-light-text">Normal Text - Medium</p>
      </div>

      <div className="small-space-vertical" />

      <div className="row">
        <p className="small-text on-light-text">Small Text</p>
        <div className="small-space-horizontal" />
        <p className="small-text medium on-light-text">Small Text - Medium</p>
      </div>

      <div className="small-space-vertical" />

      <Link to="/page-2/" className="light-link">
        Hover This Link
      </Link>
    </div>
    <div className="container-column dark-bg">
      <h1 className="on-dark-text">H1</h1>
      <h2 className="on-dark-text">H2</h2>
      <h3 className="on-dark-text">H3</h3>
      <h4 className="on-dark-text">H4</h4>

      <div className="large-space-vertical" />

      <div className="row">
        <p className="large-text on-dark-text">Large Text</p>
        <div className="small-space-horizontal" />
        <p className="large-text medium on-dark-text">Large Text - Medium</p>
      </div>

      <div className="small-space-vertical" />

      <div className="row">
        <p className="medium-text on-dark-text">Medium Text</p>
        <div className="small-space-horizontal" />
        <p className="medium-text medium on-dark-text">Medium Text - Medium</p>
      </div>

      <div className="small-space-vertical" />

      <div className="row">
        <p className="caption">Caption</p>
        <div className="small-space-horizontal" />
        <p className="caption alt">Caption - Alt</p>
      </div>

      <div className="small-space-vertical" />

      <div className="row">
        <p className="normal-text on-dark-text">Normal Text</p>
        <div className="small-space-horizontal" />
        <p className="normal-text medium on-dark-text">Normal Text - Medium</p>
      </div>

      <div className="small-space-vertical" />

      <div className="row">
        <p className="small-text on-dark-text">Small Text</p>
        <div className="small-space-horizontal" />
        <p className="small-text medium on-dark-text">Small Text - Medium</p>
      </div>

      <div className="small-space-vertical" />

      <Link to="/page-2/" className="dark-link">
        Hover This Link
      </Link>
    </div>
    <div className="container-column tan-bg" />
    <div className="container-column dark-tan-bg" />
    <div className="container-column off-white-bg" />
    <div className="container-row">
      <div className="left">
        <div className="text-container">
          <h2 className="on-light">Title</h2>
          <p className="large-text on-light-text">
            Framer X offers tools to design scroll, link and page interactions.
            But don’t stop there—add a 3D effect or momentum. Create flows that
            feel real. And do it all in half the time.
          </p>
        </div>
      </div>
      <div className="left">
        <div className="form-container">
          <input className="textbox" type="text" placeholder="FIRST NAME" />
          <input className="textbox" type="text" placeholder="LAST NAME" />
          <input className="textbox" type="text" placeholder="EMAIL" />
          <textarea
            className="textbox textarea"
            type="text"
            placeholder="MESSAGE"
          />
          <div className="button">
            <p>SUBMIT</p>
          </div>
          <div className="small-space-horizontal" />
          <div className="outline">
            <p>CANCEL</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
