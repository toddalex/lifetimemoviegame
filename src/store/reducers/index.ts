import { combineReducers } from 'redux';
import validationReducer from './validation';

const rootReducer = combineReducers({
  validation: validationReducer
});

//export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;