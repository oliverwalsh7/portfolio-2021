import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({description, title, stack, github, url, image, index}) => {
  console.log(stack)
  return (
    <article className="project">
      <Image fluid={image.childImageSharp.fluid} className="project-img" />
        <div className="project-info">
          <span className="project-number">0{index+1}</span>
          <h3>{title}</h3>
          <p className="project-desc">{description}</p>
          <div className="project-stack">
            {stack.map((item) => {
              return <span key={item.id}>{item.title}</span>
            })}
          </div>
        </div>
    </article>
  )
}

Project.propTypes = {}

export default Project
