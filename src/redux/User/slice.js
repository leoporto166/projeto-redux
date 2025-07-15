import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
    user: null,
    users: [],
    loading: false,
    userId: null
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

        },

        delAddress: (state) => {
                
                return{
                    ...state,
                    user:{
                        ...state.user,
                        address:null,
                    }
                }
        },

        fetchUsers: (state) => {
            console.log("CHAMOU")
            state.loading = true
        },
        
        fetchUsersSucess: (state, action) => {
            console.log("CAIU NA SUCESS")
            state.users = action.payload
            console.log(action.payload)
            state.loading = false
        },

        fetchUsersFailure: (state, action) => {
            console.log("Caiu na Failure")
            console.log(action.payload)
            state.loading = false
        },

        fetchUserById:(state) => {
            console.log("Chamou")
        },

        fetchUserByIdSucess: (state, action) => {
            console.log("Sucess")
            console.log(action.payload)
            state.userId = action.payload
        },

        fetchUserByIdFailure: (state, action) => {
            console.log("Failure")
            console.log(action.payload)
        },

        }

       


    
})


export const {createUser, logoutUser, userAdress, delAddress, fetchUsers, fetchUsersSucess, fetchUsersFailure, fetchUserById, fetchUserByIdSucess, fetchUserByIdFailure} = userSlice.actions
export default userSlice.reducer