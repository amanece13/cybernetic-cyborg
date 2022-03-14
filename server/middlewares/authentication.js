const admin = require('../firebase/firebase');


exports.tokenVerify = async (req, res, next) => {
	try {
		const authenticatedUser = await admin.auth().verifyIdToken(req.headers.authenticationtoken) //authenticates and get user from firebase
		console.log('firebase user', authenticatedUser)
		req.user = authenticatedUser;
		next()
	} catch (err) {
		console.log(err)
		res.status(401).json({
			err: err
		});
	}
}