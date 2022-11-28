const { Schema, model } = require("mongoose");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const Jimp = require('jimp');


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
        require:true
    },
    token: String,
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


const jimp = async (filePath) => {
    try {
        const img = await Jimp.read(filePath)
        await img
            .autocrop()
            .cover(
                250,
                250,
                Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE,
            )
            .writeAsync(filePath)
    } catch (error) {
        console.error(error)
    }
};

const User = model("user", usersSchema);

module.exports = {User , joiSchemaRegister , joiSchemaLogin , jimp};

