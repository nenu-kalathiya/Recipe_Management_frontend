import React from 'react';
import { Card, CardContent, Typography, Button, CardMedia } from '@mui/material';

const FoodItem = ({ food, onAddToCart }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={food.imageUrl || 'https://via.placeholder.com/200'} // Default image
        alt={food.title}
      />
      <CardContent>
        <Typography variant="h5">{food.title}</Typography>
        <Typography color="text.secondary">Price: ${food.price}</Typography>
        <Button variant="contained" color="success" onClick={() => onAddToCart(food)}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

const FoodMenu = ({ foods, onAddToCart }) => {
  return (
    <div>
      <Typography variant="h4">Food Menu</Typography>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {foods.map((food) => (
          <FoodItem key={food.id} food={food} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;
