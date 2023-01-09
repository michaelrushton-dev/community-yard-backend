import mongoose, { Model, Schema } from 'mongoose';

const UsersSchema = mongoose.Schema({
    name: 'string',
    email: 'string',
    shareLocation: 'boolean',
});

export default mongoose.model('Users', UsersSchema);
