import { takeLatest, put } from "redux-saga/effects";
import { delay } from "redux-saga/effects";
import { AGE_UP } from "../constants";
import { ageUpAsync } from "../actions";


/**
 * payload object comes from AGE_UP actions
 * @param {state, action} payload 
 */
function* getAgeUpAsync(payload) {
  yield delay(1000);
  yield put(ageUpAsync(payload.state));
}

export function* watchAge() {
  yield takeLatest(AGE_UP, getAgeUpAsync);
}
