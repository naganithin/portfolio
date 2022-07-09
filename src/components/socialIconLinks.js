import React from "react"

import IconGithub from './images/github'
import IconLinkedIn from './images/in'
import IconTwitter from './images/twitter'
import IconInstagram from './images/instagram'


const SocialIconLinks = ({ iconClasses }) => {

  return (
    <>
      <a href="https://github.com/naganithin/" target="_blank" rel="noopener noreferrer">
        <IconGithub classes={`${iconClasses}`} />
      </a>
      <a href="https://www.linkedin.com/in/naganithing/" target="_blank" rel="noopener noreferrer">
        <IconLinkedIn classes={`${iconClasses}`}  />
      </a>
      <a href="https://twitter.com/nithin_naga" target="_blank" rel="noopener noreferrer">
        <IconTwitter classes={`${iconClasses}`}  />
      </a>
      <a href="https://www.instagram.com/naganithing" target="_blank" rel="noopener noreferrer">
        <IconInstagram classes={`${iconClasses}`}  />
      </a>
    </>
  )
}

export default SocialIconLinks
