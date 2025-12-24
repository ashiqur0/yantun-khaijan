import React, { useState } from 'react';
import { Heart, MessageSquare, MoreVertical } from 'lucide-react';
import Image from 'next/image';

const ReviewCard = ({ data }) => {
    const [likes, setLikes] = useState(data.likes.length);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        setLikes(prev => isLiked ? prev - 1 : prev + 1);
        setIsLiked(!isLiked);
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    };

    return (
        <div className="max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 p-5 font-sans">
            {/* Header: User Info */}
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                    {/* <img
                        src={data.photo}
                        alt={data.user}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-50"
                    /> */}

                    <Image
                        width={56}
                        height={56}
                        src={data.photo}
                        alt={data.user}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-50"
                    />
                    <div>
                        <h3 className="font-bold text-gray-900 text-sm leading-tight">{data.user}</h3>
                        <p className="text-xs text-gray-500">{formatDate(data.date)}</p>
                    </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical size={20} />
                </button>
            </div>

            {/* Rating Stars */}
            <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < data.rating ? "text-yellow-400" : "text-gray-200"}>
                        ★
                    </span>
                ))}
            </div>

            {/* Review Content */}
            <div className="mb-6">
                <p className="text-gray-700 text-sm leading-relaxed">
                    {data.review}
                </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6 pt-4 border-t border-gray-50">
                <button
                    onClick={handleLike}
                    className={`flex items-center gap-2 text-sm font-medium transition-colors ${isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                        }`}
                >
                    <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
                    <span>{likes}</span>
                </button>

                <button className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-500">
                    <MessageSquare size={18} />
                    <span>Reply</span>
                </button>
            </div>
        </div>
    );
};

export default ReviewCard;