// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeItem, updateQuantity } from './CartSlice';
// import './CartItem.css';

// const CartItem = ({ onContinueShopping }) => {
//   const cart = useSelector((state) => state.cart.items);
//   const dispatch = useDispatch();

//   // Calculate total amount for all products in the cart
//   const calculateTotalAmount = () => {
//     return cart.reduce(
//       (total, item) => total + Number(item.cost.substring(1)) * item.quantity,
//       0
//     );
//   };

//   const handleContinueShopping = (e) => {
//     onContinueShopping(e);
//   };

//   const handleIncrement = (item) => {
//     dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
//   };

//   const handleDecrement = (item) => {
//     // Ensure quantity doesn't go below 1
//     if (item.quantity > 1) {
//       dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
//     } else {
//       // Optionally handle the case when quantity is 1 (remove item)
//       handleRemove(item);
//     }
//   };

//   const handleRemove = (item) => {
//     dispatch(removeItem(item));
//   };

//   // Calculate total cost based on quantity for an item
//   const calculateTotalCost = (item) => {
//     return Number(item.cost.substring(1)) * item.quantity;
//   };

//   return (
//     <div className="cart-container">
//       <h2 style={{ color: 'black' }}>Total Plants: {cart.length}</h2>
//       <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
//       <div>
//         {cart.map((item) => (
//           <div className="cart-item" key={item.name}>
//             <img className="cart-item-image" src={item.image} alt={item.name} />
//             <div className="cart-item-details">
//               <div className="cart-item-name">{item.name}</div>
//               <div className="cart-item-cost">{item.cost}</div>
//               <div className="cart-item-quantity">
//                 <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
//                 <span className="cart-item-quantity-value">{item.quantity}</span>
//                 <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
//               </div>
//               <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
//               <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
//       <div className="continue_shopping_btn">
//         <button className="get-started-button" onClick={handleContinueShopping}>Continue Shopping</button>
//         <br />
//         <button className="get-started-button1">Checkout</button>
//       </div>
//     </div>
//   );
// };

// export default CartItem;


import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const CartItem = ({ onContinueShopping }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    return cart.reduce(
      (total, item) => total + Number(item.cost.substring(1)) * item.quantity,
      0
    );
  };

  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    // Ensure quantity doesn't go below 1
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      // Optionally handle the case when quantity is 1 (remove item)
      handleRemove(item);
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    return Number(item.cost.substring(1)) * item.quantity;
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Plants: {cart.length}</h2>
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map((item) => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={handleContinueShopping}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={() => setIsModalOpen(true)}>Checkout</button>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-semibold">
              Thank you for your consideration
            </DialogTitle>
          </DialogHeader>
          <div className="text-center py-4">
            This service will be available soon.
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CartItem;


