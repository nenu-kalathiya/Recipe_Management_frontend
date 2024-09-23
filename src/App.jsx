import React, { useState } from 'react';
import RecipeList from './Components/RecipeList';
import RecipeForm from './Components/RecipeForm';
import { Container } from '@mui/material';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState(null);

  const addOrUpdateRecipe = (recipe) => {
    if (currentRecipe) {
      setRecipes(recipes.map((r) => (r.id === recipe.id ? recipe : r)));
    } else {
      setRecipes([...recipes, { ...recipe, id: Date.now() }]);
    }
    setCurrentRecipe(null); // Clear current recipe after adding/updating
  };

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  const editRecipe = (recipe) => {
    setCurrentRecipe(recipe);
  };

  const clearCurrentRecipe = () => {
    setCurrentRecipe(null);
  };

  return (
    <Container>
      <h1>Recipe Management</h1>
      <RecipeForm onSubmit={addOrUpdateRecipe} currentRecipe={currentRecipe} onClear={clearCurrentRecipe} />
      <RecipeList recipes={recipes} onDelete={deleteRecipe} onEdit={editRecipe} /> {/* onEdit pass kar rahe hain */}
    </Container>
  );
};
export default App;


// import React, { useState } from 'react';
// import { Container, Typography } from '@mui/material';
// import FoodMenu from './Components/FoodMenu'; // Importing FoodMenu Component
// import Cart from './Components/Cart';         // Importing Cart Component

// const App = () => {
//   // Food items with their details (title, price, image)
//   const [foods, setFoods] = useState([
//     { id: 1, title: 'Pizza', price: 10, imageUrl: 'https://via.placeholder.com/200' },
//     { id: 2, title: 'Burger', price: 8, imageUrl: 'https://via.placeholder.com/200' },
//     { id: 3, title: 'Pasta', price: 12, imageUrl: 'https://via.placeholder.com/200' },
//   ]);

//   // Cart state to hold added items
//   const [cart, setCart] = useState([]);

//   // Function to add food to cart
//   const addToCart = (food) => {
//     setCart([...cart, food]); // Add the selected food item to the cart
//   };

//   // Function to remove item from cart by its ID
//   const removeFromCart = (id) => {
//     setCart(cart.filter((item) => item.id !== id)); // Remove item with matching ID
//   };

//   // Function to handle order placement
//   const placeOrder = () => {
//     alert('Order placed successfully!'); // Show alert when order is placed
//     setCart([]); // Clear the cart after the order is placed
//   };

//   return (
//     <Container>
//       {/* App Title */}
//       <Typography variant="h3">Food Ordering Application</Typography>

//       {/* Display food menu */}
//       <FoodMenu foods={foods} onAddToCart={addToCart} />

//       {/* Display cart with items */}
//       <Cart cartItems={cart} onRemove={removeFromCart} onPlaceOrder={placeOrder} />
//     </Container>
//   );
// };

// export default App;
