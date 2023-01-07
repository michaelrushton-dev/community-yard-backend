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
