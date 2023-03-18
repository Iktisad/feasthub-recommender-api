import dineinService from "./dinein.service.js";
import dineinController from "./dinein.controller.js";
import dineinRoutes from "./dinein.routes.js";
import { CusineRepository } from "./repositories/cusine.repository.js";
import { UserVisitRepository } from "./repositories/user_rating.repository.js";

const cusineRepository = new CusineRepository();
const userVisitRepository = new UserVisitRepository();
const service = dineinService(cusineRepository, userVisitRepository);
const module = dineinController(service);

export default dineinRoutes(module);