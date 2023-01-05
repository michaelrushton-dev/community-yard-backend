import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

//remember to un-comment the calling/execution of the async function below! called: run()

mongoose.set('strictQuery', false);

mongoose.connect(
    //inserting db username and password fromt the dotenv file (so we have permission to post) followed by @ then URI of db
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@community-yard.6twc9mx.mongodb.net/?retryWrites=true&w=majority`,
    () => {
        console.log('connected!');
    },
    (e) => console.error(e)
);
