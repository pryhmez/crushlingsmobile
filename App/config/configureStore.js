import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import getRootReducer from "../reducers";

export default function getStore() {
    const store = createStore(
        getRootReducer(),
        undefined,
        applyMiddleware(thunk)
    );

    return store;
}