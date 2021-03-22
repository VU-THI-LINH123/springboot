import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
const AdministrativeUnitTable = EgretLoadable({
  //loader: () => import("./BsTableExample")
  loader: () => import("./AdministrativeUnitTable")
  //loader: () => import("./AdazzleTable")
  //loader: () => import("./React15TabulatorSample")
});
const ViewComponent = withTranslation()(AdministrativeUnitTable);

const administrativeUnitRoutes = [
  {
    path:  ConstantList.ROOT_PATH+"dashboard/AdministrativeUnits",
    exact: true,
    component: ViewComponent
  }
];

export default administrativeUnitRoutes;
