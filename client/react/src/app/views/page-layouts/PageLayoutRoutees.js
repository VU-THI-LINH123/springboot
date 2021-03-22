import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
const LeftSidebarLayout = EgretLoadable({
  loader: () => import("./LeftSidebarCard")
});

const UserProfile = EgretLoadable({
  loader: () => import("./UserProfile")
});

const pageLayoutRoutes = [
  {
    path:  ConstantList.ROOT_PATH+"page-layouts/Left-sidebar-card",
    component: LeftSidebarLayout
  },
  {
    path:  ConstantList.ROOT_PATH+"page-layouts/user-profile",
    component: UserProfile
  }
];

export default pageLayoutRoutes;
