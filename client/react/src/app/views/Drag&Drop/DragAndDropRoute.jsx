import {EgretLoadable} from "egret";
import ConstantList from "../../appConfig";
const AppDragAndDrop = EgretLoadable({
  loader: () => import("./AppDragAndDrop")
});

const dragAndDropRoute = [
  {
    path: ConstantList.ROOT_PATH+"others/drag-and-drop",
    component: AppDragAndDrop
  }
];

export default dragAndDropRoute;
