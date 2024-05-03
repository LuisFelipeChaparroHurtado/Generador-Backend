import { Router } from "express";
import adminControllerFindUser from "../controller/admin/AdminControllerFindUser";
import adminControllerListUser from "../controller/admin/AdminControllerListUser";
import adminControllerUpdateUser from "../controller/admin/AdminControllerUpdeteUser";
import adminControllerCreateUser from "../controller/admin/AdminControllerCreateUser";
import adminControllerDeleteUser from "../controller/admin/AdminControllerDeleteUser";

/**
 * Class to configure and manage admin API routes.
 */
class AdminRoutes{
     /**
     * The `Router` instance used to define admin API routes.
     */
    public routesApiAdmin:Router;
    /**
     * Constructor that initializes the router and sets up the routes.
     */
    constructor(){
        this.routesApiAdmin=Router();
        this.setting();
    }

  /**
   * Sets up the routes for the admin API using the admin controllers.
   */
    public setting(){
        // Route to list all users.
        this.routesApiAdmin.get("/list",adminControllerListUser.listUsers);
        // Route to create a new user.
        this.routesApiAdmin.post("/create",adminControllerCreateUser.createUser);
        // Route to find a user by ID.
        this.routesApiAdmin.get("/find/:idUser", adminControllerFindUser.searchUser);
        // Route to update a user by ID.
        this.routesApiAdmin.put("/update/:idUser", adminControllerUpdateUser.updateUser);
        // Route to delete a user by ID.
        this.routesApiAdmin.delete("/delete/:idUser", adminControllerDeleteUser.deleteUser);


    }
}
const adminRoutes=new AdminRoutes();
export default adminRoutes.routesApiAdmin;