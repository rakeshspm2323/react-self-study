import React from 'react'

const Child = (props) => {
    console.log(props.children[0].props.children);
    console.log(props.children[1].props.children);
    console.log(props.children[2].props.children);
  return (
    <div>
      
    </div>
  )
}

export default Child
