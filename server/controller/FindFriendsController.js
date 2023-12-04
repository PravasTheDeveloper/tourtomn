const User = require("../models/UserSchema");

const seeAllPeople = async (req, res) => {
    try {
        const user = await User.findById(req.id);
        const followingIds = user.following.map(followedUser => followedUser.toString());
        const followersIds = user.followers.map(follower => follower.user.toString());

        const usersNotFollowed = await User.find({
            $and: [
                { _id: { $ne: req.id } },    // Exclude the current user
                { _id: { $nin: followingIds } },    // Exclude users you are following
                { _id: { $nin: followersIds } },    // Exclude users who are following you
            ]
        });

        res.json(usersNotFollowed);
        // console.log(usersNotFollowed)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const followUser = async (req, res) => {
    try {
        const id = req.body.id;
        const userToFollow = await User.findById(id);

        if (!userToFollow) {
            return res.status(404).json({ message: 'User not found' });
        } else {
            req.rootUser.following.forEach(element => {
                if (element.toString() === id.toString()) {
                    return res.status(401).json({ message: 'You are already following' });
                }
            });

            req.rootUser.followers.forEach(element => {
                if (element.toString() === id.toString()) {
                    return res.status(401).json({ message: 'This user is already following you' });
                }
            });

            req.rootUser.following.push(userToFollow._id);
            userToFollow.followers.push({ user: req.id });

            await req.rootUser.save();
            await userToFollow.save();

            const notification = {
                type: 'follow',
                content: `${req.rootUser.name} started following you.`,
                createdAt: new Date(),
                read: false,
            };
            userToFollow.notifications.push(notification);
            await userToFollow.save();

            res.status(200).json({ message: 'Followed successfully' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getMyFollowers = async (req, res) => {
    try {
        const myFollowers = await User.find({ '_id': { $in: req.rootUser.followers.map(follower => follower.user) } });
        res.json(myFollowers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getMyFollowing = async (req, res) => {
    try {
        const myFollowing = await User.find({ '_id': { $in: req.rootUser.following } });
        res.json(myFollowing);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { seeAllPeople, followUser ,getMyFollowers , getMyFollowing};
