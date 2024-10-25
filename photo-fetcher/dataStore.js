const axios = require('axios');

// In-memory store
let photoData = [];

// Function to remove duplicates based on the 'id' field
function removeDuplicates(data) {
  const uniqueIds = new Set();
  return data.filter(photo => {
    if (uniqueIds.has(photo.id)) {
      return false;
    }
    uniqueIds.add(photo.id);
    return true;
  });
}

// Function to fetch photos and update in-memory store
async function fetchPhotos() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
    const fetchedPhotos = response.data;

    // Merge new data, removing duplicates
    photoData = removeDuplicates([...photoData, ...fetchedPhotos]);
  } catch (error) {
    console.error('Error fetching photos:', error);
  }
}

// Function to get photos with pagination
function getPhotos({ limit = 10, orderBy = 'id', page = 1 }) {
  // Sorting photos based on the orderBy field
  const sortedPhotos = [...photoData].sort((a, b) => (a[orderBy] > b[orderBy] ? 1 : -1));

  // Pagination logic
  const startIndex = (page - 1) * limit;
  const paginatedPhotos = sortedPhotos.slice(startIndex, startIndex + limit);

  return paginatedPhotos;
}

// Fetch data every 1 minute (60000ms)
setInterval(fetchPhotos, 60000);

module.exports = {
  getPhotos,
};
