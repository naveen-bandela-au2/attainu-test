import { combineReducers } from 'redux';
import fetchcities from './leadsgen';
import selectedReducer from './selectedreducer';



export default combineReducers({
    fetchcities,
    selectedReducer
});