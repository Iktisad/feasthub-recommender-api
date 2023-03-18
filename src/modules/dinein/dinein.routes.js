import express from "express";
import passport from "passport";
const router = express.Router();

export default (module) => {
    router.use(passport.authenticate("jwt", { session: false }))
    
    router.route("/rating/add").post(passport.authenticate("jwt", { session: false }), module.createRating);

    return router;
};