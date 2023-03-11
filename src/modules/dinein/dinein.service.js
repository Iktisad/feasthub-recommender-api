export default (repository) => {
    // User login
    const createUser = async ({ body }) => {
        // console.log(body);
        const duplicate = await checkDuplication(body);
        if (duplicate) throw ConflictException("Mail Already Exists.");

        const { password } = body;
        const hash = await argon2.hash(password); //generate hash
        body.password = hash;

        await repository.create(body);
        return true;
    };

    return Object.freeze({
        
    });
};
