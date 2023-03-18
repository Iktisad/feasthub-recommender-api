import * as argon2 from "argon2";
import moment from "moment";
import {
    BadRequestException,
    ConflictException,
    UnauthorizedException,
    NotFoundException,
} from "../../../utils/exceptions/http.exception.js";
import { signJWT } from "../../../helpers/signJwt.helper.js"

export default (repository) => {
    //to check for duplicate emails
    const checkDuplication = async (filter) => {
        const user = await repository.find({ query: filter });
        if (user.length > 0) {
            return true;
        }
        return false;
    };

    //createa new user during user signup
    const createUser = async ({ body }) => {
        // console.log(body);
        const duplicateEmail = await checkDuplication({
            email: body.email
        });
        const duplicateUsername = await checkDuplication({
            username: body.username
        });
        if (duplicateEmail) throw ConflictException("Mail Already Exists.");
        if (duplicateUsername) throw ConflictException("Username already in use.");

        const { password } = body;
        const hash = await argon2.hash(password); //generate hash
        body.password = hash;

        const lastUser = await repository.findOne({
            sort: [ [ 'id', 'DESC' ] ]
        })
        console.log("🚀 ~ file: auth.services.js:42 ~ createUser ~ lastUser:", lastUser)

        const lastUserID = lastUser.userID.split('U')[1]
        const newUserID = parseInt(lastUserID) + 1
        
        await repository.create({
            userID: `U${newUserID}`,
            ...body
        });
        return true;
    };

    //authenticate user
    const authenticate = async ({ body }) => {
        const { idenfitier, password } = body;

        if (!idenfitier || !password)
            throw UnauthorizedException("Invalid Credentials");

        const email = idenfitier.includes("@") ? idenfitier : null;

        const query = email ? { email } : { username: idenfitier };
        
        const user = await repository.findOne({ query });
        if (!user) throw UnauthorizedException("Invalid Email.");

        const passwordMatch = await argon2.verify(user.password, password);

        if (!passwordMatch) throw UnauthorizedException("Invalid Password.");

        const token = signJWT(
            {
                iat: moment().unix(),
                sub: user._id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email
            }
        );
        return token;
    };

    const resetPassword = async ({ params, body }) => {
        let { newPassword, oldPassword } = body;

        const data = await repository.findById(params.id);

        if (!data) throw NotFoundException("User Not Found!!");

        const passwordMatch = await argon2.verify(data.password, oldPassword);

        if (!passwordMatch)
            throw BadRequestException("Password is incorrect.");

        data.password = await argon2.hash(newPassword);

        await repository.save(data);
        return true;
    };

    return Object.freeze({
        createUser,
        authenticate,
        resetPassword,
    });
};
