
import * as types from './../constants/ActionTypes';
export const listAll=()=>{
	return {
        type:types.LIST_ALL
	}
};
export const addTask=(task)=>{
	return{
		type:types.ADD_TASK,
		task
	}
};
export const ToggleForm=()=>{
	return{
		type:types.TOGGLE_FORM,
		
	}
};
export const CloseForm=()=>{
	return{
		type:types.CLOSE_FORM,
		
	}
};
export const OpenForm=()=>{
	return{
		type:types.OPEN_FORM,
	}
};
export const UpdateState=(id)=>
{
	return{
		type:types.UPDATE_STATUS,
		id
	}
};
export const DeleteForm=(id)=>{
	return {
		type:types.DELETE_FORM,
		id
	}
};
export const EditTask=(task)=>{
	return{
        type:types.EDIT_TASK,
        task
	}
};
export const filterTask=(filter)=>{
	return{
		type:types.FILTER,
		filter
	}
};