import { all, takeEvery, put, call, takeLatest } from "redux-saga/effects";
import { fetchUsersSucess, fetchUsersFailure, fetchUserByIdSucess, fetchUserByIdFailure } from "./slice";

import  axios  from "axios";
// API USERS: https://jsonplaceholder.typicode.com/users/

function* fetchUsers(){
    try{
    
        const response = yield call(axios.get, "https://jsonplaceholder.typicode.com/users/")
        yield put(fetchUsersSucess(response.data))

    }catch(error){
        yield put(fetchUsersFailure(error.message))
    }
}

function* fetchUserById(action){
    try{
        const userId = action.payload
        const response = yield call(axios.get, `https://jsonplaceholder.typicode.com/users/${userId}`)
        yield put(fetchUserByIdSucess(response.data))

    }catch(error){
        yield put(fetchUserByIdFailure(error.message))
    }
}

export default all(
    [
        takeLatest("user/fetchUsers", fetchUsers),
        takeLatest("user/fetchUserById", fetchUserById)

    ]
)
