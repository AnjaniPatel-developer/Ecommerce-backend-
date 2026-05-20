const mongoose = require("mongoose");

const CheckoutSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User Id Is Required"],
    },

    deliveryAddress: {
      type: Object,
      required: [true, "Delivery Address Is Required"],
    },

    orderStatus: {
      type: String,
      default: "Order Has Been Placed",
    },

    paymentMode: {
      type: String,
      default: "COD",
    },

    paymentStatus: {
      type: String,
      default: "Pending",
    },

    subtotal: {
      type: Number,
      required: [true, "Subtotal Amount Is Required"],
    },

    shipping: {
      type: Number,
      required: [true, "Shipping Amount Is Required"],
    },

    rppid: {
      type: String,
      default: "",
    },

    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: [true, "Product id is required"],
        },

        color: {
          type: String,
          required: [true, "Product Color Is Required"],
        },

        size: {
          type: Number,
          required: [true, "Size Is Required"],
        },

        qty: {
          type: Number,
          required: [true, "Product qty Is Required"],
        },

        total: {
          type: Number,
          required: [true, "Total Amount Is Required"],
        },
      },
    ],
  },
  { timestamps: true }
);

// Custom validation for products array
CheckoutSchema.path("products").validate(function (value) {
  return value.length > 0;
}, "Please Provide At Least One Cart");

const Checkout = mongoose.model("Checkout", CheckoutSchema);

module.exports = Checkout;