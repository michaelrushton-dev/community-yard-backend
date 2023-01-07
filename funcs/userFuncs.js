export async function getAllUsers() {
    try {
        const userFetch = await usersModel.find();
        console.log('reponse');
        console.log(userFetch);
    } catch (error) {
        console.log(error);
    }
}
