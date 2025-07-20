const { Schema } = require("mongoose");

const userSchema = new Schema({
  email: String,
  username: String,
  password: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "order",
    },
  ],
});

module.exports = { userSchema };
