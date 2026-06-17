import { createSlice } from "@reduxjs/toolkit";

import { getDestinations } from "../thunk/hotelsThunk.js";

const initialState = {
    destinations: []
}

const hotelsSlice = createSlice({
    name: 'hotels',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getDestinations.fulfilled, (state, action)=> {
            state.destinations = action.payload;
        })
    }
})

export default hotelsSlice.reducer;