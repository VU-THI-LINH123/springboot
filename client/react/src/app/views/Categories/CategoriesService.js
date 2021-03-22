import axios from "axios";
import ConstantList from "../../appConfig";
const API_PATH = ConstantList.API_ENPOINT + "/api/category";

export const searchByPage = (searchObject) => {
  var url = API_PATH + "/searchByPage";
  return axios.post(url, searchObject);
};
export const getByPage = (page, pageSize) => {
  var API_PATH = ConstantList.API_ENPOINT + "/api/category";
  var pageIndex = page + 1;
  var params = pageIndex + "/" + pageSize;
  var url = API_PATH + params;
  return axios.get(url);
};

export const getItemById = id => {
  var API_PATH = ConstantList.API_ENPOINT + "/api/category";
  var url = API_PATH + "/" + id;
  return axios.get(url);
};
export const deleteItem = id => {
  var API_PATH = ConstantList.API_ENPOINT + "/api/category";
  var url = API_PATH + "/" + id;
  return axios.delete(url);
};


// export const checkCode = code => {
//   var API_PATH = ConstantList.API_ENPOINT + "/api/category";
//   const config = { params: { code: code } };
//   var url = API_PATH + "/check/codeWasUsed";
//   return axios.get(url, config);
// };

export const nameWasUsed = category => {
  return axios.post(API_PATH + "/check/nameWasUsed", category);
};

export const codeWasUsed = category => {
  return axios.post(API_PATH + "/check/codeWasUsed", category);
};


export const checkCategoryWasUsed = uid => {
  return axios.post(API_PATH + "/check/categoryWasUsed", uid);
};

export const addNewData = category => {
  return axios.post(ConstantList.API_ENPOINT + "/api/category", category);
};

export const deleteCheckItem = id => {
  return axios.delete(API_PATH +"/deletecheckMultiple/"+id);
};

export const updateData = category => {
  return axios.put(ConstantList.API_ENPOINT + "/api/category/" + category.id, category);
};