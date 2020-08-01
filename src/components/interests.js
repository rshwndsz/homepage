import React from 'react'
import { rhythm } from '../utils/typography'

const InterestElements = ({data}) => ( 
  <>
    <ul style={{
      display: 'table-cell',
      listStyle: 'none',
      padding: '0',
      margin: '0',
      }}
    >
      {data.map((element, index, _) => (
        <li style={{
          display: 'inline-block',
          textDecoration: 'underline',
          textDecorationStyle: 'dotted',
          textUnderlineOffset: `${rhythm(1/8)}`,
          textDecorationColor: '#84fab0',
          paddingRight: `${rhythm(1/2)}`,
        }}
        > 
          {element} 
        </li>
      ))}
    </ul>
  </>
)

const Interests = ({data}) => ( 
  <div>
    <InterestElements data={data} />
  </div>
)

export default Interests 
