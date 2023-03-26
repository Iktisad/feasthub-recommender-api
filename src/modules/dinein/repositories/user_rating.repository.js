import db from "../../../database/index.js";
import { GenericRepository } from "../../../repository/generic.repository.js";

const { users_ratings } = db;
export class UserVisitRepository extends GenericRepository {
    constructor() {
        super(users_ratings);
    }

    async getRecommendation({ body }) {
        // this is where node js needs to talk to python engine
        // a second comment
    }
}
