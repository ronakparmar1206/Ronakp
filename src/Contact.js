import React, { useState } from "react";
import "./Contact.css";
function Contact() {
  
    const [data, setData] = useState({
      fullname: "",
      phone: "",
      email: "",
      msg: "",
    });
    const InputEvent=(event)=>{
       const{name,value}=event.target;
       setData((d)=>{
        return{
          ...d,
          [name]:value,
        };
       });
    };
    const formSubmit=(e)=>{
e.preventDefault();
alert(`${data.fullname}`)
    }
  
  return (
    <>
      <div className="container">
        <div className="scontainer">
          <h1>Contact US</h1>
          <form onSubmit={formSubmit}>
            <div className="name">
              <h4>Full name</h4>
              <input
                type="text"
                className="input"
                name="fullname"
                value={data.fullname}
                onChange={InputEvent}
                placeholder="ENter your name"
              />
            </div>
            <div className="name">
              <h4>Phone</h4>
              <input
                type="number"
                className="input"
                name="phone"
                value={data.phone}
                onChange={InputEvent}
                placeholder="Enter your number"
              />
            </div>
            <div className="name">
              <h4>Email Address</h4>
              <input
                type="email"
                className="input"
                name="email"
                value={data.email}
                onChange={InputEvent}
                placeholder="Enter your mail"
              />
            </div>
            <div className="name">
              <button className="btn-grad">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
