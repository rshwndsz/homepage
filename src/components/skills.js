import React from 'react'
import { rhythm } from '../utils/typography'

const SkillElements = ({data}) => ( 
  <>
    {data.map((element, index, _) => (
      <div>
        <div style={{
          fontSize: `${rhythm(3/4)}`,
          fontWeight: '600',
          }}
        >
          {element.type}
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          marginLeft: '2em'
          }}
        >
          {element.skills.map((skill, index, _) => (
            <span style={{
              textDecoration: 'underline',
              textDecorationStyle: 'dotted',
              textUnderlineOffset: `${rhythm(1/8)}`,
              textDecorationColor: '#84fab0',
              margin: `${rhythm(1/8)} ${rhythm(1/2)} ${rhythm(1/2)} 0`,
            }}
            > 
              {skill} 
            </span>
          ))}
        </div>
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
