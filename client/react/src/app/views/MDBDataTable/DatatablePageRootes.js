import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
const DatatablePage = EgretLoadable({
  loader: () => import("./DatatablePage")
});

const datatablePageRootes = [
  {
    path:  ConstantList.ROOT_PATH+"dashboard/mdbdatatable",
    exact: true,
    component: DatatablePage
  }
];

export default datatablePageRootes;
