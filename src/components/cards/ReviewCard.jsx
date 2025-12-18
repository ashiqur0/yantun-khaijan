// ReviewCard.jsx
import { useState } from "react";

const ReviewCard = ({ review, currentUserEmail }) => {
  const {
    user,
    photo,
    rating,
    review: comment,
    likes,
    date,
  } = review;

  // check if current user already liked
  const [liked, setLiked] = useState(
    likes.includes(currentUserEmail)
  );

  const [likeCount, setLikeCount] = useState(likes.length);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
      {/* User Info */}
      <div className="flex items-center gap-4">
        <img
          src={photo}
          alt={user}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <h3 className="font-semibold text-gray-800">{user}</h3>
          <p className="text-xs text-gray-500">
            {new Date(date).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mt-3">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-lg ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-700 text-sm mt-3 leading-relaxed">
        {comment}
      </p>

      {/* Like Section */}
      <div className="flex items-center gap-3 mt-4">
        <button
          onClick={handleLike}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition
            ${
              liked
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }
          `}
        >
          👍 Like
        </button>

        <span className="text-sm text-gray-500">
          {likeCount} likes
        </span>
      </div>
    </div>
  );
};

export default ReviewCard;