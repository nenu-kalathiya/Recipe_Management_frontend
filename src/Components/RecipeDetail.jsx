// import React from 'react';
// import { Card, CardContent, Typography, Button } from '@mui/material';

// const RecipeDetail = ({ recipe, onDelete, onEdit }) => {
//   return (
//     <Card>
//       <CardContent>
//         <Typography variant="h5">{recipe.title}</Typography>
//         <Typography color="text.secondary">Ingredients: {recipe.ingredients.join(', ')}</Typography>
//         <Typography color="text.secondary">Instructions: {recipe.instructions}</Typography>
//         <Typography color="text.secondary">Cooking Time: {recipe.cookingTime} mins</Typography>
//         <Button variant="contained" color="primary" onClick={() => onEdit(recipe)}>
//           Edit
//         </Button>
//         <Button variant="contained" color="error" onClick={() => onDelete(recipe.id)}>
//           Delete
//         </Button>
//       </CardContent>
//     </Card>
//   );
// };

// export default RecipeDetail;
import React from 'react';
import { Card, CardContent, Typography, Button, CardMedia } from '@mui/material';

const RecipeDetail = ({ recipe, onDelete, onEdit, onAddToCart }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={recipe.imageUrl || 'https://via.placeholder.com/200'} // Default image if no URL provided
        alt={recipe.title}
      />
      <CardContent>
        <Typography variant="h5">{recipe.title}</Typography>
        <Typography color="text.secondary">Ingredients: {recipe.ingredients.join(', ')}</Typography>
        <Typography color="text.secondary">Instructions: {recipe.instructions}</Typography>
        <Typography color="text.secondary">Cooking Time: {recipe.cookingTime} mins</Typography>
        <Button variant="contained" color="primary" onClick={() => onEdit(recipe)}>
          Edit
        </Button>
        <Button variant="contained" color="error" onClick={() => onDelete(recipe.id)}>
          Delete
        </Button>
        <Button variant="contained" color="success" onClick={() => onAddToCart(recipe)}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default RecipeDetail;
