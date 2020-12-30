import React from "react"
import {
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://www.github.com/oliverwalsh7",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/vasilios-walsh",
  },
  {
    id: 3,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://www.twitter.com/vasilios47",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
