import { combineReducers } from "redux";
import { PersistConfig } from "redux-persist/es/types";
import storage from "redux-persist/lib/storage";
import authReducer from "./slices/auth";
import budgetReducer from "./slices/budget";

const rootPersistConfig: PersistConfig<any> = {
  key: "root",
  storage,
  keyPrefix: "budget-",
};

const rootReducer = combineReducers({
  auth: authReducer,
  budget: budgetReducer,
});

export { rootPersistConfig, rootReducer };
