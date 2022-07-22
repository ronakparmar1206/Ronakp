import React from 'react'
// import Sdata from './Array'
import "./Card.css"
function Card(props) {
  return (

<>
<div className='card'>
<img src={props.imgsrc} alt="Paris"/>
</div>
</>  )
}

export default Card