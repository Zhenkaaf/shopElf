const router = require("express").Router();
const DonnySchema = require("../models/donnySchema");

router.get("/", async (req, res) => {
  console.log("serverWorkDonny");
  try {
    const donny = await DonnySchema.find();
    console.log(donny);
    res.status(200).json(donny);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
