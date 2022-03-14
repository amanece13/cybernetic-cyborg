const User = require('../models/User');

exports.registerOrUpdateUser = async (req, res) => {
	const {
		email,
		displaName = '',
		photoUrl = ''
	} = req.user;
  console.log(req.user, "user")
	const user = await User.findOneAndUpdate({
		emailAddress: email
	}, {
		userName: email.split("@")[0],
		displaName,
		photoUrl
	})
	if (user) {
		console.log("Existing User", user);
		res.status(200).json(user)
	} else {
		//create new user
		const createdUser = await new User({
			emailAddress: email,
			userName: email.split("@")[0],
			displaName,
			photoUrl
		}).save()
		console.log("new user", createdUser);
		
		res.status(200).json(createdUser)
	}
}

exports.getUser = async (req, res) => {
	res.status(200).json("The Api is up and running")
}