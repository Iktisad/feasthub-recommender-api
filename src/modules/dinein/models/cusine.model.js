import { Model, DataTypes } from "sequelize";

export default (sequelize) => {
    class Cusines extends Model {
        static associate(models) {
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