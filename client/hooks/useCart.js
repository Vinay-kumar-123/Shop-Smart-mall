"use client";
import { useSelector, useDispatch } from "react-redux";
import {
    fetchCart,
    addToCart,
    removeFromCart,
    updateCartItemQty,
} from "@/redux/slices/cartSlice";

export const useCart = () => {
  const dispatch = useDispatch();
  const { cart, cartCount, loading: cartLoading, error } = useSelector((state) => state.cart);
  
  const getCart = () => dispatch(fetchCart());

  
  const addItem = (productId, size, quantity) =>
    dispatch(addToCart({ productId, size, quantity }));

  
  const removeItem = (cartItemId) => dispatch(removeFromCart(cartItemId));

  
  const updateQty = (cartItemId, quantity) =>
    dispatch(updateCartItemQty({ cartItemId, quantity }));

  return { cart, cartCount, cartLoading, error, getCart, addItem, removeItem, updateQty };
};