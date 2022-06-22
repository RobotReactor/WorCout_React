import React from 'react';

function MediumContainer(props) {
  return (
    <div className="md-container">
        {props.children}
    </div>
  )
}

export { MediumContainer }