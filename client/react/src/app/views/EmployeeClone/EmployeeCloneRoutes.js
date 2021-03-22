import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
import { withTranslation } from "react-i18next";
const EmployeeClone = EgretLoadable({
    loader: () =>
        import ("./EmployeeCloneTable"),
});
const ViewComponent = withTranslation()(EmployeeClone);
const employeeCloneRoutes = [{
    path: ConstantList.ROOT_PATH + "dashboarhhd/employeeshi",
    exact: true,
    component: ViewComponent,
}, ];

export default employeeCloneRoutes;