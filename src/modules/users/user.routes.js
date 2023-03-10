import express from "express";

const router = express.Router();
export default (module) => {
    // POST: api/users/signup
    // user signup
    router.route("/signup").post(module.signup);

    // POST: api/users/login
    // user login
    router.route("/login").post(module.login);

    router.route("/").get(module.getAllUsers);

    router
        .route("/:id")
        .get(module.getUser)
        .put(module.updateUser)
        .patch(module.changePassword)
        .delete(module.deleteUser);

    return router;
};
