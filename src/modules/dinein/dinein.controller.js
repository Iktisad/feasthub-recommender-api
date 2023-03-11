export default (service) => {
    // User login
    const login = async (req, res, next) => {
        try {
            const data = await service.authenticate(req);

            res.status(200).json({
                message: "Authentication Successful.",
                status: "success",
                data,
            });
            next();
        } catch (error) {
            next(error);
        }
    };

    return Object.freeze({
        login
    });
};
