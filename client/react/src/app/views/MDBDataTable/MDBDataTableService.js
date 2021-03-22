import axios from "axios";
import ConstantList from "../../appConfig";
export const getAllItems = () => {
  //return axios.get("/api/user/all");
  //alert( axios.defaults.headers.common["Authorization"]);
  return axios.get(ConstantList.API_ENPOINT+"/api/administrativeunit/1/10");  
};
export const getUserById = id => {
  return axios.get("/api/user", { data: id });
};
export const deleteItem = id => {
  return axios.delete(ConstantList.API_ENPOINT+"/api/administrativeunit/"+id);
};
export const addNewItem = item => {
  return axios.post(ConstantList.API_ENPOINT+"/api/administrativeunit", item);
};
export const updateItem = item => {

  return axios.post(ConstantList.API_ENPOINT+"/api/administrativeunit", item);
};
