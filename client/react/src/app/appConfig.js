//const APPLICATION_PATH="/sample/react/";
const APPLICATION_PATH = "/"; //Đặt homepage tại package.json giống như tại đây
module.exports = Object.freeze({
    //ROOT_PATH : "/egret/",
    ROOT_PATH: APPLICATION_PATH,
    ACTIVE_LAYOUT: "layout1", //layout1 = vertical, layout2=horizontal
    // API_ENPOINT:"http://globits.net:8092/sample",
    API_ENPOINT: "http://localhost:8092/sample",
    //API_ENPOINT:"http://192.168.1.4:8092/sample",
    AUTH_MODE: "Spring", //"Spring" or "Keycloak"
    HOME_PAGE: APPLICATION_PATH + "session/signin" //Nếu là Spring
        // HOME_PAGE:APPLICATION_PATH+"dashboard/learning-management"//Nếu là Keycloak
});