// import React from 'react';
// import { Card, CardContent, Typography, Button, CardMedia } from '@mui/material';

// const CartItem = ({ item, onRemove }) => {
//   return (
//     <Card>
//       <CardMedia
//         component="img"
//         height="150"
//         image={item.imageUrl || 'https://via.placeholder.com/150'} // Cart item image
//         alt={item.title}
//       />
//       <CardContent>
//         <Typography variant="h6">{item.title}</Typography>
//         <Typography color="text.secondary">Price: ${item.price}</Typography>
//         <Button variant="contained" color="error" onClick={() => onRemove(item.id)}>
//           Remove
//         </Button>
//       </CardContent>
//     </Card>
//   );
// };

// const Cart = ({ cartItems, onRemove, onPlaceOrder }) => {
//   return (
//     <div>
//       <Typography variant="h4">Your Cart</Typography>
//       {cartItems.length > 0 ? (
//         <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
//           {cartItems.map((item) => (
//             <CartItem key={item.id} item={item} onRemove={onRemove} />
//           ))}
//         </div>
//       ) : (
//         <Typography>Your cart is empty.</Typography>
//       )}
//       {cartItems.length > 0 && (
//         <Button variant="contained" color="primary" onClick={onPlaceOrder}>
//           Place Order
//         </Button>
//       )}
//     </div>
//   );
// };

// export default Cart;
