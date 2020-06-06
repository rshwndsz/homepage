import React from "react"

const Icon = ({ name, icon, color }) => {
  return (
    <svg style={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        justifyItems: `center`,
        width: `1.4em`,
        height: `1.4em`,
        strokeWidth: 0,
        stroke: `${color}`,
        fill: `${color}`,
        fontStyle: `normal`,
        fontWeight: `normal`,
        margin: `.4em`,
        textAlign: `center`,
        fontVariant: `normal`,
        textTransform: `none`,
    }}
        viewBox={icon.viewBox}
    >
      <title>{name}</title>
      <path d={icon.path} />
    </svg>
  )
}

export default Icon
