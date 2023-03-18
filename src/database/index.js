import "dotenv/config";
import { Sequelize } from "sequelize";
import config from "./db.config.js";

import Cusine from "../modules/dinein/models/cusine.model.js";
import UserRating from "../modules/dinein/models/user_rating.model.js";
import Users from "../modules/users/user.model.js";

const sequelize = new Sequelize(process.env.DB_CONNECTION_URI, config.development);

const db = {}

const models = [
    Users,
    Cusine,
    UserRating
]

models.forEach((model) => {
    const modelInstance = model(sequelize)
    db[modelInstance.name] = modelInstance
})

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db)
    }
})

db.sequelize = sequelize
// console.log("🚀 ~ file: index.js:24 ~ db", db)

export default db