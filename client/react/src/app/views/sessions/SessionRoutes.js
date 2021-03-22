import SignUp from "./SignUp";
import SignIn from "./SignIn";
import NotFound from "./NotFound";
import ForgotPassword from "./ForgotPassword";
import ConstantList from "../../appConfig";
const settings = {
  activeLayout: "layout1",
  layout1Settings: {
    topbar: {
      show: false
    },
    leftSidebar: {
      show: false,
      mode: "close"
    }
  },
  layout2Settings: {
    mode: "full",
    topbar: {
      show: false
    },
    navbar: { show: false }
  },
  secondarySidebar: { show: false },
  footer: { show: false }
};

const sessionRoutes = [
  {
    path: ConstantList.ROOT_PATH+"session/signup",
    component: SignUp,
    settings
  },
  {
    path: ConstantList.ROOT_PATH+"session/signin",
    component: SignIn,
    settings
  },
  {
    path: ConstantList.ROOT_PATH+"session/forgot-password",
    component: ForgotPassword,
    settings
  },
  {
    path: ConstantList.ROOT_PATH+"session/404",
    component: NotFound,
    settings
  }
];

export default sessionRoutes;
