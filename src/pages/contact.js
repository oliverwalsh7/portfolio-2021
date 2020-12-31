import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3>Get In Touch</h3>
          <form action="https://formspree.io/f/xbjppbjr" method="POST">
            <div className="form-group">
              <input type="text" name="name" placeholder="name" className="form-control"/>
              <input type="email" name="email" placeholder="email" className="form-control"/>
              <textarea name="message" placeholder="message" rows="5" className="form-control"/>
            </div>
            <button type="submit" className="submit-btn btn">
              send
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
