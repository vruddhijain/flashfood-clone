import React from 'react'
import sto1 from "./sto1.png";
import sto2 from "./sto2.png";
import sto3 from "./sto3.png";
import sto4 from "./sto4.png";
import food from "./foodwaste.png";
import team from "./team.png";
import "./header.css";

export default function about() {
  return (
    <section id="about">
    <div>
    <div className='story'>
        <div className='stortext'>
      <h1>Our Story</h1>
      <br/><br/>
      <p>We spent our careers in a variety of industries such as 
        management <br/>consulting, finance, and emerging technology, 
        however we decided <br/> it was time to do something different - something that would create a <br/>better world for future generations, while creating affordable access to food to everyone.</p>
    </div>
    <div className='storimg'>
        <div>
            <img src={sto1} width = "900px" height="300px"/>
        </div>
        <div>
        <img src={sto2} width = "900px" height="300px"/>
        </div>
        <div>
        <img src={sto3} width = "900px" height="300px"/>
        </div>
        <div>
        <img src={sto4} width = "900px" height="300px"/>
        </div>
    </div>
    <br/><br/><br/>
    <div className='foodwaste'>
    <h1>Food waste</h1> <br/><br/>
    <img src={food} width = "1000px" height="1200px"/>

    </div>
    <br/><br/>
    <div className='team'>
    <h1>Team</h1> <br/><br/>
    <img src={team} width = "1000px" height="700px"/>

    </div>
    
    </div>

    
    </div>
    </section>
   
  )
}
