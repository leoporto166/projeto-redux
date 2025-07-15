import { all, takeEvery, put, call } from "redux-saga/effects";
import { fetchUsersSucess, fetchUsersFailure } from "./slice";

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

export default all(
    [
        takeEvery("user/fetchUsers", fetchUsers)
    ]
)
