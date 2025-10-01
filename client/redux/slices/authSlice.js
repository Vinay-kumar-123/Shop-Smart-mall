// store/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/utils/api";


export const fetchUser = createAsyncThunk(
  "auth/fetchUser",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return rejectWithValue("No token found");
      const res = await api.get("/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data.user;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Failed to fetch user");
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await api.post("/api/auth/user/login", { email, password });
      localStorage.setItem("token", res.data.accessToken);
      return res.data.isUser;
    } catch (err) {
      return rejectWithValue(err.response.data.message || "Login failed");
    }
  }
);

export const signupUser = createAsyncThunk(
    "auth/signupUser",
    async(data, {rejectWithValue}) => {
        try {
            const res = await api.post("/api/auth/user/register", data);
            return  res.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || { message: error.message });
        }
    }
)


export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await api.post("/api/auth/user/logout");
      localStorage.removeItem("token");
      return null;
    } catch (err) {
      return rejectWithValue(err.response.data.message || "Logout failed");
    }
  }
);
export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/api/auth/user/refresh");
      localStorage.setItem("token", res.data.accessToken);
      return { token: res.data.accessToken };
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: err.message });
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => { state.loading = true; })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.user = null;
        state.loading = false;
      })
      .addCase(loginUser.pending, (state) => { state.loading = true; })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user = null;
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Signup failed";
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.token = action.payload.token;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export default authSlice.reducer;
