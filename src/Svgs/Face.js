import React from 'react'
import '../Styles/logos.css'

const SvgComponent = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <svg height="32px" width="32px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.42 32.42" {...props}>
    <defs>
      <style>{'.cls-1{fill:#fff}'}</style>
    </defs>
    <title>facebook siguenos</title>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <circle className="Circunferencia" cx={16.21} cy={16.21} r={13.51} />
        <circle className="Circunferencia" cx={16.21} cy={16.21} r={16.21} />
        <path d="M13.51 13.51h-2.7v2.7h2.7v8.1h4v-8.1H20l.24-2.7h-2.7v-1.13c0-.64.13-.9.75-.9h2V8.1H17c-2.42 0-3.5 1.07-3.5 3.12Z" />
      </g>
    </g>
  </svg>
)

export default SvgComponent
