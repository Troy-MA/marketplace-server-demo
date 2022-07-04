const mongoose = require("mongoose");
const { productSchema } = require("./product");

const wishListShema = mongoose.Schema({
    products:{
        product: productSchema,
    },
    totalAmount: {
        type: Number,
        required: true,
      },
 
      userId: {
        required: true,
        type: String,
      },
     addedAt: {
        type: Number,
        required: true,
      },
})
const WishList = mongoose.model("WishList", wishListShema);
module.exports = WishList;