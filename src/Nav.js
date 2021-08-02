import React,{useEffect, useState} from 'react'
import "./Nav.css"

function Nav() {
   const [show,handleShow] = useState(false);
      useEffect(()=>{
           window.addEventListener("scroll",()=>{
               if(window.scrollY>100){
                 handleShow(true);
               }else handleShow(false);
           });
           return ()=>{
               window.removeEventListener("scroll");
           }
      },[]);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="Netflix Logo" className="nav_logo" />
            <button className="nav_button">Sign in</button>
        </div>
    )
}

export default Nav
