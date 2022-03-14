const mongoose = require('mongoose')
const {
	ObjectId
} = mongoose.Schema

const product = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true,
		text: true,
	},
	slug: {
		type: String,
		lowercase: true,
		index: true
	},
	price: {
		type: String,
		required: true,
		trim: true,
		maxlength: 32
	},
	availableQuantity: Number,
	sold: {
		type: Number,
		default: 0
	},
	images: {
		type: Array
	}
}, {
	timestamps: true
})

module.exports = mongoose.model('Product', product)