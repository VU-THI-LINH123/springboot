import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
import { withTranslation } from "react-i18next";
const Employee1 = EgretLoadable({
    loader: () =>
        import ("./Employee1Table"),
});
const ViewComponent = withTranslation()(Employee1);
const employee1Routes = [{
    path: ConstantList.ROOT_PATH + "test/employee1",
    exact: true,
    component: ViewComponent,
}, ];

export default employee1Routes;