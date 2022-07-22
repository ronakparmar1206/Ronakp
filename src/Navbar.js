import React from "react";
import "./Project.css";
import { NavLink } from "react-router-dom";
import { RiAlignJustify, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
const Menu = ()=>(
    <>
      <li className="box">
            <NavLink to="/Home">Home</NavLink>
          </li>
          <li className="box">
            <NavLink to="/About">About</NavLink>
          </li>
          <li className="box">
            <NavLink to="/Service">Service</NavLink>
          </li>
          <li className="box">
            <NavLink to="/Contact">Contact</NavLink>
          </li>
    </>
)
function Navbar() {
  const [toggle, settoggle] = useState(false);
  return (
    <>
      <div>
        <ul class="nav">
        <Menu/>
        </ul>
        {/* <h3 className="show" onClick={showBar}> <FaBars /></h3>
<h3 className='hide' onClick={showCross}><FaCross/></h3> */}
        <div className="forflex">
          {toggle ? (
            <RiCloseLine className="close"
              onClick={() => {
                settoggle(false);
              }}
            />
          ) : (
            <RiAlignJustify
              onClick={() => {
                settoggle(true);
              }}
            />
          )}
          {toggle && (
            <div className="dd">
               <Menu/>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
