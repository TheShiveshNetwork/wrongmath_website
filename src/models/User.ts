import { Schema, model, models } from "mongoose";

interface IUser {
    email: string;
    username: string;
    name: string;
    password: string;
}

const UserSchema = new Schema<IUser>(
    {
        email: {
            type: String,
            unique: true,
            required: true,
        },
        username: {
            type: String,
            unique: true,
        },
        name: {
            type: String,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export default models.Users || model('Users', UserSchema);