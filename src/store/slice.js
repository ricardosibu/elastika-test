import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
    name: 'dataChat',
    initialState: {
        message: ''
    },

    reducers: {
        setDataChat: (state, action) => {
            state.message = action.payload;

            // return {
            //     ...state,
            // }
        }
    }
});

export const { setDataChat } = Slice.actions;

export default Slice.reducer;