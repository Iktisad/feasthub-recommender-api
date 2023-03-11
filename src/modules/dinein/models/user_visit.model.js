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
            rating: DataTypes.INTEGER,
            food_rating: DataTypes.INTEGER,
            service_rating: DataTypes.INTEGER,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: "UsersVisits",
        }
    );

    return UsersVisits;
}