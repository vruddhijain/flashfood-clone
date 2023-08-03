import React, { useState } from 'react';
import sup from './sup.png';
import "./header.css";

export default function Support() {
  const [showForm, setShowForm] = useState(false);

  const handleRequestClick = () => {
    setShowForm(true);
  };

  return (
    <div className='sup1'> 
    <br/><br/><br/>
      <h1>How can we help you?</h1><br/><br/><br/>
      <div  className='sup'>
      <div className='supform'>
        
        {/* Show the form only when 'showForm' is true */}
        {showForm && (
          <form>
            <div>
              <label htmlFor="helpWith">What do you need help with?</label>
              <input
                type="text"
                id="helpWith"
                name="helpWith"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Your email address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                rows="4"
                required
              ></textarea>
            </div>
            <button  type="submit">Submit</button>
          </form>
        )}
        {/* Button to open the form */}
        <button onClick={handleRequestClick} className="buttonreq"> Submit a Request</button>
      </div>

      <div className='supimg'>
        <img src={sup}  height= "400px"
    width = "500px"/>
      </div>
      </div>
    </div>
  );
}
