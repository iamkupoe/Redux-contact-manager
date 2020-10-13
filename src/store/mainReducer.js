import contactsReducer from './contactsReducer';
import {firebaseReducer} from 'react-redux-firebase';
import {combineReducers} from 'redux';

export default combineReducers({
    contactsState: contactsReducer,
    firebase: firebaseReducer,
}) 