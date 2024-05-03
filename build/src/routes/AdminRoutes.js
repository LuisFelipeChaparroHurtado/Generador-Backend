"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AdminControllerFindUser_1 = __importDefault(require("../controller/admin/AdminControllerFindUser"));
const AdminControllerListUser_1 = __importDefault(require("../controller/admin/AdminControllerListUser"));
const AdminControllerUpdeteUser_1 = __importDefault(require("../controller/admin/AdminControllerUpdeteUser"));
const AdminControllerCreateUser_1 = __importDefault(require("../controller/admin/AdminControllerCreateUser"));
const AdminControllerDeleteUser_1 = __importDefault(require("../controller/admin/AdminControllerDeleteUser"));
/**
 * Class to configure and manage admin API routes.
 */
class AdminRoutes {
    /**
     * Constructor that initializes the router and sets up the routes.
     */
    constructor() {
        this.routesApiAdmin = (0, express_1.Router)();
        this.setting();
    }
    /**
     * Sets up the routes for the admin API using the admin controllers.
     */
    setting() {
        // Route to list all users.
        this.routesApiAdmin.get("/list", AdminControllerListUser_1.default.listUsers);
        // Route to create a new user.
        this.routesApiAdmin.post("/create", AdminControllerCreateUser_1.default.createUser);
        // Route to find a user by ID.
        this.routesApiAdmin.get("/find/:idUser", AdminControllerFindUser_1.default.searchUser);
        // Route to update a user by ID.
        this.routesApiAdmin.put("/update/:idUser", AdminControllerUpdeteUser_1.default.updateUser);
        // Route to delete a user by ID.
        this.routesApiAdmin.delete("/delete/:idUser", AdminControllerDeleteUser_1.default.deleteUser);
    }
}
const adminRoutes = new AdminRoutes();
exports.default = adminRoutes.routesApiAdmin;
