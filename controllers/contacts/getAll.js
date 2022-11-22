const { Contact } = require("../../model/contacts");

const getAll = (async (req, res) => {
    const { _id: owner } = req.user;
    
    const { page = 1, limit = 10 } = req.query;
    
    const skip = (page - 1) * limit;
    
    const result = await Contact.find({ owner }, "", { skip, limit: Number(limit) }).populate("owner", "_id email subscription");

    res.json({
        status: 200,
        result
    });
});



module.exports = getAll;