import React from 'react'

function Button(props) {

  const { id,className, onClick, children } = props;

  return (
    <button id={id} className={ className } onClick={ onClick }>
      { children }
    </button>
  )
  }

  export { Button }