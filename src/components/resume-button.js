import React from 'react'
import { IconContext } from 'react-icons'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { rhythm } from '../utils/typography'

const ResumeButton = ({ text, link }) => (
  <div style={{
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `center`,
    marginBottom: `${rhythm(1)}`
  }}>
    <a style= {{
      border: `2px solid #84fab0`,
      borderRadius: `4px`,
      background: `#181a1b`,
      color: `#e8e6e3`,
      boxShadow: `none`,
      padding: `${rhythm(1/2)}`,
    }} 
      href={link || "https://raw.githubusercontent.com/rshwndsz/resume/master/CV.pdf"}
    > 
      <span style={{ verticalAlign: 'middle' }}>
        {text || "View Resume"}
      </span>
      <IconContext.Provider value={{ color: "#ff8177", size: '1.3em', 
        style: { verticalAlign: 'middle', margin: '0 0 0.2em 0.2em' } }}>
        <AiOutlineFilePdf />
      </IconContext.Provider>
    </a>
  </div>
)

export default ResumeButton
