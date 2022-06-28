import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers";
import {persistReducer,persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig={
    key:'persist-store',
    storage
}

const persistedReducer=persistReducer(persistConfig,rootReducer)

const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const persistedStore=persistStore(store);
export default store;