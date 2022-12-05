const { Schema, model } = require("mongoose");
const Joi = require("joi");
const bcrypt = require("bcrypt");


const usersSchema = Schema({
    password: {
        type: String,
        required: [true, 'Set password for user'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter"
    },
    avatarURL: {
        type: String,
        require: true
    },
    token: String,
    
    verify: {
        type: Boolean,
        default: false,
    },
    verificationToken: {
        type: String,
        required: [true, 'Verify token is required'],
    },
});

usersSchema.pre("save", async function(next)  {
    const user = this;
     
    if (!user.isModified("password")) return next();
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(user.password, salt);
    user.password = hashPassword;
});


const joiSchemaRegister = Joi.object({
    password: Joi.string().required().min(6),
    email: Joi.string().required(),
    subscription: Joi.string()
});

const joiSchemaLogin = Joi.object({
    email: Joi.string().required(),
    password:Joi.string().required().min(6),
});

const joiSchemaEmailVerify = Joi.object({
    email: Joi.string().required(),
});



const User = model("user", usersSchema);

module.exports = {User , joiSchemaRegister , joiSchemaLogin  , joiSchemaEmailVerify};

