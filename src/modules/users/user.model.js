import { Model, DataTypes } from "sequelize";

export default (sequelize) => {
    class Users extends Model {
        static associate(models) {
        }
    }

    Users.init(
        {
            userID: DataTypes.STRING,
            username: DataTypes.STRING,
            email: DataTypes.STRING,
            phone_number: DataTypes.STRING,
            password: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: "users",
        }
    );

    return Users;
}