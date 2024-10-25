import React from 'react'

const Testimonials = () => {
  return (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        backgroundColor: '#F8F8F8',
        padding:'40px 165px',
    }}>
    <div style={{
        display:'flex',
        flexDirection: 'column',
        padding:'10px',
    }}>
    <h4
    style={{ fontSize: '14px', fontWeight: 400, color: '#9B9B9B'}}>
    TESTIMONIALS
    </h4>
    <p style={{fontSize: '50px', fontWeight: 700, fontFamily: "Didot, serif", }}>
    What customers <span style={{color: '#FF5200'}}>say about us.</span> 
    </p>
<div style={{
    display: 'flex',alignItems: 'center', justifyContent: 'center', width: '123px', height: '60px', backgroundColor: '#FFFFFF', gap:'20px',
}}>
    <div style={{fontSize: '20px',cursor: 'pointer',}}>&lt;</div>
    <div><img src='./divider.png' alt='divider' /></div>
    <div style={{fontSize: '20px',color: '#9B9B9B',cursor: 'pointer',}}>&gt;</div>

</div>
    </div>
    <div style={{
        backgroundColor: '#FFFFFF',
        padding: '20px',
        height: '318px',

    }}>
    <h4 style={{
        fontSize: '16px',
        fontFamily: "Didot, serif",
    }}>Best User Experience</h4>
    <p style={{width: '300px',  fontSize: '14px', color: '#4A4A4A'}}>
    Because the rock was laid down in layers, there is a variation in the hardness of the rock formed. 
    When water runoff trickles across the rock, some areas erode rapidly whereas others hold firm.
     This variation in erosion speed causes the formation of pinnacles, or “hoodoos” of stable rock.
    </p>
    <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginTop: '30px',
        padding: '20px 0'
    }}>
        <img src='/derek1.png' alt='derek1' />
        <div style={{
         fontSize: '14px',
        color: '#4A4A4A'
    }}>Derek Dunn</div>
    </div>
    </div>
    <div style={{
        backgroundColor: '#FFFFFF',
        padding: '20px',
        height: '318px',
        position: 'relative',

    }}>
    <h4 style={{
        fontSize: '16px',
        fontFamily: "Didot, serif",
    }}>Friendly staff</h4>
    <p style={{width: '300px',  fontSize: '14px', color: '#4A4A4A'}}>
    Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation.
     It’s also big tour business and the are many options. 
    </p>
    <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginTop: '30px',
        padding: '20px 0',
        position: 'absolute',
        bottom: '49px',
    }}>
        <img src='/derek2.png' alt='derek2' />
        <div style={{
        fontSize: '14px',
        color: '#4A4A4A'
    }}>Derek Dunn</div>
    </div>
    </div>
        </div>
  )
}

export default Testimonials