
import mongoose from "mongoose";

const reviewsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
    required: true,
  },

  review: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Reviews = mongoose.model("reviews", reviewsSchema);
export default Reviews;
