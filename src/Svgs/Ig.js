import React from 'react'
import '../Styles/logos.css'

const SvgComponent = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <svg height="32px" width="32px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.51 32.51" {...props}>
    <defs>
      <style>{'.Circunferencia{fill:#fff}'}</style>
    </defs>
    <title>instagram siguenos</title>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          className="Circunferencia"
          d="M32.51 16.26A16.26 16.26 0 1 1 16.26 0a16.26 16.26 0 0 1 16.25 16.26Z"
        />
        <rect x={7.39} y={7.39} width={17.74} height={17.74} rx={2.05} />
        <path
          className="Circunferencia"
          d="M16.46 19.93a3.41 3.41 0 1 0-3.41-3.41 3.41 3.41 0 0 0 3.41 3.41Z"
        />
        <path
          className="Circunferencia"
          d="M21.86 15.76a4.77 4.77 0 0 1 .06.76 5.46 5.46 0 0 1-10.91 0 6.33 6.33 0 0 1 .05-.76q.06-.37.15-.72h-1.4v7.45a.68.68 0 0 0 .68.68h11.94a.67.67 0 0 0 .68-.68V15h-1.4q.09.39.15.76Z"
        />
        <rect
          className="Circunferencia"
          x={20.13}
          y={9.58}
          width={2.97}
          height={2.97}
          rx={0.68}
        />
      </g>
    </g>
  </svg>
)

export default SvgComponent
