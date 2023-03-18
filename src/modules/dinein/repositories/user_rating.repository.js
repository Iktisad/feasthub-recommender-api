import db from "../../../database/index.js";
import { GenericRepository } from "../../../repository/generic.repository.js";

const { UsersRatings } = db;
export class UserVisitRepository extends GenericRepository {
    constructor () {
        super(UsersRatings);
    }
}