import { combineReducers } from "redux";
import { reducer } from './reducer';
import { cartReducer } from './AddtocartReducer';

const rootReducers = combineReducers({
    reducer,
    cartReducer

})

export default rootReducers;

