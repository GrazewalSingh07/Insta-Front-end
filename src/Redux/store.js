import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as loginReducer } from "./SignIn/reducer"
import {reducer as SignupReducer } from "./Signup/reducer"
import {reducer as MyPostReducer} from "./Post/reducer"
import {reducer as SearchReducer} from "./search/reducer"
import { reducer as ConnectionReducer } from "./Connections/reducer";
const rootReducer=combineReducers({
    loginReducer,
    SignupReducer,
    MyPostReducer,
    SearchReducer,
    ConnectionReducer
})
export const store= legacy_createStore(rootReducer,applyMiddleware(thunk))