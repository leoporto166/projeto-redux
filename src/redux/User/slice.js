import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
    user: null
}

export const userSlice = createSlice({
    name:"user",
    initialState: InitialState,
    reducers: {
        createUser: (state, action) => {

            return {
                ...state,
                 user: {
                    name: action.payload.name,
                    email: action.payload.email,
                    adress: action.payload.adress,
                    numero: action.payload.numero,
                }
            }
        }
    }
})


export const {createUser} = userSlice.actions
export default userSlice.reducer