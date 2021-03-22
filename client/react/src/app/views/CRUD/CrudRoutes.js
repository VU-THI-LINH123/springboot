import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
const CrudTable = EgretLoadable({
  loader: () => import("./CrudTable")
});

const crudRoute = [
  {
    path:  ConstantList.ROOT_PATH+"crud-table",
    exact: true,
    component: CrudTable
  }
];

export default crudRoute;
