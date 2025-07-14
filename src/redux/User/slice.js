import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
    user: null
}

export const userSlice = createSlice({
    name:"user",
    initialState: InitialState,
    reducers: {
        createUser: (state, action) => {

            if(action.payload.name.length < 4){
                alert("Preencha o campo nome com mais de 4 caracteres")
                return{
                    ...state
                    
                }
            }

            return {
                ...state,
                 user: {
                    name: action.payload.name,
                    email: action.payload.email,
                    address: null
                }
            }
        },

        logoutUser: (state) => {


            return {
                ...state,
                user: null
            }
        },

        userAdress: (state, action) => {

            if(state.user === null){
                alert("Faça o Login para cadastrar o endereço")

                return{...state}
            }

            if(action.payload.location === "" || action.payload.number === ""){
                alert("Preencha os campos")
                return{...state}
            }

            return {
                ...state,
                user: {
                    ...state.user,
                    address: {
                        location: action.payload.location,
                        number: action.payload.number
                    }
                }

            }

        }   


    },

    delAddress: (state, action) => {
        
        return{
            user:{
                ...state.user,
                address:null
            }
        }
    }
})


export const {createUser, logoutUser, userAdress, delAddress} = userSlice.actions
export default userSlice.reducer