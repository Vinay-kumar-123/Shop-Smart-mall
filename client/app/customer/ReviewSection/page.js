"use client";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ReviewSection() {
  const [reviews, setReviews] = useState([
    {
      author: "Amit Sharma",
      date: "2 Sep 2025",
      rating: 5,
      text: "Excellent product! Quality is amazing and delivery was super fast.",
    },
    {
      author: "Priya Verma",
      date: "28 Aug 2025",
      rating: 4,
      text: "Good quality but size runs a little small. Overall happy with purchase.",
    },
  ]);

  const [formData, setFormData] = useState({ name: "", text: "", rating: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.text || formData.rating === 0) return;

    const newReview = {
      author: formData.name,
      date: new Date().toLocaleDateString("en-IN"),
      rating: formData.rating,
      text: formData.text,
    };

    setReviews([newReview, ...reviews]);
    setFormData({ name: "", text: "", rating: 0 });
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      {/* Add Review Form */}
      <h2 className="text-xl font-bold mb-4">Add a Review</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md mb-8"
      >
        {/* Name */}
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full border rounded-md p-2 mb-4 focus:ring-2 focus:ring-indigo-500"
        />

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon
              key={star}
              onClick={() => setFormData({ ...formData, rating: star })}
              className={classNames(
                formData.rating >= star ? "text-yellow-500" : "text-gray-300",
                "h-7 w-7 cursor-pointer"
              )}
            />
          ))}
        </div>

        {/* Review Text */}
        <textarea
          placeholder="Write your review..."
          value={formData.text}
          onChange={(e) => setFormData({ ...formData, text: e.target.value })}
          className="w-full border rounded-md p-2 mb-4 focus:ring-2 focus:ring-indigo-500"
          rows={4}
        />

        {/* Submit */}
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Submit Review
        </button>
      </form>

      {/* Reviews List */}
      <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
      <div className="grid gap-6">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg p-4 border"
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold">{review.author}</h4>
              <span className="text-xs text-gray-500">{review.date}</span>
            </div>

            {/* Stars */}
            <div className="flex mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  className={classNames(
                    review.rating >= star ? "text-yellow-500" : "text-gray-300",
                    "h-5 w-5"
                  )}
                />
              ))}
            </div>

            <p className="text-gray-700 text-sm">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
