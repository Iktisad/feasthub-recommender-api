import { Model, DataTypes } from "sequelize";

export default (sequelize) => {
    class UsersRatings extends Model {
        static associate(models) {
            this.belongsTo(models.users, { foreignKey: "userID", targetKey: "userID" });
            this.belongsTo(models.cusines, { foreignKey: "placeID", targetKey: "placeID" });
        }
    }

    UsersRatings.init(
        {
            userID: DataTypes.STRING,
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

    return UsersRatings;
}