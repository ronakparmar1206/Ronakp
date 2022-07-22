import React from 'react'
import Card from './Card'
import img from "../src/image/image1.jpg"
import imgs from "../src/image/image2.jfif"
import imgss from "../src/image/image3.jfif"
import "./Services.css"
function Service() {
  return (
    <>
    <div className='forgrid'>
    <Card imgsrc={img}></Card>
    <Card imgsrc={imgs}></Card>
    <Card imgsrc={imgss}></Card>
    <Card imgsrc={img}></Card>
    <Card imgsrc={img}></Card>
    <Card imgsrc={img}></Card>
     <Card imgsrc={img}></Card>
    <Card imgsrc={img}></Card>
    <Card imgsrc={img}></Card>
    <Card imgsrc={img}></Card>
    <Card imgsrc={img}></Card>
    <Card imgsrc={imgs}></Card>
    </div>
    </>
  )
}

export default Service