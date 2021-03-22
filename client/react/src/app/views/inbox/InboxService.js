import axios from "axios";
import ConstantList from "../../appConfig";
export const getAllMessage = () => {
  return axios.get(ConstantList.ROOT_PATH+"api/inbox/all");
};
export const getMessageById = id => {
  return axios.get(ConstantList.ROOT_PATH+"api/inbox", { data: id });
};
export const deleteMessage = message => {
  return axios.post(ConstantList.ROOT_PATH+"api/inbox/delete", message);
};
export const addNewMessage = message => {
  return axios.post(ConstantList.ROOT_PATH+"api/inbox/add", message);
};
export const updateMessage = message => {
  return axios.post(ConstantList.ROOT_PATH+"api/inbox/update", message);
};
