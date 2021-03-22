import React from "react";
import { Redirect } from "react-router-dom";

import dashboardRoutes from "./views/dashboard/DashboardRoutes";


import utilitiesRoutes from "./views/utilities/UtilitiesRoutes";
import sessionRoutes from "./views/sessions/SessionRoutes";

import materialRoutes from "./views/material-kit/MaterialRoutes";
import chartsRoute from "./views/charts/ChartsRoute";
import dragAndDropRoute from "./views/Drag&Drop/DragAndDropRoute";
import invoiceRoutes from "./views/invoice/InvoioceRoutes";
import calendarRoutes from "./views/calendar/CalendarRoutes";
import crudRoute from "./views/CRUD/CrudRoutes";
import employeeRoutes from "./views/Employee/EmployeeRoutes";
import employeeCloneRoutes from "./views/EmployeeClone/EmployeeCloneRoutes";
import employeeLv2Routes from "./views/EmployeeLv2/EmployeeLv2Routes";
import employee1Routes from "./views/Employee1/Employee1Routes";
import inboxRoute from "./views/inbox/InboxRoutes";
import formsRoutes from "./views/forms/FormsRoutes";
import mapRoutes from "./views/map/MapRoutes";
import chatRoutes from "./views/chat-box/ChatRoutes";
import todoRoutes from "./views/todo/TodoRoutes";
import pageLayoutRoutes from "./views/page-layouts/PageLayoutRoutees";
import ListRoute from "./views/list/ListRoute";

import administrativeUnitRoutes from "./views/AdministrativeUnit/AdministrativeUnitRoutes";
import testItemRoutes from "./views/AdministrativeUnit/TestItemRoutes";
import demoRoutes from "./views/demo/demoRoutes";
import datatablePageRootes from "./views/MDBDataTable/DatatablePageRootes";
import tablePageRoutes from "./views/MDBDataTable/TablePageRoutes";
import departmentRoutes from "./views/department/DepartmentRoutes";
import homeRoutes from "./views/home/HomeRoutes";
import categoriesRoutes from "./views/Categories/CategoriesRoutes"
import otherRoutes from "./views/others/OtherRoutes";
import scrumBoardRoutes from "./views/scrum-board/ScrumBoardRoutes";
import ecommerceRoutes from "./views/ecommerce/EcommerceRoutes";
import ConstantList from "./appConfig";

const redirectRoute = [
  {
    path: ConstantList.ROOT_PATH,
    exact: true,
    component: () => <Redirect to={ConstantList.HOME_PAGE} />//Luôn trỏ về HomePage được khai báo trong appConfig
  }
];

const errorRoute = [
  {
    component: () => <Redirect to={ConstantList.ROOT_PATH+"session/404"} />
  }
];

const routes = [
  ...homeRoutes,
  ...calendarRoutes,
  ...sessionRoutes,
  ...dashboardRoutes,
  ...testItemRoutes,
  ... employeeCloneRoutes,
  ...employeeRoutes,
  ...departmentRoutes,
  ...administrativeUnitRoutes,
  ...demoRoutes,
  ...datatablePageRootes,
  ...tablePageRoutes,
  ...materialRoutes,
  ...utilitiesRoutes,
  ...employee1Routes,
  ...chartsRoute,
  ...dragAndDropRoute,
  ...categoriesRoutes,
  ...invoiceRoutes,
  ...crudRoute,
  ...employeeLv2Routes,
  ...inboxRoute,
  ...formsRoutes,
  ...mapRoutes,
  ...chatRoutes,
  ...todoRoutes,
  ...scrumBoardRoutes,
  ...ecommerceRoutes,
  ...pageLayoutRoutes,
  ...otherRoutes,
  ...ListRoute,
  ...redirectRoute,
  ...errorRoute
];

export default routes;
