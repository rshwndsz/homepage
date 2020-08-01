import React from 'react'
import { rhythm } from '../utils/typography'

const SkillElements = ({data}) => ( 
  <>
    {data.map((element, index, _) => (
      <div>
        <h3> {element.type} </h3>

        <ul style={{
          display: 'table-cell',
          padding: '0',
          margin: '0',
          listStyle: 'none',
          }}
        >
          {element.skills.map((skill, index, _) => (
            <li style={{
              display: 'inline-block',
              textDecoration: 'underline',
              textDecorationStyle: 'dotted',
              textUnderlineOffset: `${rhythm(1/8)}`,
              textDecorationColor: '#84fab0',
              paddingRight: `${rhythm(1/2)}`,
            }}
            > 
              {skill} 
            </li>
          ))}
        </ul>
      </div>
    ))}
  </>
)

const Skills = ({data}) => ( 
  <div>
    <SkillElements data={data} />
  </div>
)

export default Skills
