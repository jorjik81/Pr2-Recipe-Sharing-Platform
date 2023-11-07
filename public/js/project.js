const id = document.querySelector('input[name="recipe-id"]').value;
const updateButtonHandler = async (event) => {
  event.preventDefault();

  
  const name = document.querySelector('#recipe-name').value.trim();
  const needed_ingredients = document.querySelector('#recipe-ingredients').value.trim();
  const description = document.querySelector('#recipe-desc').value.trim();

  // Log the values to the console for debugging
  console.log('name:', name);
  console.log('ingredients:', needed_ingredients);
  console.log('description:', description);
  console.log('id:', id);

  if (name && needed_ingredients && description) {
    const response = await fetch(`/api/projects/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, needed_ingredients, description }),
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to update recipe');
    }
  }
};

document.querySelector('#edit-recipe-form').addEventListener('submit', updateButtonHandler);