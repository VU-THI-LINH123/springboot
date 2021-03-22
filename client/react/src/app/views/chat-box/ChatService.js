import axios from "axios";
import ConstantList from "../../appConfig";
export const getContactById = id => {
  return axios.get(ConstantList.ROOT_PATH+"api/chat/contacts", { data: id });
};
export const getRecentContact = id => {
  return axios.get(ConstantList.ROOT_PATH+"api/chat/contacts/recent", { data: id });
};
export const getAllContact = currentUserId => {
  return axios.get(ConstantList.ROOT_PATH+"api/chat/contacts/all", { data: currentUserId });
};
export const getChatRoomByContactId = (currentUser, contactId) => {
  return axios.get(ConstantList.ROOT_PATH+"api/chat/chat-room", { data: { currentUser, contactId } });
};
export const deleteMessage = message => {
  return axios.post(ConstantList.ROOT_PATH+"api/chat/delete", message);
};
export const sendNewMessage = message => {
  return axios.post(ConstantList.ROOT_PATH+"api/chat/add", message);
};
export const updateMessage = message => {
  return axios.post(ConstantList.ROOT_PATH+"api/chat/update", message);
};
