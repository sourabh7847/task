import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  selectedLand: null
};

export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        deleteUser: (state) => {
            state.user = null;
        },
        setLand: (state, action) => {
            state.selectedLand = action.payload
        }
    },
});

export const { setUser, deleteUser, setLand } = userSlice.actions;

export default userSlice.reducer;
