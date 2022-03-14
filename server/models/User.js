const mongoose = require('mongoose')
const {
	ObjectId
} = mongoose.Schema

const user = new mongoose.Schema({
	userName: {
		type: String
	},
	userRole: {
		type: String,
		index: true,
		default: "user"
	},
	emailAddress: {
		type: String,
		index: true,
		required: true,
	},
	userAddress: {
		type: String
	},
	phone: {
		type: String
	},
  displaName: {
    type: String
  },		
	photoUrl: {
		type: String
	}
}, {
	timestamps: true
})

module.exports = mongoose.model("User", user)