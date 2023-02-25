import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import advisorService from "./advisorService";

const userinfo = JSON.parse(localStorage.getItem("userinfo"));

const initialState = {
  userinfo: userinfo ? userinfo : {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new goal
// export const createGoal = createAsyncThunk(
//   "goals/create",
//   async (goalData, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token;
//       return await goalService.createGoal(goalData, token);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// Get user goals
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

// Delete user goal
// export const deleteGoal = createAsyncThunk(
//   "goals/delete",
//   async (id, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token;
//       return await goalService.deleteGoal(id, token);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

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
      // .addCase(createGoal.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(createGoal.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.isSuccess = true;
      //   state.goals.push(action.payload);
      // })
      // .addCase(createGoal.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.isError = true;
      //   state.message = action.payload;
      // })
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
      });
    // .addCase(deleteGoal.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(deleteGoal.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.isSuccess = true;
    //   state.goals = state.goals.filter(
    //     (goal) => goal._id !== action.payload.id
    //   );
    // })
    // .addCase(deleteGoal.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.isError = true;
    //   state.message = action.payload;
    // });
  },
});

export const { reset } = advisorSlice.actions;
export default advisorSlice.reducer;
