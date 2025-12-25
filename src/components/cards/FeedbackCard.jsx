import React from 'react';
import { Pencil, Trash2, MessageSquare } from 'lucide-react';

const FeedbackCard = ({ f }) => {
    const { message, _id } = f;

    return (
        <div className="max-w-md bg-white border border-gray-200 rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
                <div className="flex justify items-center gap-2">
                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                        <MessageSquare size={18} />
                    </div>
                    <span className="text-xs font-mono text-gray-400">ID: 2232231</span>
                </div>
                <div className='text-gray-500'>
                    {new Date(f.date).toLocaleDateString()}, {' '}
                    {new Date(f.date).toLocaleTimeString()}
                </div>
            </div>

            <p className="text-gray-700 text-base leading-relaxed mb-6">
                {message}
            </p>

            <div className="flex gap-3 border-t pt-4">
                <button
                    // onClick={() => onUpdate(_id)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg font-medium hover:bg-indigo-100 transition-colors"
                >
                    <Pencil size={16} />
                    Update
                </button>
                <button
                    // onClick={() => onDelete(_id)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg font-medium hover:bg-red-100 transition-colors"
                >
                    <Trash2 size={16} />
                    Delete
                </button>
            </div>
        </div>
    );
};

export default FeedbackCard;