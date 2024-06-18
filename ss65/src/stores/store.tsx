import { combineReducers, createStore } from "redux";
import reducerProfile from "./reducers/profileReducer";
import reducerProduct from "./reducers/productReducer";
import reducerCount from "./reducers/countReducer";

const rootReducer = combineReducers({
  users: reducerProfile,
  products: reducerProduct,
  reducerCount
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
