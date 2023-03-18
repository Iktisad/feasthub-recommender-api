export default (service) => {
    // User login
    const createRating = async (req, res, next) => {
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

    return Object.freeze({
        createRating
    });
};
