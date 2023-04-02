import { Model, DataTypes } from "sequelize";

export default (sequelize) => {
    class Cusines extends Model {
        static associate(models) {
            // this.hasMany(models.users_ratings, { foreignKey: "placeID", targetKey: "placeID" });
        }
    }

    Cusines.init(
        {
            placeID: DataTypes.INTEGER,
            rcuisine: DataTypes.STRING,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: "cusines",
        }
    );


    return Cusines;
}