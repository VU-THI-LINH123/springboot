import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
const AppTodo = EgretLoadable({
  loader: () => import("./AppTodo")
});

const todoRoutes = [
  {
    path:  ConstantList.ROOT_PATH+"todo/list",
    component: AppTodo
  }
];

export default todoRoutes;
