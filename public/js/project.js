const updateButtonHandler = async (event) => {
  event.preventDefault();

  const id = event.target.dataset.id;
  const title = document.querySelector('input[name="project-name"]').value;
  const body = document.querySelector('input[name="project-funding"]').value;

  const response = await fetch(`/api/projects/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, body }),
  });

  if (response.ok) {
    document.location.replace('/profile');
  } else {
    alert('Failed to update');
  }
};

document.querySelector('.new-project-form').addEventListener('submit', updateButtonHandler);
  

  