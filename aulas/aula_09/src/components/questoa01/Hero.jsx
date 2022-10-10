import React from "react"

const Hero = (props) => {

  return(
    <div>
      <h1>{props.name}</h1>

      <img src={props.img} alt="Img de app.js" />
    
    </div>
  )
}

export default Hero