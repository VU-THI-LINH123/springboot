import { EgretLoadable } from "egret";
import { authRoles } from "../../auth/authRoles";
import ConstantList from "../../appConfig";
const Shop = EgretLoadable({
  loader: () => import("./Shop")
});

const Cart = EgretLoadable({
  loader: () => import("./Cart")
});

const Checkout = EgretLoadable({
  loader: () => import("./Checkout")
});

const ecommerceRoutes = [
  {
    path: ConstantList.ROOT_PATH+"ecommerce/shop",
    component: Shop,
    auth: authRoles.admin
  },
  {
    path:  ConstantList.ROOT_PATH+"ecommerce/cart",
    component: Cart,
    auth: authRoles.admin
  },
  {
    path:  ConstantList.ROOT_PATH+"ecommerce/checkout",
    component: Checkout,
    auth: authRoles.admin
  },
];

export default ecommerceRoutes;
