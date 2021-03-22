import axios from "axios";
import ConstantList from "../../appConfig";
const API_PATH = ConstantList.API_ENPOINT + "/api/employee";

export const searchByPage = (searchObject) => {
    var url = "http://localhost:8092/sample/api/employes2/searchByPage";
    return axios.post(url, searchObject);
};
// export const getByPage = (page, pageSize) => {
//   var API_PATH = ConstantList.API_ENPOINT + "/api/employee";
//   var pageIndex = page + 1;
//   var params = pageIndex + "/" + pageSize;
//   var url = API_PATH + params;
//   return axios.get(url);
// };
export const getAllDepartmentTest = () => {
    var API_PATH = "http://localhost:8092/sample/api/department1/getAll";
    return axios.get(API_PATH);
};

export const getItemById = id => {
    var API_PATH = ConstantList.API_ENPOINT + "/api/employee";
    var url = API_PATH + "/" + id;
    return axios.get(url);
};
export const deleteItem = id => {
    var API_PATH = ConstantList.API_ENPOINT + "/api/employee";
    var url = API_PATH + "/" + id;
    return axios.delete(url);
};

// export const checkCategoryWasUsed = uid => {
//   return axios.post(API_PATH + "/check/categoryWasUsed", uid);
// };

export const addNewEmploeyee = employee => {
    return axios.post("http://localhost:8092/sample/api/employes2/save", employee);
};

export const deleteCheckItem = id => {
    return axios.delete(API_PATH + "/deleteMultiple/" + id);
};

export const updateEmployee = employee => {
    return axios.put(ConstantList.API_ENPOINT + "/api/employee/" + employee.id, employee);
};