import db from "../../../database/index.js";
import { GenericRepository } from "../../../repository/generic.repository.js";

const { cusines } = db;
export class CusineRepository extends GenericRepository {
    constructor () {
        super(cusines);
    }
}