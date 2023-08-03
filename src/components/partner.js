import React from 'react'
import part from "./partner.png"
import "./header.css";

export default function partner() {
  return (
    <section id="partner">
    <div>
        
      <div className='partner'> 
      <br/><br/>
        <h1>Our Partners</h1><br/><br/>
        <img src={part}/>
      </div>
    </div>
    </section>
  )
}
