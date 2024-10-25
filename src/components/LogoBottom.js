import React from 'react'

const LogoBottom = () => {
  return (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 165px',
        borderTop: '1px solid #E4E4E4'
    }}>
      <div style={{
          fontSize: '24px',
          fontWeight: 700,
          color: '#30797C',
      }}>Travelsy</div>
      
      <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
      }}>
        <img src='./mpesa.png' alt='mpesa'/>
        <img src='./discover.png' alt='discover'/>
        <img src='./visa.png' alt='visa'/>
        <img src='./paypal.png' alt='paypal'/>
        <img src='./mastercard.png' alt='mastercard'/>
        
        {/* Language Dropdown */}
        <select style={{
            padding: '5px',
            border: '1px solid #E4E4E4',
            fontSize: '13px',
            color: '#9B9B9B',
            width: '231px',
        }}>
          <option value="en">    
          English (United States)
          </option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
          {/* Add more options as needed */}
        </select>

        {/* Currency Dropdown */}
        <select style={{
            padding: '5px',
            border: '1px solid #E4E4E4',
            fontSize: '13px',
            color: '#9B9B9B',
            width: '115px',
        }}>
          <option value="KES">KES</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          {/* Add more options as needed */}
        </select>
      </div>
    </div>
  )
}

export default LogoBottom