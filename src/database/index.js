import "dotenv/config";
import config from "./db.config.js";
import { Sequelize } from "sequelize"

import Users from "../modules/users/user.model.js";

const sequelize = new Sequelize(process.env.DB_CONNECTION_URI, config.development);

const db = {}

const models = [
    Users
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