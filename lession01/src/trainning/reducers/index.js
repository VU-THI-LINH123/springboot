import {combineReducers} from 'redux';
import tasks from './tasks';
import isDisplayform from './isDisplayform';
import itemEditing from './itemEditing';
import filterTable from './filterTable';
const myReducer =combineReducers({
   tasks,
   isDisplayform,
   itemEditing,
   filterTable
});
console.log(isDisplayform);
export default myReducer;