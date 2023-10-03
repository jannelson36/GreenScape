// CompanyDetails.js

import React from 'react';

export default function CompanyDetails() {
  return (
    <>
    <section className=''>
        <div className="company-details">
        <h2 className="hero__title">About Our Company</h2>
        <p className="hero__subtitle">
        Greenscape is a community-driven urban gardening project that encourages individuals, 
        families, and local businesses to adopt and nurture small green spaces in their neighborhoods.<br/> 
        These spaces can range from rooftop gardens and vertical plant walls to pocket parks 
        and shared vegetable patches.
        </p> <br/><br/>
        </div>
    </section>
    
    <section className=''>
        <div className="container">
        <h2 className="hero__title" style={{ textAlign: 'center', fontWeight: 'bold', margin: '50px' }}>Join Us</h2>
       
        <p className="hero__subtitle" style={{ textAlign: 'center', fontWeight: 'bold', margin: '30px' }}>Start your own green space or join an existing one.</p>
      <br/>
          <div className="button-container">
          <a href="/blog/garden" id="createSpace" className='button animated-button button--secondary button--lg'>Create Green Space</a>
          <a href="/gardens" id="joinSpace" className='button animated-button button--secondary button--lg'>Join Existing Green Space</a>
          </div>
        </div>
    </section>

</>
  );
}
