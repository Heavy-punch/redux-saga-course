import counterSaga from 'features/counter/counterSaga';
import {all} from 'redux-saga/effects';

 function* helloSaga(){
    console.log("hello Saga");
}
export default function* rootSaga(){
    console.log("root Saga");
    yield all([helloSaga(), counterSaga()])
}