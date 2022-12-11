import React from 'react'
import { Link } from 'react-router-dom'
import './banner.css'
const Banner = () => {
  return (
    <div className='container-fluid banner '> 
        <div className="imgContainer">
            <img src="https://cdn.discordapp.com/attachments/830720118157475881/1051100509362212934/banner.jpg" alt="banner img" />
           
        </div>
        <div className="bannerText">
        <h1 >ABADI APP</h1>
        <p>Your Product Our Market </p>
        <div className="login">
            <Link to='/login'>
                 <button >Login</button>
            </Link>
            <Link to='/register'>
               <button>Register</button>
           </Link>
            
        </div>
        </div>

     
    </div>
  )
}

export default Banner