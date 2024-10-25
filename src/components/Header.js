import React from 'react'

const Header = () => {
    const headingItems = [
        "Camping Locations",
        "Activities",
        "Equipment",
        "Blogs"
    ];

    return (
        <div style={{ padding: "20px 165px", border: "1px solid #D8D8D8",  }}>
        <div style={{position: "absolute", left: "40px", top: "30px", fontSize: "18px", fontWeight: 700}}>
            Travelsy
        </div>
            <div style={{ 
                display: "flex", 
                gap: "40px",
                alignItems: "center", 
                justifyContent: "flex-end"
            }}>
                <div style={{ 
                    display: "flex",
                    gap: "1rem",
                }}>
                    {headingItems.map((item) => (
                        <div 
                            key={item}
                            style={{
                                cursor: "pointer",
                                fontSize:"13px",
                                fontWeight: "400",
                                color: "#4A4A4A"
                            }}
                            className="hover:text-blue-500"
                        >
                            {item}
                        </div>
                    ))}
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: "15px",
                    cursor: "pointer",
                }}>
            <button
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
                width: "150px",
                height: "40px",
                borderRadius: "20px",
                border: "none",
                backgroundColor: "#FF5200",
                color: "white",
                cursor: "pointer",
            }}
            >
            <img src='/reservation.jpg' alt='reservation' />
                Reservations
            </button>
            <img src='/search.png' alt='search' />
            <div style={{
                position: 'relative',
            }}>
            <img src='/Oval.png' alt='oval' />
            <div style={{
                width: '10px',
                height: '10px',
                backgroundColor: '#FF0000',
                position:'absolute',
                borderRadius: '50%',
                top: "5px",
                right: 0,
                border: "1px solid white",
            }}>

            </div>
            </div>
                <img src="./downArrow.png" alt='downArrow' />

            </div>
            </div>
           
        </div>
    )
}

export default Header