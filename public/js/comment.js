const commentFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the comment form
    const comment = document.querySelector('#comment').value.trim();
  
    if (comment) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, reload to show comment
        document.location.reload;
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);