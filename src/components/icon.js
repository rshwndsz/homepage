import React from "react"

const Icon = ({ name, icon }) => {
  return (
    <svg style={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        justifyItems: `center`,
        width: `2em`,
        height: `2em`,
        strokeWidth: 0,
        stroke: `currentColor`,
        fill: `currentColor`,
        fontStyle: `normal`,
        fontWeight: `normal`,
        marginRight: `.2em`,
        textAlign: `center`,
        fontVariant: `normal`,
        textTransform: `none`,
        lineHeight: `.5em`,
        marginLeft: `.2em`,
    }}>
      <title>{name}</title>
      <path d={icon.path} />
    </svg>
  )
}

export default Icon
