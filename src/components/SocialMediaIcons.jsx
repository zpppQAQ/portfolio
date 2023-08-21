import React from 'react'
import LINKEDINIMAGE from "../assets/linkedin.png"
import GITHUBIMAGE from "../assets/github-mark-white.png"
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a className=" hover:opacity-50 transition duration-500" href="https://github.com/zpppQAQ" target="_blank" rel="noreferrer">
        <img className="w-8" src={GITHUBIMAGE} alt="github-link" />
      </a>
      <a className="hover:opacity-50 transition duration-500" href="https://www.linkedin.com/in/pan-zhang-b09a2b267/" target="_blank" rel="noreferrer">
        <img src={LINKEDINIMAGE} alt="linkedin-link" />
      </a>
      
      {/* <a className="hover:opacity-50 transition duration-500" href="https://linkedin.com" target="_blank" rel="noreferrer">
        <img src={LINKEDINIMAGE} alt="linkedin-link" />
      </a>
      <a className="hover:opacity-50 transition duration-500" href="https://linkedin.com" target="_blank" rel="noreferrer">
        <img src={LINKEDINIMAGE} alt="linkedin-link" />
      </a> */}
    </div>
  )
}

export default SocialMediaIcons
