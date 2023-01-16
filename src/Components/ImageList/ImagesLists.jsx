import React from 'react'

const styleClasses = {
  border:"1px solid red",
  height:"200px",
  width:"200px",
  display:"flex",

}

const ImagesLists = ({imagesData}) => {

  return (
    <div className={styleClasses} >
     {imagesData.map((image)=>
        <img src={image.webformatURL} alt="searchedImg" key={image.id} className="ui medium rounded image" />
        )
     }
    </div>
  )
}

export default ImagesLists