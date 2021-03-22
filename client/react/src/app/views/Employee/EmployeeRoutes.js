import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
const EmployeeTable = EgretLoadable({
    loader: () =>
        import ("./EmployeeTable")
});

const employeeRoutes = [{
    path: ConstantList.ROOT_PATH + "dashboarhhd/employees",
    exact: true,
    component: EmployeeTable
}];

export default employeeRoutes;