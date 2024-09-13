const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      require: true,
    },
  },
  { timeStamp: true }
);

const Items = mongoose.model("Items", itemSchema);

module.exports = Items;
