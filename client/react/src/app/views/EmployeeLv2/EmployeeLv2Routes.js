import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
import { withTranslation } from "react-i18next";
const EmployeeLv2 = EgretLoadable({
    loader: () =>
        import ("./EmployeeLv2Table"),
});
const ViewComponent = withTranslation()(EmployeeLv2);
const employeeLv2Routes = [{
    path: ConstantList.ROOT_PATH + "test/employee",
    exact: true,
    component: ViewComponent,
}, ];

export default employeeLv2Routes;