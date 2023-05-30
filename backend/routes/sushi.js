const router = require("express").Router();
const SushiSchema = require("../models/sushiSchema");

router.get("/", async (req, res) => {
  console.log("serverWorkSushi");
  try {
    const sushi = await SushiSchema.find();
    console.log(sushi);
    res.status(200).json(sushi);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
