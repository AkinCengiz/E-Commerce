const mongoose = require("mongoose");
 
const couponSchema = new mongoose.Schema(
  {
    code: { type: String, required: true, unique : true },
    discount: { type: Number, required: true },
    expired: { type: Date, required: true },
    count: { type: Number, required: true },
  },
  { timestamps: true }
);
 
const Coupon = mongoose.model("Coupon", couponSchema);
 
module.exports = Coupon;
 
 