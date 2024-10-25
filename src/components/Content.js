import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles.css";

const Content = () => {
  const paragraphStyle = {
    fontSize: "13px",
    fontWeight: 400,
    color: "#4A4A4A",
  };

  // State to track selected grid items and selected time option
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');
  const [images, setImages] = useState([]); // State to store fetched images

  // Function to toggle item selection
  const toggleSelect = (item) => {
    if (selectedItems.includes(item)) {
      // Remove the item if it's already selected
      setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== item));
    } else {
      // Add the item to selected items
      setSelectedItems([...selectedItems, item]);
    }
  };

  // Grid items data
  const gridItems = [
    { name: 'Rafting', wide: true },
    { name: 'Nature Walk' },
    { name: 'Bike Riding' },
    { name: 'Bungee Jumping' },
    { name: 'Wine Tasting' },
    { name: 'Coffee Tasting' },
    { name: 'Farm Visit', wide: true },
    { name: 'Camping', wide: true },
    { name: 'Kibera Tour' },
  ];

  // Function to handle radio selection for time
  const handleTimeSelection = (event) => {
    setSelectedTime(event.target.value);
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:3000/photos?limit=9');
        const imageData = response.data.data; // Array of image objects
        console.log('Fetched Images:', imageData); // Debug to see the fetched data
        setImages(imageData); // Store fetched data in state
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, []);

  // Function to handle form submission
  const handleSubmit = () => {
    // Example function for submitting data
    console.log('Selected Items:', selectedItems);
    console.log('Selected Time:', selectedTime);

    // You can add API calls or other logic for submission here
    alert('Your preferences have been set!');
  };

  return (
    <div style={{
      margin: "40px 165px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    }}>
      <div style={{
        width: "450px",
        marginBottom: '30px',
      }}>
        <h1 style={{
          fontFamily: "Didot, serif",
          fontWeight: 700,
          fontSize: "70px",
        }}>Find An Experience</h1>
        <p style={paragraphStyle}>
          To find you the best experiences, we will ask you a few questions and show you experiences based on your preferences.
        </p>
      </div>

      <div>
        <p style={paragraphStyle}>How much time do you have?</p>
        <div style={{
          display: 'flex',
          gap: '30px',
          marginBottom: '25px',
          fontSize: "13px",
          fontWeight: 400,
          color: "#4A4A4A",
        }}>
          <label className="checkbox-label">
            <input
              type="radio"
              name="timeOption"
              value="A weekend"
              className="custom-checkbox"
              checked={selectedTime === "A weekend"}
              onChange={handleTimeSelection}
            />
            A weekend
          </label>
          <label className="checkbox-label">
            <input
              type="radio"
              name="timeOption"
              value="A week"
              className="custom-checkbox"
              checked={selectedTime === "A week"}
              onChange={handleTimeSelection}
            />
            A week
          </label>
          <label className="checkbox-label">
            <input
              type="radio"
              name="timeOption"
              value="A month"
              className="custom-checkbox"
              checked={selectedTime === "A month"}
              onChange={handleTimeSelection}
            />
            A month
          </label>
          <label className="checkbox-label">
            <input
              type="radio"
              name="timeOption"
              value="A few days, specify"
              className="custom-checkbox"
              checked={selectedTime === "A few days, specify"}
              onChange={handleTimeSelection}
            />
            A few days, specify.
          </label>
        </div>
      </div>

      <div>
        <p style={paragraphStyle}>What are your interests?</p>
      </div>

      <div className="grid-container">
        {gridItems.map((item, index) => {
          // Check if there's a corresponding image for this grid item
          const image = images[index];

          return (
            <div
              key={index}
              className={`grid-item ${item.wide ? 'wide' : ''} ${selectedItems.includes(item.name) ? 'selected' : ''}`}
              onClick={() => toggleSelect(item.name)}
              style={{
                backgroundImage: image && image.url ? `url(${image.url})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: !image || !image.url ? '#e0e0e0' : 'transparent', // Fallback color if image is missing
              }}
            >
              {item.name}
            </div>
          );
        })}
      </div>

      <button
        style={{
          width: '150px',
          height: '40px',
          borderRadius: '3px',
          backgroundColor: '#FF5200',
          color: '#fff',
          border: 'none',
          marginTop: '25px',
          cursor: 'pointer',
        }}
        onClick={handleSubmit}
      >
        Set
      </button>
    </div>
  );
};

export default Content;
