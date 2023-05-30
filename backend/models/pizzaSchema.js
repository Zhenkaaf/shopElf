const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const pizzaSchema = new Schema(
  {
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
  },
  {
    collection: "pizzas",
  }
);

const Pizza = mongoose.model("Pizza", pizzaSchema);

module.exports = Pizza;
