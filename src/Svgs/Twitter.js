import React from 'react'
import '../Styles/logos.css'

const SvgComponent = (props) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <svg
      height="32px"
      width="32px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32.42 32.42"
    // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <title>twitter siguenos</title>
      <g data-name="Layer 2">
        <g data-name="Layer 1">
          <circle
            className="Circunferencia"
            cx={16.21}
            cy={16.21}
            r={16.21}
          />
          <path d="M25 11.86a6.84 6.84 0 0 1-1.91.52 3.31 3.31 0 0 0 1.46-1.84 6.65 6.65 0 0 1-2.11.81 3.33 3.33 0 0 0-5.67 3 9.45 9.45 0 0 1-6.85-3.47 3.33 3.33 0 0 0 1 4.44 3.34 3.34 0 0 1-1.51-.42 3.33 3.33 0 0 0 2.67 3.3 3.28 3.28 0 0 1-1.5.06 3.33 3.33 0 0 0 3.11 2.31A6.72 6.72 0 0 1 8.78 22a9.46 9.46 0 0 0 14.55-8.4A7 7 0 0 0 25 11.86Z" />
        </g>
      </g>
    </svg>
  )
}

export default SvgComponent
