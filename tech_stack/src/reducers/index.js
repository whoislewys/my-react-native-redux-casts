/* this index file is the 'window' to the rest of the reducers*/
import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer'

// whatever the key is in this combineReducers object we export,
// will the name of the relative prop in our state object
export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});
