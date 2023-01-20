import Foodbanks from '../models/Foodbanks.js';

export async function getAllFoodbanks() {
    try {
        const userFetch = await Foodbanks.find();
        console.log('reponse foodbanks!');
        console.log(userFetch);
        return userFetch;
    } catch (error) {
        console.error();
    }
}

export async function postNewFoodbank(req) {
    try {
        // creating a new db entry (document) with the model of "User"
        const newFoodbank = new Foodbanks({
            name: req.body.name,
            lat: req.body.lat,
            lng: req.body.lng,
            firstLine: req.body.firstLine,
            secondLine: req.body.secondLine,
            town: req.body.town,
            postcode: req.body.postcode,
            phone: req.body.phone,
            email: req.body.email,
            website: req.body.website,
            parking: req.body.parking,
            wheelchairAccess: req.body.wheelchairAccess,
            businessDescription: req.body.businessDescription,
            wantedItems: req.body.wantedItems,
            openingHours: req.body.openingHours,
        });
        //asyncronously saving it to the database
        await newFoodbank.save();
        console.log('saved new foodbank!');
    } catch (error) {
        // code to handle the error
        console.log(error);
    }
}

export async function updateFoodbank(foodbankId, req) {
    await Foodbanks.replaceOne({ _id: foodbankId }, { ...req.body });
    console.log(req.body);
}

export async function deleteFoodbank(foodbankId, req) {
    try {
        await Foodbanks.deleteOne( { "_id" : foodbankId } );
     } catch (e) {
        console.log(e);
     }
}