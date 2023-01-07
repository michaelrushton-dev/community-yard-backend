import Users from '../models/Users.js';

export async function getAllUsers() {
    try {
        const userFetch = await Users.find();
        console.log('returning all users!');
        console.log(userFetch);
        return userFetch;
    } catch (error) {
        console.log(error);
    }
}

export async function postNewUser(req) {
    try {
        // creating a new db entry (document) with the model of "User"
        const newUser = new Users({
            name: req.body.name,
            email: req.body.email,
            shareLocation: req.body.shareLocation,
        });
        //asyncronously saving it to the database
        await newUser.save();
        console.log('saved new user!', newUser);
    } catch (error) {
        // code to handle the error
        console.log(error);
    }
}
