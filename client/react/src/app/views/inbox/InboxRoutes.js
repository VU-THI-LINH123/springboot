import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
const Inbox = EgretLoadable({
  loader: () => import("./AppInbox")
});

const inboxRoute = [
  {
    path:  ConstantList.ROOT_PATH+"inbox",
    exact: true,
    component: Inbox
  }
];

export default inboxRoute;
