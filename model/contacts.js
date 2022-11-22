const { Schema, model, SchemaTypes } = require("mongoose");
 
const Joi = require("joi");

const contactsSchema = Schema(
    {
        name: {
            type: String,
            required: [true, 'Set name for contact'],
        },
        email: {
            type: String,
        },
        phone: {
            type: String,
        },
        favorite: {
            type: Boolean,
            default: false,
        },
        owner: {
            type: SchemaTypes.ObjectId,
            ref: 'user',
        }
    }
);


const joiSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    favorite: Joi.bool()
});

const joiSchemafavorite = Joi.object({
    favorite: Joi.bool().required()
});

const Contact = model("contact", contactsSchema);

module.exports = {
    Contact,
    joiSchema,
    joiSchemafavorite
};