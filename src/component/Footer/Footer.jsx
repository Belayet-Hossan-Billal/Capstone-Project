import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
        
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pags </span>
          <span> Stores</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, harum? Modi labore aut adipisci quos officiis quod ipsum at ad nulla. Esse eligendi cupiditate, repellendus amet minus quos aspernatur, in quidem</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, harum? Modi labore aut adipisci quos officiis quod ipsum at ad nulla. Esse eligendi cupiditate, repellendus amet minus quos aspernatur, in quidem</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className='logo'> ABADI APP </span>
          <span className='copyright'> © Copyright 2022. All Right reserved by Belayet</span>
        </div>
        
      </div>
     </div>
  )
}

export default Footer