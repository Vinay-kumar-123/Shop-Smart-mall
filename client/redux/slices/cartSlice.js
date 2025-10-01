// store/slices/cartSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/utils/api";

// ✅ Fetch Cart
export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/api/auth/cart/carts");
      return res.data.cart;
    } catch (err) {
      return rejectWithValue(null);
    }
  }
);

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ productId, size, quantity }, { rejectWithValue }) => {
    try {
      const res = await api.post("/api/auth/cart/add", {
        productId,
        size,
        quantity,
      });
      return res.data.cart;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (cartItemId, { rejectWithValue }) => {
    try {
      const res = await api.delete(`/api/auth/cart/remove/${cartItemId}`);
      return res.data.cart;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

// ✅ Update cart item quantity
export const updateCartItemQty = createAsyncThunk(
  "cart/updateCartItemQty",
  async ({ cartItemId, quantity }, { rejectWithValue }) => {
    try {
      const res = await api.patch(`/api/auth/cart/update/${cartItemId}`, {
        quantity,
      });
      return res.data.cart;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: null,
    cartCount: 0,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.cartCount = action.payload?.totalItem || 0;
        state.loading = false;
      })
      .addCase(fetchCart.rejected, (state) => {
        state.cart = null;
        state.cartCount = 0;
        state.loading = false;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.cartCount = action.payload?.totalItem || 0;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.cartCount = action.payload?.totalItem || 0;
      })
      .addCase(updateCartItemQty.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.cartCount = action.payload?.totalItem || 0;
      });
  },
});

export default cartSlice.reducer;
