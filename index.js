import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import usersRoute from './routes/users.js';
import foodbanksRoute from './routes/foodbanks.js';
dotenv.config();
const app = express();

app.use(express.json());

app.use('/users', usersRoute);
app.use('/foodbanks', foodbanksRoute);

app.get('/', (req, res) => {
    res.send('we are on home');
});

mongoose.set('strictQuery', false);

mongoose.connect(
    //inserting db username and password fromt the dotenv file (so we have permission to post) followed by @ then URI of db
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@community-yard.6twc9mx.mongodb.net/?retryWrites=true&w=majority`,
    () => {
        console.log('connected!');
    },
    (e) => console.error(e)
);

app.listen(3000);
