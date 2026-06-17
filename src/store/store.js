import { configureStore } from "@reduxjs/toolkit";

import hotelsSlice from "./slices/hotelsSlice.js";

export const store = configureStore({
    reducer: {
        hotels: hotelsSlice
    }
})