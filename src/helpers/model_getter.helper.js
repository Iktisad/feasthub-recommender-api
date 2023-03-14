import db from "../database/index.js";

export const userGetters = async (id) => {
    const user = await db.Users.findOne({
        where: {
            _id: id
        },
        attributes: {
            exclude: ["password"]
        }
    });
    return user && user.dataValues ? user.dataValues : null;
} // dssfdf