import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist";

import contactsReducer from "./contacts/contactsSice";
import filtersReducer from "./filters/filterSlise";
import { authReducer } from "./auth/slice";

// const persistConfig = {
//   key: "root",
//   storage,
// };

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
  auth: authReducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
});

// export const persistor = persistStore(store);
