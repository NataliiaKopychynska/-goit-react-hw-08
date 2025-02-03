import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist";

import contactsReducer from "./contactsSice";
import filtersReducer from "./filterSlise";

// const persistConfig = {
//   key: "root",
//   storage,
// };

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
});

// export const persistor = persistStore(store);
