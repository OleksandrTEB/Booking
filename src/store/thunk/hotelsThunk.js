import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = import.meta.env.VITE_API_URL

export const getDestinations = createAsyncThunk(
    "hotels/getDestinations",
    async (_, thunkAPI) => {
        try {
            const response = await fetch(`${API_URL}/destinations`)

            if(!response.ok) {
                return thunkAPI.rejectWithValue("Error!")
            }

            return await response.json();
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)