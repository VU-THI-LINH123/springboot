import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import demo  from './demo';
// const demo = EgretLoadable({
//   loader: () => import("./demo")
// });
// const ViewComponent = withTranslation()(demo);

const demoRoutes = [
  {
    path:  ConstantList.ROOT_PATH+"dashboard/demo",
    exact: true,
    component: demo
  }
];

export default demoRoutes;
