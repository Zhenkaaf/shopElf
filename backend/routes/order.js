const router = require("express").Router();
const OrderSchema = require("../models/orderSchema");

router.post("/neworder", async (req, res) => {
  console.log("neworder");
  console.log("req.body**", req.body);
  try {
    const { name, email, phone, address, products, totalPrice } = req.body;
    console.log(
      `name: ${name}, email: ${email}, phone: ${phone}, address: ${address}, products: ${products}, totalPrice: ${totalPrice}`
    );
    const newOrder = new OrderSchema({
      name,
      email,
      phone,
      address,
      products,
      totalPrice,
    });
    const order = await newOrder.save();
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "POST");
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
