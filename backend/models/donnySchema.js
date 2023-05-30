const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const donnySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imgUrl: {
    type: String,
    default: "",
  },
});

const Donny = mongoose.model("Donny", donnySchema);

module.exports = Donny;
