const express = require("express")
const { register, signin, userAuthCheck, userProfileData } = require("../controller/authController");
const authenticate = require("../middleware/authenticate");
const profilePicUpload = require("../controller/profilePicUpload");
const router = express.Router()
const path = require('path');
const User = require("../models/UserSchema");
const { profilePictureUpload, posterPictureUpload } = require("../controller/ImageUploadController");
const posterPicUpload = require("../controller/posterPicUpload");
const PostImagesUpload = require("../controller/postImageUploadController");
const postUploadControl = require("../controller/postUploadController");
const { seeAllPeople, followUser, getMyFollowers, getMyFollowing } = require("../controller/FindFriendsController");
const feedController = require("../controller/feedShowProfile");

router.get("/api/showpeople", (req, res) => {
    const token = req.cookies.jwtoken;
    console.log(token)
    res.status(201).json({ messege: "Hei man" })
})

router.get("/api/test", (req, res) => {
    res.status(200).json({ messege: "hello" })
})

router.post("/api/register", register)
router.post("/api/signin", signin)
router.get("/api/userauthcheck", authenticate, userAuthCheck)
router.get('/api/userprofile/:id' , userProfileData)

router.post('/api/uploadprofilepic', authenticate, profilePicUpload, profilePictureUpload);
router.post('/api/uploadposter', authenticate, posterPicUpload, posterPictureUpload);
router.post("/api/postupload", authenticate, PostImagesUpload, postUploadControl);

router.get('/api/seeperson', authenticate, seeAllPeople);
router.post('/api/followuser', authenticate, followUser);
router.get('/api/followers', authenticate, getMyFollowers);
router.get('/api/following', authenticate, getMyFollowing);

router.get("/api/feedshow" , authenticate , feedController)

module.exports = router