import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
const InvoiceList = EgretLoadable({
  loader: () => import("./InvoiceList")
});

const InvoiceDetails = EgretLoadable({
  loader: () => import("./InvoiceDetails")
});

const invoiceRoutes = [
  {
    path:  ConstantList.ROOT_PATH+"invoice/list",
    exact: true,
    component: InvoiceList
  },
  {
      path:  ConstantList.ROOT_PATH+"invoice/add",
      exact: true,
      component: InvoiceDetails
  },
  {
    path:  ConstantList.ROOT_PATH+"invoice/:id",
    component: InvoiceDetails
  },
  {
    path:  ConstantList.ROOT_PATH+"invoice/edit/:id",
    component: InvoiceList
  }
];

export default invoiceRoutes;
