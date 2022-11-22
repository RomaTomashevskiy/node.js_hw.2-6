const getCurrent = async (req, res) => {
    const {_id , email} = req.user;
    return res.status(200).json({
        status: 200,
        result: {
            email: email,
            id: _id
        }
    });
};


module.exports = getCurrent;