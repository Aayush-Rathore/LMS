import { Document, model, Schema } from "mongoose";
import { hash } from "bcrypt";


interface IStudent extends Document {
    fullName: string,
    dob: Date,
    address: string,
    profileUrl: string,
    gender: string,
    number: string,
    email: string,
    password?: string,
}

const StudentSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },

    dob: {
        type: Date,
    },

    address: {
        type: String,
    },

    profileUrl: {
        type: String,
    },

    gender: {
        type: String,
        enum: ["male", "female", "other"],
        required: true

    },

    number: {
        type: String,
        required: true,
        index: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
        select: false
    }
},
    {
        timestamps: true
    }
);

StudentSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await hash(this.password, 9);
    next();
});

export const Students = model<IStudent>("users", StudentSchema);