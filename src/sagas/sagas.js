import { call, put, takeLatest } from "redux-saga/effects";

import { REQUEST_API_DATA, receiveApiData } from "../actions/actions";
import { fetchData } from '../api/api'

// worker Saga: will be fired on REQUEST_API_DATA actions
function* getApiData(action) {
  try {
    // do api call
    const data = yield call(fetchData);
    console.log('Get API data successfully !')

    yield put(receiveApiData(data));
    console.log('Receive API data successfully !');
  } catch (e) {
    console.log(e);
  }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "REQUEST_API_DATA" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}
