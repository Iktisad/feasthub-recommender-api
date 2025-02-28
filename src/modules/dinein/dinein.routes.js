import express from "express";
import passport from "passport";
const router = express.Router();

export default (module) => {
    router.use(passport.authenticate("jwt", { session: false }));

    router
        .route("/most-visited/:id")
        .get(
            passport.authenticate("jwt", { session: false }),
            module.getVistedRestaurants
        );
    router
        .route("/recommend/:id")
        .get(
            passport.authenticate("jwt", { session: false }),
            module.getRecommendedRestaurants
        );
    router
        .route("/rating/add")
        .post(
            passport.authenticate("jwt", { session: false }),
            module.registerRating
    );
    
    router.get('/get-data', module.getData);

    return router;
};
