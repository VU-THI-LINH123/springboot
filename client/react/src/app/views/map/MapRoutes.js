import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
const AppMap = EgretLoadable({
  loader: () => import("./AppMap")
});

const mapRoutes = [
  {
    path:  ConstantList.ROOT_PATH+"map",
    component: AppMap
  }
];

export default mapRoutes;
