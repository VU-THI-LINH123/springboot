import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
const AppScrumBoard = EgretLoadable({
  loader: () => import("./AppScrumBoard")
});

const Board = EgretLoadable({
  loader: () => import("./Board")
});

const scrumBoardRoutes = [
  {
    path:  ConstantList.ROOT_PATH+"scrum-board/:id",
    component: Board
  },
  {
    path:  ConstantList.ROOT_PATH+"scrum-board",
    component: AppScrumBoard
  }
];

export default scrumBoardRoutes;
