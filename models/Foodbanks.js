import mongoose, { Model, Schema } from 'mongoose';

//need to trim down the Date.now() value with a function to be YYYY-MM-DD

const FoodbanksSchema = mongoose.Schema({
    name: String,
    date: {
        type: Date,
        default: Date.now(),
    },
    lat: Number,
    lng: Number,
    firstLine: Number,
    secondLine: String,
    town: String,
    postcode: String,
    phone: Number,
    email: String,
    website: String,
    parking: Boolean,
    wheelchairAccess: Boolean,
    businessDescription: String,
    wantedItems: Array,
    openingHours: Object,
});

export default mongoose.model('Foodbanks', FoodbanksSchema);
