import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
import { withTranslation } from "react-i18next";
const Categories = EgretLoadable({
    loader: () =>
        import ("./Categories"),
});
const ViewComponent = withTranslation()(Categories);
const categoriesRoutes = [{
    path: ConstantList.ROOT_PATH + "aa/categories",
    exact: true,
    component: ViewComponent,
}, ];

export default categoriesRoutes;