import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';

const RecipeForm = ({ onSubmit, currentRecipe, onClear }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [cookingTime, setCookingTime] = useState('');

  useEffect(() => {
    if (currentRecipe) {
      setTitle(currentRecipe.title);
      setIngredients(currentRecipe.ingredients.join(','));
      setInstructions(currentRecipe.instructions);
      setCookingTime(currentRecipe.cookingTime);
    } else {
      setTitle('');
      setIngredients('');
      setInstructions('');
      setCookingTime('');
    }
  }, [currentRecipe]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedRecipe = {
      id: currentRecipe ? currentRecipe.id : Date.now(),
      title,
      ingredients: ingredients.split(','),
      instructions,
      cookingTime: Number(cookingTime),
    };

    onSubmit(updatedRecipe);
    onClear();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 rounded-lg shadow-lg bg-gradient-to-r from-green-300 to-blue-500">
      <div className="mb-4">
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="rounded-lg shadow-md bg-white"
        />
      </div>
      <div className="mb-4">
        <TextField
          label="Ingredients (comma separated)"
          variant="outlined"
          fullWidth
          margin="normal"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
          className="rounded-lg shadow-md bg-white"
        />
      </div>
      {/* <div className="mb-4">
        <TextField
          label="Instructions"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
          className="rounded-lg shadow-md bg-white"
        />
      </div> */}
      <div className="mb-4">
        <TextField
          label="Cooking Time (in mins)"
          variant="outlined"
          type="number"
          fullWidth
          margin="normal"
          value={cookingTime}
          onChange={(e) => setCookingTime(e.target.value)}
          required
          className="rounded-lg shadow-md bg-white"
        />
      </div>
      <Button
        variant="contained"
        type="submit"
        color="primary"
        className="bg-purple-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
      >
        {currentRecipe ? 'Update Recipe' : 'Add Recipe'}
      </Button>
    </form>
  );
};

export default RecipeForm;



// import React, { useState, useEffect } from 'react';
// import { TextField, Button } from '@mui/material';

// const RecipeForm = ({ onSubmit, currentRecipe, onClear }) => {
//   const [title, setTitle] = useState('');
//   const [ingredients, setIngredients] = useState('');
//   const [instructions, setInstructions] = useState('');
//   const [cookingTime, setCookingTime] = useState('');
//   const [imageUrl, setImageUrl] = useState(''); // Image URL state

//   useEffect(() => {
//     if (currentRecipe) {
//       setTitle(currentRecipe.title);
//       setIngredients(currentRecipe.ingredients.join(','));
//       setInstructions(currentRecipe.instructions);
//       setCookingTime(currentRecipe.cookingTime);
//       setImageUrl(currentRecipe.imageUrl || ''); // Populate if editing
//     } else {
//       setTitle('');
//       setIngredients('');
//       setInstructions('');
//       setCookingTime('');
//       setImageUrl('');
//     }
//   }, [currentRecipe]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const updatedRecipe = {
//       id: currentRecipe ? currentRecipe.id : Date.now(),
//       title,
//       ingredients: ingredients.split(','),
//       instructions,
//       cookingTime: Number(cookingTime),
//       imageUrl, // Image URL
//     };

//     onSubmit(updatedRecipe);
//     onClear();
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mb-4">
//       <TextField
//         label="Title"
//         variant="outlined"
//         fullWidth
//         margin="normal"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         required
//       />
//       <TextField
//         label="Ingredients (comma separated)"
//         variant="outlined"
//         fullWidth
//         margin="normal"
//         value={ingredients}
//         onChange={(e) => setIngredients(e.target.value)}
//         required
//       />
//       <TextField
//         label="Instructions"
//         variant="outlined"
//         fullWidth
//         margin="normal"
//         multiline
//         rows={4}
//         value={instructions}
//         onChange={(e) => setInstructions(e.target.value)}
//         required
//       />
//       <TextField
//         label="Cooking Time (in mins)"
//         variant="outlined"
//         type="number"
//         fullWidth
//         margin="normal"
//         value={cookingTime}
//         onChange={(e) => setCookingTime(e.target.value)}
//         required
//       />
//       <TextField
//         label="Image URL"
//         variant="outlined"
//         fullWidth
//         margin="normal"
//         value={imageUrl}
//         onChange={(e) => setImageUrl(e.target.value)}
//       />
//       <Button variant="contained" type="submit" color="primary">
//         {currentRecipe ? 'Update Recipe' : 'Add Recipe'}
//       </Button>
//     </form>
//   );
// };

// export default RecipeForm;
