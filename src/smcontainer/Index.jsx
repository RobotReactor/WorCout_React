import React from 'react';

function SmallContainer(props) {
  return (
    <div className="sm-container">
        {props.children}
    </div>
  )
}

export { SmallContainer }