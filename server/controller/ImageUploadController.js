const path = require('path');
const User = require("../models/UserSchema");

const profilePictureUpload = async (req, res) => {
    const imagePath = req.file.path;
    const fileName = path.basename(imagePath);

    const id = req.rootUser._id
    const userSearch = await User.findById({ _id: id })
    try {
        userSearch.profile_pic = fileName;

        const userSaved = await userSearch.save()

        if (userSaved) {
            res.status(200).json({ messege: "Sucess" })
        } else {
            res.status(400).json({ messege: "Faild" })
        }
    } catch (err) {
        res.json(err)
    }
}

const posterPictureUpload = async (req, res) => {
    const imagePath = req.file.path;
    const fileName = path.basename(imagePath);

    const id = req.rootUser._id
    const userSearch = await User.findById({ _id: id })

    try {
        userSearch.poster_pic = fileName;

        const userSaved = await userSearch.save()

        if (userSaved) {
            res.status(200).json({ messege: "Sucess" })
        } else {
            res.status(400).json({ messege: "Faild" })
        }

    } catch (err) {
        res.json(err)
    }
}

module.exports = { profilePictureUpload, posterPictureUpload }