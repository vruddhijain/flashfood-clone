import React from 'react';
import loc from "./loc.png";
import './header.css';
import pic2 from "./pic2.png";
import pic3 from "./pic3.png";


const howitworks = () => {
  return (
    <section id="howitworks">
    <div className='parent'>
    <br/><br/>
    <h1>How it works</h1>
   
  <div className='div1'>
    <div className='text1'>
        <br/><br/>
        <h2>First, use the free app to quickly and easily find discounted food from wherever you are.</h2>
        <br/> <br/>
        <ul>
            <li>Browse deals of up to 50% off at a grocery store location near you.
See Locations.</li><br/>
            <li>Choose your discounted food items.</li><br/>
            <li>Pay right in the app using any major credit card, VISA debit card, or SNAP EBT card.</li>
        </ul>
   
    </div>
    <div>
    <img src={loc} width= "400px" height= "470px" className='pic1'/>
    </div>
  </div>
  <div className='div2'>
  <div>
    <img src={pic2} height="250px" width="300px"  className='pic2'/>
  </div>
    <div className='text2'>
        <h2>Then, pick up your Flashfood order at the grocery store.</h2> <br/>
        <p>Head to the store, grab your food items from the Flashfood zone, and quickly confirm your order with the customer service desk.</p>
    </div>
    
  </div>
  <div className='div3'>
    <div className='text3'><br/>
        <h2>Finally, enjoy good food, a great deal, and the good deed - you just saved some food from the landfill!</h2><br/>
<p>Learn more about Food Waste</p>
    </div>
    <div>
        <img src={pic3} height="250px" width="300px" className='pic3'/>
    </div>
  </div>
</div>
</section>
  )
}

export default howitworks
