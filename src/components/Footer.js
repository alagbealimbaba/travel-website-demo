import React from 'react';

const Footer = () => {
  // Constant styles for the list items
  const listItemStyle = {
    textDecoration: 'none',
    fontSize: '12px',
    color: 'black',
    marginBottom: '8px',
    display: 'block'
  };

  return (
    <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '20px',
        padding: '40px 165px',
        borderTop: '1px solid #E4E4E4'
    }}>
      {/* Section 1: Need Travelsy Help */}
      <div>
        <h3 style={{ fontWeight: 700, fontSize: '13px' }}>Need Travelsy Help?</h3>
        <p style={{ fontWeight: 400, fontSize: '13px' }}>Got Questions? Call us 24/7!</p>
        <p style={{ fontWeight: 400, fontSize: '13px' }}>Call Us: +254 716099 815</p>
        <p style={{ fontWeight: 400, fontSize: '12px' }}>Email Us: <a href="mailto:info@travelsy.com">info@travelsy.com</a></p>
        <h3 style={{ fontWeight: 700, fontSize: '13px', marginTop: '20px' }}>Contact Info:</h3>
        <p style={{ fontWeight: 400, fontSize: '12px' }}>2nd Floor, Fedha Plaza,Westlands, Nairobi, Kenya.</p>
        <p style={{ fontWeight: 400, fontSize: '12px' }}>P.O Box 7231-00300<br/> Nairobi, Kenya</p>
        <p></p>
        <div style={{
            display: 'flex',
            gap: '10px',
            marginTop: '10px'
        }}>
          {/* Social Media Icons */}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-twitter' style={{ fontSize: '24px', color: 'black' }}></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-instagram' style={{ fontSize: '24px', color: 'black' }}></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-youtube' style={{ fontSize: '24px', color: 'black' }}></i>
          </a>
        </div>
      </div>
      
      {/* Section 2: Company */}
      <div>
        <h3 style={{ fontWeight: 700, fontSize: '13px' }}>Company</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li ><a style={listItemStyle} href="#">About Us</a></li>
          <li ><a style={listItemStyle} href="#">Careers</a></li>
          <li ><a style={listItemStyle} href="#">Terms Of Use</a></li>
          <li ><a style={listItemStyle} href="#">Privacy Statement</a></li>
          <li ><a style={listItemStyle} href="#">Give Us Feedback</a></li>
          <li ><a style={listItemStyle} href="#">Partner With Us</a></li>
        </ul>
      </div>
      
      {/* Section 3: Other Services & Support */}
      <div>
        <h3 style={{ fontWeight: 700, fontSize: '13px' }}>Other Services & Support</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li ><a style={listItemStyle} href="#">Rewards Program</a></li>
          <li ><a style={listItemStyle} href="#">Partners</a></li>
          <li ><a style={listItemStyle} href="#">Legal</a></li>
          <li ><a style={listItemStyle} href="#">Privacy Policy</a></li>
          <li ><a style={listItemStyle} href="#">Customer Service Help</a></li>
        </ul>
      </div>
      
      {/* Section 4: Quick Links */}
      <div>
        <h3 style={{ fontWeight: 700, fontSize: '13px' }}>Quick Links</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li ><a style={listItemStyle} href="#">Your Account</a></li>
          <li ><a style={listItemStyle} href="#">Camping Locations</a></li>
          <li ><a style={listItemStyle} href="#">Activities</a></li>
          <li ><a style={listItemStyle} href="#">Hire Equipment</a></li>
          <li ><a style={listItemStyle} href="#">Blogs</a></li>
        </ul>
      </div>
      
      {/* Section 5: Mailing List */}
      <div>
        <h3 style={{ fontWeight: 700, fontSize: '13px' }}>Mailing List</h3>
        <p style={{ fontWeight: 400, fontSize: '12px', color: '#4A4A4A' }}>Sign up for our mailing lists and get the latest offers and promotions straight in your inbox.</p>
        <div style={{ display: 'flex', marginTop: '10px' }}>
          <input 
            type="email" 
            placeholder="Your Email" 
            style={{
              flex: 1,
              padding: '10px',
              border: '1px solid #E4E4E4',
              outline: 'none',
             fontWeight: 400,
              fontSize: '12px',
             color: '#4A4A4A',
             paddingRight: '40px'
            }}
          />
          <button style={{
              backgroundColor: '#FF6600',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              cursor: 'pointer'
          }}>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
