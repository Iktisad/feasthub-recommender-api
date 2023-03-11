import db from "../../../database/index.js";
import { GenericRepository } from "../../../repository/generic.repository.js";

const { Users } = db;
export class UserVisitRepository extends GenericRepository {
    constructor () {
        super(Users);
    }
}