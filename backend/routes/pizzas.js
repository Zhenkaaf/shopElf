const router = require("express").Router();
const PizzaSchema = require("../models/pizzaSchema");

router.get("/", async (req, res) => {
  console.log("serverWorkPizza");
  try {
    const pizzas = await PizzaSchema.find();
    console.log(pizzas);
    res.status(200).json(pizzas);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
