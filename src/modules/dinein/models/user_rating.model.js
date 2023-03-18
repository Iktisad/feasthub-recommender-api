import { Model, DataTypes } from "sequelize";

export default (sequelize) => {
    class UsersVisits extends Model {
        static associate(models) {
        }
    }

    UsersVisits.init(
        {
            userID: DataTypes.INTEGER,
            placeID: DataTypes.INTEGER,
            overall_rating: DataTypes.FLOAT,
            food_rating: DataTypes.FLOAT,
            service_rating: DataTypes.FLOAT,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: "users_ratings",
        }
    );

    return UsersVisits;
}