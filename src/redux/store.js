
import { configureStore } from "@reduxjs/toolkit";
import {rootReducer} from "./root-reducer"
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga"


const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)