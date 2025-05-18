// Wait for the page to load
document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('box-container');
  
  //Show a loading message while fetching data
  container.textContent = 'Loading boxes...';

  // Fetch data from the API
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
    .then(response => response.json())
    .then(data => {
      //Clear loading message
      container.textContent = '';
      data.forEach(box => {
        const div = document.createElement('div');
        div.className = 'box';
        div.innerHTML = `
          <h2>${box.title}</h2>
          <p>${box.body}</p>
        `;
        container.appendChild(div);
      });
    })
    .catch(error => {
      container.innerHTML = '<p>Failed to load box.</p>';
      console.error('Error fetching data:', error);
    });
});

