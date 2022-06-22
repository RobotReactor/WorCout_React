import React from 'react';

function MainScreen(props) {
    return (
      <div id="main-screen" className="main-screen">
          {props.children}
      </div>
    )
}

export { MainScreen };