// Wait for the page to load
document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('posts-container');

  // Fetch data from the API
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
    .then(response => response.json())
    .then(data => {
      data.forEach(post => {
        const div = document.createElement('div');
        div.className = 'post';
        div.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        `;
        container.appendChild(div);
      });
    })
    .catch(error => {
      container.innerHTML = '<p>Failed to load posts.</p>';
      console.error('Error fetching data:', error);
    });
});

