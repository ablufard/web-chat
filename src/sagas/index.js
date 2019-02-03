import { all, takeLatest, put, call, select, take, fork, cancel } from 'redux-saga/effects';


import { SEND_MESSAGE } from '../actions';

export default function* rootSaga() {
    yield all([sendMessage()]);
};

export function* sendMessage() {
    yield takeLatest(SEND_MESSAGE, sendMessageToServer);
}

function* sendMessageToServer() {
    yield alert('qwe123')
}