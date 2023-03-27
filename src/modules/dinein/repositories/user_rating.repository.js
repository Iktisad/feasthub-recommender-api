import db from "../../../database/index.js";
import { GenericRepository } from "../../../repository/generic.repository.js";

const { users_ratings } = db;
export class UserVisitRepository extends GenericRepository {
    constructor() {
        super(users_ratings);
    }
}
