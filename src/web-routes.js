import { accountsController } from "./controllers/accounts-controller.js";
import { adminController } from "./controllers/admin-controller.js";
import { dashboardController } from "./controllers/dashboard-controller.js";
import { aboutController } from "./controllers/about-controller.js";
import { groupController } from "./controllers/group-controller.js";
import { lighthouseController } from "./controllers/lighthouse-controller.js";
import { weatherController } from "./controllers/weather-controller.js";




export const webRoutes = [
  { method: "GET", path: "/{param*}", handler: { directory: { path: "./public" } }, options: { auth: false } },

  { method: "GET", path: "/", config: accountsController.index },
    { method: "GET", path: "/signup", config: accountsController.showSignup },
    { method: "GET", path: "/admin", config: adminController.index },
    { method: "GET", path: "/deleteuser/{id}", config: adminController.deleteUser },
    { method: "GET", path: "/admin/edituser/{id}", config: adminController.editUser },
    { method: "POST", path: "/admin/updateuser/{id}", config: adminController.updateUser },
    { method: "GET", path: "/login", config: accountsController.showLogin },
    { method: "GET", path: "/logout", config: accountsController.logout },
    { method: "POST", path: "/register", config: accountsController.signup },
    { method: "POST", path: "/authenticate", config: accountsController.login },
    { method: "GET", path: "/about", config: aboutController.index },
    { method: "GET", path: "/dashboard", config: dashboardController.index },
    { method: "POST", path: "/dashboard/addgroup", config: dashboardController.addGroup },
    { method: "GET", path: "/dashboard/deletegroup/{id}", config: dashboardController.deleteGroup },
    { method: "GET", path: "/dashboard/editgroup/{id}", config: dashboardController.editGroup },
    { method: "POST", path: "/dashboard/updateGroup/{id}", config: dashboardController.updateGroup },
    { method: "GET", path: "/group/{id}", config: groupController.index },

    { method: "GET", path: "/group/{id}/api/{lighthouseid}", config: weatherController.indexAPI },

    { method: "POST", path: "/group/{id}/addlighthouse", config: groupController.addLighthouse },
    { method: "GET", path: "/group/{id}/deletegroup/{lighthouseid}", config: groupController.deleteLighthouse },
    { method: "POST", path: "/group/{id}/uploadimage/{lighthouseid}", config: lighthouseController.uploadImage },
    { method: "GET", path: "/group/{id}/editimage/{lighthouseid}", config: lighthouseController.imageIndex },
    { method: "GET", path: "/group/{id}/editlighthouse/{lighthouseid}", config: lighthouseController.index },
    { method: "POST", path: "/group/{id}/updatelighthouse/{lighthouseid}", config: lighthouseController.updateLighthouse },

];