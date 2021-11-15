import { delay, put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { increment, incrementSaga, incrementSagaSuccess } from "./counterSlice";

export function* log(action:PayloadAction){
    console.log("log: ", action);
}

export function* handleSaga(action:PayloadAction<number>){
    console.log("handle saga processing");
    yield delay(1000);
    console.log("success");
    yield put(incrementSagaSuccess(action.payload))
}
export default function* counterSaga(){
    console.log("counter saga");
    // yield takeLatest(incrementSaga.toString(),handleSaga)
    yield takeEvery("counter/incrementSaga",handleSaga)
}