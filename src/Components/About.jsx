import React from 'react'

function About() {
  return (
    <div className='about-info-media'>
    <div className='about'>
      <div className='brief'>
        With the Wix website builder, you get an all-<br/>inclusive solution encompassing enterprise-<br/>grade infrastructure, business features,<br/>advanced SEO, and marketing tools,<br/>empowering everyone to create and thrive<br/>online.
      </div>
      <div className='about-product'>
        <div className='section-heading'>
          <h1>Product</h1>
        </div>
        <ul style={{ listStyleType: 'none', padding: 0 }} className='product-buttons'>
          <li><button className='pb1'>Website Builder</button></li>
          <li><button className='pb2'>Website Templates</button></li>
          <li><button className='pb3'>Website Design</button></li>
          <li><button className='pb4'>Web Hosting</button></li>
          <li><button className='pb5'>Mobile App Builder</button></li>
          <li><button className='pb6'>Website Accessibility</button></li>
        </ul>
      </div>
      <div className='about-solutions'>
        <div className='section-heading'>
          <h1>Solutions</h1>
        </div>
        <ul style={{ listStyleType: 'none', padding: 0 }} className='solution-buttons'>
          <li><button className='pb1'>OStoreline</button></li>
          <li><button className='pb2'>Online Booking</button></li>
          <li><button className='pb3'>Arts & Crafts Website</button></li>
          <li><button className='pb4'>Clothing Website</button></li>
          <li><button className='pb5'>Tools Websites</button></li>
          <li><button className='pb6'>Motorbikes Website</button></li>
          <li><button className='pb7'>Hardware Website</button></li>
        </ul>    
      </div>
      <div className='about-support'>
        <div className='section-heading'>
          <h1>Support</h1>
        </div>
        <ul style={{ listStyleType: 'none', padding: 0 }} className='support-buttons'>
          <li><button className='pb1'>Help Centre</button></li>
          <li><button className='pb2'>Report Abuse</button></li>
          <li><button className='pb3'>System Status</button></li>
        </ul>    
      </div>
      <div className='about-compony'>
        <div className='section-heading'>
          <h1>Company</h1>
        </div>
        <ul style={{ listStyleType: 'none', padding: 0 }} className='compony-buttons'>
          <li><button className='pb1'>About Us</button></li>
          <li><button className='pb2'>Pricing</button></li>
          <li><button className='pb3'>Career</button></li>
          <li><button className='pb3'>Press & Media</button></li>
        </ul>    
      </div>
 </div>
 <div className="media">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-youtube"></i>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>
      <a href="https://google.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-google"></i>
      </a>
      <button>2006 - 2023 XXXX.com</button>
    </div>
 </div>
  )
}

export default About;
