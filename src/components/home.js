import React from 'react'
import goog from "./goog.jpeg";
import apple from "./apple.jpeg";
import img from "./img.jpeg";
import Header from "./header";

export default function home() {
  return (
    <section id="home">
    <div>

<Header/>
         <div className="img">
      <div className="x">
        
        
      <h1>Save money and fight against food waste</h1>
      <br/>
      <p>Get massive savings on fresh food items like meat and 
        produce that are nearing their best before date at grocery 
        stores across Canada and the U.S.</p>
        <br/>
        <div className="playstore">
          <div> 
          <a href="https://play.google.com/store/apps/details?id=com.flashfoodapp.android&shortlink=da7a27fb&c=homepage_playstore&pid=website&source_caller=ui" target="_blank">
          <button className="goog" type="button" >
            <img src={goog}  height="40px" width="100px"/>
          </button>
          </a>
          </div>
          <div>
          <a href="https://apps.apple.com/app/flashfood-grocery-deals/id1187314160?shortlink=8c0cf298&c=homepage_appstore&pid=website&source_caller=ui" target="_blank">
          <button className="apple" type="button" >
            <img src={apple} height="40px" width="100px"/>
          </button>
          </a>
          </div>
        </div>
      </div>
      <div className="y">
      <img src={img} alt="x" height="600px" width="800px" />
      </div>
      
    </div>
    </div>
    </section>
  )
}
