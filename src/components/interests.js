import React from 'react'
import { rhythm } from '../utils/typography'

const InterestElements = ({data}) => ( 
  <>
    {data.map((element, index, _) => (
      <span style={{
        textDecoration: 'underline',
        textDecorationStyle: 'dotted',
        textUnderlineOffset: `${rhythm(1/8)}`,
        textDecorationColor: '#84fab0',
        margin: `${rhythm(1/8)} ${rhythm(1/2)} ${rhythm(1/2)} 0`,
      }}
      > 
        {element} 
      </span>
    ))}
  </>
)

const Interests = ({data}) => ( 
  <div>
    <InterestElements data={data} />
  </div>
)

export default Interests 
