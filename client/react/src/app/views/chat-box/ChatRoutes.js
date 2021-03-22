import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
const AppChat = EgretLoadable({
  loader: () => import("./AppChat")
});

const chatRoutes = [
  {
    path: ConstantList.ROOT_PATH+"chat",
    component: AppChat
  }
];

export default chatRoutes;
