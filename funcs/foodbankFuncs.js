export async function getAllFoodbanks() {
    try {
        const userFetch = await foodbanksModel.find();
        console.log('reponse');
        console.log(userFetch);
    } catch (error) {
        console.log(error);
    }
}
