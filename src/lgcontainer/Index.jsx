import React from 'react';

function LargeContainer (props) {
  return (
    <div className="lg-container">
        {props.children}
    </div>
  )
}

export { LargeContainer }
