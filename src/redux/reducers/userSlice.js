import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("api/users", async () => {
  const users = await axios.get("/users");
  return users.data;
});

export const userAdd = createAsyncThunk("api/user/add", async (payload) => {
  const users = await axios.post("/users", payload);
  return users.data;
});

export const userEdit = createAsyncThunk("api/getUser", async (id) => {
  const users = await axios.get(`/users/${id}`);
  return users.data;
});

export const userUpdate = createAsyncThunk(
  "api/user/update",
  async (payload) => {
    const users = await axios.put(`/users/${payload.editId}`, payload);
    return users.data;
  }
);

export const userDelete = createAsyncThunk(
  "api/user/delete",
  async (editId) => {
    const users = await axios.delete(`/users/${editId}`);
    return users.data;
  }
);

const initialState = {
  userRecordAdded: false,
  userRecordUpdated: false,
  userRecordDeleted: false,
  editUserData: {},
  getUserData: [],
  error: false,
  errorMessage: null,
  pending: false,
  refresh: false,
};

const userSliice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.addData.id = 1;
    },
  },
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.pending = true;
    },
    [getUsers.rejected]: (state) => {
      state.error = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
      state.getUserData = action.payload;
    },
    [userAdd.pending]: (state) => {
      state.pending = true;
    },
    [userAdd.rejected]: (state, action) => {
      state.error = true;
      state.errorMessage = action.payload;
    },
    [userAdd.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
      state.userRecordAdded = true;
    },
    [userEdit.pending]: (state) => {
      state.pending = true;
    },
    [userEdit.rejected]: (state, action) => {
      state.error = true;
      state.errorMessage = action.payload;
    },
    [userEdit.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
      state.editUserData = action.payload;
    },
    [userUpdate.pending]: (state) => {
      state.pending = true;
    },
    [userUpdate.rejected]: (state, action) => {
      state.error = true;
      state.errorMessage = action.payload;
    },
    [userUpdate.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
      state.userRecordUpdated = true;
    },
    [userDelete.pending]: (state) => {
      state.pending = true;
    },
    [userDelete.rejected]: (state, action) => {
      state.error = true;
      state.errorMessage = action.payload;
    },
    [userDelete.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
      state.userRecordDeleted = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser } = userSliice.actions;

export default userSliice.reducer;
