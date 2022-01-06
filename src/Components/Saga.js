import {put , call ,takeEvery} from 'redux-saga/effects'
import {GET_USER_FETCH, GET_USER_SUCESS} from './action'


function userfetch(){
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then( (responnse)=> console.log(responnse))
}

function* workGetUsersFetch(){
    const users = yield call(userfetch)
    yield put ({type : GET_USER_SUCESS , users})
}

function* myDagha(){
    // eslint-disable-next-line no-undef
    yield takeEvery(GET_USER_FETCH, workGetUsersFetch)
}

function* mySaga(){
    yield takeEvery(GET_USER_FETCH , workGetUsersFetch)
}
export default mySaga