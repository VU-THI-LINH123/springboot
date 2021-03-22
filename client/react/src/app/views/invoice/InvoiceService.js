import axios from 'axios';
import ConstantList from "../../appConfig";
export const getAllInvoice = () => {
    return axios.get(ConstantList.ROOT_PATH+"api/invoices/all")
}
export const getInvoiceById = (id) => {
    return axios.get(ConstantList.ROOT_PATH+"api/invoices", { data: id })
}
export const deleteInvoice = (invoice) => {
    return axios.post(ConstantList.ROOT_PATH+"api/invoices/delete", invoice)
}
export const addInvoice = (invoice) => {
    return axios.post(ConstantList.ROOT_PATH+"api/invoices/add", invoice)
}
export const updateInvoice = (invoice) => {
    return axios.post(ConstantList.ROOT_PATH+"api/invoices/update", invoice)
}