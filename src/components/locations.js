import React from 'react'
import "./header.css";

export default function locations() {
  return (
    <section id="location">
    <div className='locs1'> 
      <br/>
     <h1> Get locations nearby </h1>
     <br/><br/>
     <div className='locations'> 
    <div className='form'>
<form>
  <div className="mb-3">
    <br/>
    <label htmlFor="exampleInputName" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputName" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="exampleInputAddress" />
  </div>

  <button type="submit" className="btn btn-primary">Get locations</button>
</form>
</div>

<div className='loc'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3083.5397952465614!2d-122.08374528415621!3d37.386051642867426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f8e4f9e5de5a3%3A0x4a501367f076ad75!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1630140006880!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
    </div>
    </div>
    </section>
  )
}
