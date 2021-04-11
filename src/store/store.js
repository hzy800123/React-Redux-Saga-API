import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "../reducers";
import mySaga from "../sagas/sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
export default createStore(
    reducer, 
    compose(
        applyMiddleware(sagaMiddleware),        
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

// then run the saga
sagaMiddleware.run(mySaga);
