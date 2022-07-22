import React from 'react'
import './Project.css'
import web from "../src/image/images.png"
import { NavLink } from 'react-router-dom';
function Common(props) {
  
  return (
    <>
    <section className='main'>
    <div className='heading'>
    <h1>{props.name} <br/><span>ThapaTeachnical</span></h1>
    <p>We are the team of talented</p>
    <button><NavLink to={props.visit}>{props.btnname}</NavLink></button>
    </div>
    <div className='image'>
      <img src={web} alt="home img" />
      </div>

    </section>
    </>
  );
}

export default Common