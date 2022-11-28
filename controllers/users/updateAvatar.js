const { User , jimp} = require("../../model/users");
const fs = require("fs/promises");
const path = require("path");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");


const updateAvatar = async (req, res, next) => {
    const { path: tempUpload, originalname } = req.file;
    
    await jimp(tempUpload);

    try {
        const resultUpload = path.join(avatarsDir, originalname);
        await fs.rename(tempUpload, resultUpload)
        const avatarURL = path.join("public", "avatars", originalname)
        await User.findByIdAndUpdate(req.user.id, { avatarURL });

        return res.status(200).json({
            avatarURL
        });
    } catch (error) {
        await fs.unlink(tempUpload);
        next(error)
    }
};


module.exports = updateAvatar;