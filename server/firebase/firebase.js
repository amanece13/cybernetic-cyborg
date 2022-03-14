var admin = require("firebase-admin");

var serviceAccount = require("./aijay-commerce-firebase-adminsdk-z57wu-35e809e005.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});

module.exports = admin