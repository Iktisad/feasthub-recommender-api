import { Model, DataTypes } from "sequelize";
// import { customAlphabet } from "nanoid";

// const nanoid = customAlphabet("1234567890", 10);

export default (sequelize) => {
    class Users extends Model {
        static associate(models) {
        }
    }

    Users.init(
        {
            // _id: DataTypes.STRING,
            first_name: DataTypes.STRING,
            last_name: DataTypes.STRING,
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
            modelName: "Users",
        }
    );

    // Users.addHook('beforeValidate', (user, options) => {
    //     user._id = nanoid();
    // });

    return Users;
}