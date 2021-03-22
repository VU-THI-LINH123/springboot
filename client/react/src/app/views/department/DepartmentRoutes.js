import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
import { withTranslation } from "react-i18next";
const department = EgretLoadable({
    loader: () =>
        import ("./DepartmentTable"),
});
const ViewComponent = withTranslation()(department);
const departmentRoutes = [{
    path: ConstantList.ROOT_PATH + "test/departmentRoutes",
    exact: true,
    component: ViewComponent,
}, ];

export default departmentRoutes;