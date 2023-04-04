import {
    BadRequestException,
    ConflictException,
    UnauthorizedException,
    NotFoundException,
} from "../../utils/exceptions/http.exception.js";
import axios from "axios";

export default (cusineRepo, userRatingRepo) => {
    // User login
    const createRating = async ({ body }) => {
        const { placeID, food_rating, service_rating, userID } = body;
        if (!placeID) throw BadRequestException("Place ID is required");
        const cusine = await cusineRepo.findOne({ placeID });
        if (!cusine) throw NotFoundException("Cusine not found");
        if (!food_rating || !service_rating)
            throw BadRequestException("Invalid request");

        const existingRating = await userRatingRepo.findOne({
            query: { placeID, userID },
        });

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
            service_rating,
        });
        return true;
    };

    const getRecommendation = async ({ params }) => {
        // this is where node js needs to talk to python engine which is also a rest API
        // console.log(val);
        let res = await axios.get("http://127.0.0.1:3000/" + params.id);
        const data = res.data.data;

        if (data.length == 0) {
            throw NotFoundException("User has no data!");
        }
        return JSON.parse(data);
    };

    const getRestaurantsByUserId = async ({ id }) => {
        // need to make a complex db query
        const result = await userRatingRepo.findAndPopulate({
            query: { userID: id },
            include: [
                {
                    model: "cusines",
                    as: "cusine",
                    attributes: ["rcuisine"],
                },
            ],
            sort: [["overall_rating", "DESC"]],
        });
        if (result == null) throw NotFoundException("User has no data!");
        return result;
    };

    const getData = async ({}) => {
        return userRatingRepo.findAndPopulate({
            include: [
                {
                    model: "users",
                    as: "user",
                },
                {
                    model: "cusines",
                    as: "cusine",
                },
            ],
        });
        // return await cusineRepo.findAndPopulate({
        //     include: [
        //         {
        //             model: "users_ratings"
        //         }
        //     ]
        // })
    };

    return Object.freeze({
        createRating,
        getRecommendation,
        getRestaurantsByUserId,
        getData,
    });
};
