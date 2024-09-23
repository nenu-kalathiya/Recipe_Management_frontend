import React from 'react';
import RecipeDetail from './RecipeDetail';

const RecipeList = ({ recipes, onDelete, onEdit }) => {
  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <RecipeDetail recipe={recipe} onDelete={onDelete} onEdit={onEdit} /> {/* onEdit pass ho raha hai */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
