import React from "react"

const Icon = ({ name, icon, color, width, height }) => {
  return (
    <svg style={{
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        justifyItems: `center`,
        width: `${width || '1.4em'}`,
        height: `${height || '1.4em'}`,
        strokeWidth: 0,
        stroke: `${color}`,
        fill: `${color}`,
        fontStyle: `normal`,
        fontWeight: `normal`,
        margin: `.4em`,
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
