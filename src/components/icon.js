import React from "react"

const Icon = ({ name, icon }) => {
  return (
    <svg style={{
        display: `inline-block`,
        width: `1.5em`,
        height: `1.5em`,
        strokeWidth: 0,
        stroke: `currentColor`,
        fill: `currentColor`,
        fontStyle: `normal`,
        fontWeight: `normal`,
        marginRight: `.2em`,
        textAlign: `center`,
        fontVariant: `normal`,
        textTransform: `none`,
        lineHeight: `1em`,
        marginLeft: `.2em`,
    }}>
      <title>{name}</title>
      <path d={icon.path} />
    </svg>
  )
}

export default Icon
