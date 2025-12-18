// ReviewCard.jsx
import { useState } from "react";
import { BiSolidStar } from "react-icons/bi";
import { SlStar } from "react-icons/sl";
import { FcLike } from "react-icons/fc";

const ReviewCard = ({ reviews }) => {

    console.log(reviews);
    const { photo, user: name, email, rating, review, date} = reviews;

    return (
        <div className="bg-white rounded p-4 text-black flex flex-col justify-between">

            {/* phot, name, email */}
            <div className="flex items-center gap-5">
                <img src={photo} alt="" className="w-13 h-auto rounded-full" />
                <div>
                    <h2 className="font-semibold text-xl text-gray-900">{name}</h2>
                    <h3 className="text-indigo-950">{email}</h3>
                </div>
            </div>

            {/* ratings */}
            <div className="flex items-center gap-1 mt-3 text-amber-500">
                {
                    [...Array(rating)].map((_, index) => <span key={index}><BiSolidStar /></span>)
                }
                {
                    [...Array(5-rating)].map((_, index) => <span key={index}><SlStar /></span>)
                }
            </div>

            <p className="my-3 text-gray-800">{review}</p>

            <p className="text-gray-500">{date?.slice(0,10)}</p>
            <div className="flex items-center gap-5">
                <button className="w-25 h-9 px-3 py-2 hover:bg-sky-500 rounded border border-gray-600 flex items-center gap-2"><span>Like</span><FcLike /></button>
                <p className="w-25 h-9 px-3 py-2 rounded border border-gray-600 text-gray-500">2 Likes</p>
            </div> 
        </div>
    );
};

export default ReviewCard;