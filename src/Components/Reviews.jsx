import React from "react";

const Reviews = () => {
  const reviews = [
    { id: 1, user: "Aftab", comment: "Great collaboration!", rating: 5 },
    { id: 2, user: "yash", comment: "Loved the content!", rating: 4 },
  ];

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold">Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id} className="border p-2 mt-2 rounded">
          <p><strong>{review.user}</strong> ({review.rating}⭐)</p>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;