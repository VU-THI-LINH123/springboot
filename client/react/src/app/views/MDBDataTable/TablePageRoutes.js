import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
const TablePage = EgretLoadable({
  loader: () => import("./TablePage")
});

const tablePageRoutes = [
  {
    path:  ConstantList.ROOT_PATH+"dashboard/tablepage",
    exact: true,
    component: TablePage
  }
];

export default tablePageRoutes;
