import { EgretLoadable } from "egret";
import { authRoles } from "../../auth/authRoles";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import ConstantList from "../../appConfig";
const React15TabulatorSample = EgretLoadable({
  loader: () => import("./React15TabulatorSample")
});
const AdazzleTable = EgretLoadable({
  loader: () => import("./AdazzleTable")
});

const ViewAdazzleTableComponent = withTranslation()(AdazzleTable);
const ViewReact15TabulatorSampleComponent = withTranslation()(React15TabulatorSample);

const testItemRoutes = [
  {
    path:  ConstantList.ROOT_PATH+"testItem/react15TabulatorSample",
    component: ViewReact15TabulatorSampleComponent,
    auth: authRoles.admin
  },
  {
    path:  ConstantList.ROOT_PATH+"testItem/AdazzleTable",
    component: AdazzleTable,
    auth: authRoles.admin
  }
];

export default testItemRoutes;
