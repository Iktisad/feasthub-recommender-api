import {
    BadRequestException,
    ConflictException,
    UnauthorizedException,
    NotFoundException,
} from "../../utils/exceptions/http.exception.js";


export default (cusineRepo, userRatingRepo) => {
    // User login
    const createRating = async ({ body }) => {
        const { placeID, food_rating, service_rating, userID } = body;
        if(!placeID) throw BadRequestException("Place ID is required");
        const cusine = await cusineRepo.findOne({ placeID });
        if (!cusine) throw NotFoundException("Cusine not found");
        if (!food_rating || !service_rating) throw BadRequestException("Invalid request");

        const existingRating = await userRatingRepo.findOne({ query: { placeID, userID } });
        
        if (existingRating) {
            existingRating.food_rating = food_rating;
            existingRating.service_rating = service_rating;
            existingRating.overall_rating = (food_rating + service_rating) / 2;
            await userRatingRepo.save(existingRating);
            return true;
        }
        
        const overall_rating = (food_rating + service_rating) / 2;

        await userRatingRepo.create({
            userID,
            placeID,
            overall_rating,
            food_rating,
            service_rating
        });
        return true;
    };

    return Object.freeze({
        createRating
    });
};
