import { combineReducers } from "redux";
import userReducer from "../features/LoginForm/redux/authReducer";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
