"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controller/users/UserController"));
/**
  * The `Router` instance used to define user access API routes.
  */
class UserAccessRoute {
    /**
       * Constructor that initializes the router and sets up the routes.
       */
    constructor() {
        this.routesAccessApi = (0, express_1.Router)();
        this.configuration();
    }
    /**
     * Configures the routes for the user access API.
     */
    configuration() {
        // Route for user login.
        this.routesAccessApi.post("/login", UserController_1.default.findIdUserAccess);
    }
}
const userAccessRoute = new UserAccessRoute();
exports.default = userAccessRoute.routesAccessApi;
