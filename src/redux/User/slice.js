import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
    user: null
}

export const userSlice = createSlice({
    name:"user",
    initialState: InitialState,
    reducers: {

    }
})

export default userSlice.reducer