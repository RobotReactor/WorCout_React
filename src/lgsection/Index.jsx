import React from 'react'

function LargeSection(props) {
  return (
    <div className="big-section">
        {props.children}
    </div>
  )
}

export { LargeSection }