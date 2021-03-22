import ConstantList from "./appConfig";
export const navigations = [{
        name: "dashboard.Dashboard",
        // path:  ConstantList.ROOT_PATH+"dashboard/learning-management",
        icon: "dashboard",

        children: [{
                name: "dashboard.LearningManagement",
                path: ConstantList.ROOT_PATH + "dashboard/learning-management",
                iconText: "O"
            },
            {
                name: "dashboard.Analytics",
                path: ConstantList.ROOT_PATH + "test/employee",
                iconText: "A"
            },
            {
                name: "dashboard.Sales",
                path: ConstantList.ROOT_PATH + "dashboard/sales",
                iconText: "S"
            },
            {
                name: "department",
                path: ConstantList.ROOT_PATH + "test/departmentRoutes",
                iconText: "S"
            },
            {
                name: "employee1",
                path: ConstantList.ROOT_PATH + "test/employee1",
                iconText: "S"
            },
            {
                name: "Employee",
                path: ConstantList.ROOT_PATH + "dashboarhhd/employeeshi",
                iconText: "S"
            },
            {
                name: "AdazzleTable",
                path: ConstantList.ROOT_PATH + "testItem/AdazzleTable",
                iconText: "S"
            },
            {
                name: "React15TabulatorSample",
                path: ConstantList.ROOT_PATH + "testItem/React15TabulatorSample",
                iconText: "S"
            },
            {
                name: "dashboard.AdministrativeUnit",
                path: ConstantList.ROOT_PATH + "dashboard/AdministrativeUnits",
                iconText: "S"
            },
            {
                name: "demo",
                path: ConstantList.ROOT_PATH + "dashboard/demo",
                iconText: "S"
            },
            {
                name: "Mdb Datatable",
                path: ConstantList.ROOT_PATH + "dashboard/mdbdatatable",
                iconText: "S"
            },
            {
                name: "Table Page",
                path: ConstantList.ROOT_PATH + "dashboard/tablepage",
                iconText: "S"
            }
        ]
    },
    {
        name: "CRUD Table",
        icon: "format_list_bulleted",
        path: ConstantList.ROOT_PATH + "crud-table",
        badge: { value: "68", color: "primary" }
    },
    {
        name: "Ecommerce",
        icon: "shopping_basket",
        children: [{
                name: "Shop",
                path: ConstantList.ROOT_PATH + "ecommerce/shop",
                iconText: "S"
            },
            {
                name: "Cart",
                path: ConstantList.ROOT_PATH + "ecommerce/cart",
                iconText: "C"
            },
            {
                name: "Checkout",
                path: ConstantList.ROOT_PATH + "ecommerce/checkout",
                iconText: "CO"
            },
        ]
    },
    {
        name: "Egret List",
        icon: "list",
        children: [{
                name: "Infinite Scroll",
                path: ConstantList.ROOT_PATH + "infinite-scroll",
                iconText: "I"
            },
            {
                name: "List",
                path: ConstantList.ROOT_PATH + "egret-list",
                iconText: "L"
            }
        ]
    },
    {
        name: "Invoice",
        icon: "receipt",
        path: ConstantList.ROOT_PATH + "invoice/list"
    },
    {
        name: "Scrum Board",
        icon: "group_work",
        path: ConstantList.ROOT_PATH + "scrum-board"
    },
    {
        name: "Calendar",
        icon: "date_range",
        path: ConstantList.ROOT_PATH + "calendar",
        badge: { value: "5", color: "secondary" }
    },
    {
        name: "Chat",
        icon: "chat",
        path: ConstantList.ROOT_PATH + "chat",
        badge: { value: "3", color: "primary" }
    },
    {
        name: "Inbox",
        icon: "inbox",
        path: ConstantList.ROOT_PATH + "inbox",
        badge: { value: "6", color: "primary" }
    },
    {
        name: "Map",
        icon: "add_location",
        path: ConstantList.ROOT_PATH + "map"
    },
    {
        name: "Todo",
        icon: "center_focus_strong",
        path: ConstantList.ROOT_PATH + "todo/list"
    },
    {
        name: "Forms",
        icon: "description",
        children: [{
                name: "Basic",
                path: ConstantList.ROOT_PATH + "forms/basic",
                iconText: "B"
            },
            {
                name: "Editor",
                path: ConstantList.ROOT_PATH + "forms/editor",
                iconText: "E"
            },
            {
                name: "Upload",
                path: ConstantList.ROOT_PATH + "forms/upload",
                iconText: "U"
            },
            {
                name: "Wizard",
                path: ConstantList.ROOT_PATH + "forms/wizard",
                iconText: "W"
            }
        ]
    },
    {
        name: "Page Layouts",
        icon: "view_carousel",
        children: [{
                name: "Left Sidebar Card",
                path: ConstantList.ROOT_PATH + "page-layouts/Left-sidebar-card",
                iconText: "L"
            },
            {
                name: "User Profile",
                path: ConstantList.ROOT_PATH + "page-layouts/user-profile",
                iconText: "U"
            }
        ]
    },

    {
        name: "UI Kits",
        icon: "favorite",
        badge: { value: "50+", color: "secondary" },
        children: [{
                name: "Auto Complete",
                path: ConstantList.ROOT_PATH + "material/autocomplete",
                iconText: "A"
            },
            {
                name: "Buttons",
                path: ConstantList.ROOT_PATH + "material/buttons",
                iconText: "B"
            },
            {
                name: "Checkbox",
                path: ConstantList.ROOT_PATH + "material/checkbox",
                iconText: "C"
            },
            {
                name: "Dialog",
                path: ConstantList.ROOT_PATH + "material/dialog",
                iconText: "D"
            },
            {
                name: "Expansion Panel",
                path: ConstantList.ROOT_PATH + "material/expansion-panel",
                iconText: "E"
            },
            {
                name: "Form",
                path: ConstantList.ROOT_PATH + "material/form",
                iconText: "F"
            },
            {
                name: "Icons",
                path: ConstantList.ROOT_PATH + "material/icons",
                iconText: "I"
            },
            {
                name: "Menu",
                path: ConstantList.ROOT_PATH + "material/menu",
                iconText: "M"
            },
            {
                name: "Progress",
                path: ConstantList.ROOT_PATH + "material/progress",
                iconText: "P"
            },
            {
                name: "Radio",
                path: ConstantList.ROOT_PATH + "material/radio",
                iconText: "R"
            },
            {
                name: "Switch",
                path: ConstantList.ROOT_PATH + "material/switch",
                iconText: "S"
            },
            {
                name: "Slider",
                path: ConstantList.ROOT_PATH + "material/slider",
                iconText: "S"
            },
            {
                name: "Snackbar",
                path: ConstantList.ROOT_PATH + "material/snackbar",
                iconText: "S"
            },
            {
                name: "Table",
                path: ConstantList.ROOT_PATH + "material/table",
                iconText: "T"
            }
        ]
    },
    {
        name: "Charts",
        icon: "trending_up",
        children: [{
                name: "Echarts",
                path: ConstantList.ROOT_PATH + "charts/echarts",
                iconText: "E"
            },
            {
                name: "Recharts",
                path: ConstantList.ROOT_PATH + "charts/recharts",
                iconText: "R"
            },
            {
                name: "React Vis",
                path: ConstantList.ROOT_PATH + "charts/react-vis",
                iconText: "R"
            },
            {
                name: "Victory Chart",
                path: ConstantList.ROOT_PATH + "charts/victory-charts",
                iconText: "V"
            }
        ]
    },
    {
        name: "Drag and Drop",
        icon: "control_camera",
        path: ConstantList.ROOT_PATH + "others/drag-and-drop"
    },
    {
        name: "Others",
        icon: "blur_on",
        children: [{
            name: "Pricing",
            path: ConstantList.ROOT_PATH + "others/pricing",
            iconText: "P"
        }]
    },
    {
        name: "Multilevel",
        icon: "trending_up",
        children: [{
            name: "Level 1",
            iconText: "E",
            children: [{
                    name: "Item 1",
                    path: ConstantList.ROOT_PATH + "chart"
                },
                {
                    name: "Item 2",
                    path: ConstantList.ROOT_PATH + "chart"
                },
                {
                    name: "Item 3",
                    path: ConstantList.ROOT_PATH + "chart"
                },
                {
                    name: "Item 4",
                    path: ConstantList.ROOT_PATH + "chart"
                }
            ]
        }]
    },
    {
        name: "Utilities",
        icon: "format_list_bulleted",
        children: [{
                name: "Color",
                path: ConstantList.ROOT_PATH + "utilities/color",
                iconText: "C"
            },
            {
                name: "Spacing",
                path: ConstantList.ROOT_PATH + "utilities/spacing",
                iconText: "S"
            },
            {
                name: "Typography",
                path: ConstantList.ROOT_PATH + "utilities/typography",
                iconText: "T"
            },
            {
                name: "Display",
                path: ConstantList.ROOT_PATH + "utilities/display",
                iconText: "D"
            }
        ]
    },
    {
        name: "Sessions",
        icon: "trending_up",
        children: [{
                name: "Sign in",
                iconText: "SI",
                path: ConstantList.ROOT_PATH + "session/signin"
            },
            {
                name: "Sign up",
                iconText: "SU",
                path: ConstantList.ROOT_PATH + "session/signup"
            },
            {
                name: "Error",
                iconText: "404",
                path: ConstantList.ROOT_PATH + "session/404"
            }
        ]
    }
];