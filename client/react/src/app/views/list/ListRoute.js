import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
const AppList = EgretLoadable({
  loader: () => import("./AppList")
});

const InfiniteList = EgretLoadable({
  loader: () => import("./InfiniteList")
});

const ListRoute = [
  {
    path:  ConstantList.ROOT_PATH+"egret-list",
    exact: true,
    component: AppList
  },
  {
    path:  ConstantList.ROOT_PATH+"infinite-scroll",
    exact: true,
    component: InfiniteList
  }
];

export default ListRoute;
