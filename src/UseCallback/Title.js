import React from 'react'

const Title = () => {
    console.log("Title Component rendered!")
  return (
    <div>
      <h2>Title </h2>
    </div>
  )
}

export default React.memo(Title)
