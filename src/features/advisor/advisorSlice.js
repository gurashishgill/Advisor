import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import advisorService from "./advisorService";

const userinfo = JSON.parse(localStorage.getItem("userinfo"));

const initialState = {
  userinfo: userinfo ? userinfo : {},
  clients: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new client
export const createClient = createAsyncThunk(
  "create",
  async (clientdata, thunkAPI) => {
    try {
      return await advisorService.createClient(clientdata);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get user info
export const getUserInfo = createAsyncThunk(
  "GetUserInfo",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await advisorService.getUserDetails(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const Detailsfromlocal = createAsyncThunk("Get", async () => {
  await advisorService.detailsfromlocal();
});

export const getClientsofAdvisor = createAsyncThunk(
  "GetClients",
  async (advisorid, thunkAPI) => {
    try {
      return await advisorService.getClientsofAdvisor(advisorid);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Update advisor info
export const updateAdvisor = createAsyncThunk(
  "UpdateAdvisor",
  async (advisorId, newData, thunkAPI) => {
    try {
      return await advisorService.updateAdvisor(advisorId, newData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const advisorSlice = createSlice({
  name: "advisor",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createClient.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createClient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createClient.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getUserInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userinfo = action.payload;
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.userinfo = {};
      })
      .addCase(getClientsofAdvisor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getClientsofAdvisor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.clients = action.payload;
      })
      .addCase(getClientsofAdvisor.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.clients = [];
      })
      .addCase(updateAdvisor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAdvisor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userinfo = action.payload;
      })
      .addCase(updateAdvisor.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.userinfo = {};
      });
  },
});

export const { reset } = advisorSlice.actions;
export default advisorSlice.reducer;
