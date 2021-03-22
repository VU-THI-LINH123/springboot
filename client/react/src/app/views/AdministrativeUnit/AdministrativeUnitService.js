import axios from "axios";
import ConstantList from "../../appConfig";
export const getAllAdministrativeUnits = () => {
  //return axios.get("/api/user/all");
  //alert( axios.defaults.headers.common["Authorization"]);
  return axios.get(ConstantList.API_ENPOINT+"/api/administrativeunit/simple/1/10");  
  //return axios.get(ConstantList.API_ENPOINT+"/public/animal/1/10");  
};

export const getByPage = (page, pageSize) => {
  //alert(pageIndex+"/"+pageSize);
  var pageIndex = page+1;
  var params = pageIndex+"/"+pageSize;
  var url = ConstantList.API_ENPOINT+"/api/administrativeunit/simple/"+params;
  return axios.get(url);  
};

export const getUserById = id => {
  return axios.get("/api/user", { data: id });
};
export const deleteAdministrativeUnit = id => {
  return axios.delete(ConstantList.API_ENPOINT+"/api/administrativeunit/"+id);
};
export const addNewAdministrativeUnit = adminUnit => {
  return axios.post(ConstantList.API_ENPOINT+"/api/administrativeunit", adminUnit);
};
export const updateAdministrativeUnit = adminUnit => {

  return axios.post(ConstantList.API_ENPOINT+"/api/administrativeunit", adminUnit);
};
