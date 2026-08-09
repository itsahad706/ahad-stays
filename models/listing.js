const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://unsplash.com/photos/a-lush-green-hillside-with-trees-and-mountains-in-the-background-JSM39nD0i-8",
        // Ternary Operator (mongoose setter)
        set: (v) => v === "" ? "https://unsplash.com/photos/a-lush-green-hillside-with-trees-and-mountains-in-the-background-JSM39nD0i-8" : v,
    },
    price: Number,
    location: String,
    country: String
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;