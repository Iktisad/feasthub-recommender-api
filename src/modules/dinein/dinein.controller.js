export default (service) => {
    // User login
    const registerRating = async (req, res, next) => {
        try {
            const data = await service.createRating(req);
            res.status(200).json({
                message: "Rating stored success.",
                status: "success",
                data,
            });
            next();
        } catch (error) {
            next(error);
        }
    };

    const getVistedRestaurants = async (req, res, next) => {
        try {
            const data = await getRestaurants(req);
            res.status(200).json({
                message: "Displaying results",
                status: "success",
                data,
            });
        } catch (error) {
            next(error);
        }
    };

    const getRecommendedRestaurants = async (req, res, next) => {
        try {
            const data = await service.getRecommendation(req);
            res.status(200).json({
                message: "Displaying results",
                status: "success",
                data,
            });
        } catch (error) {
            next(error);
        }
    };

    return Object.freeze({
        registerRating,
        getVistedRestaurants,
        getRecommendedRestaurants,
    });
};
