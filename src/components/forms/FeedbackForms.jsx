'use client'
import React from 'react';

const FeedbackForms = () => {
    return (
        <div>
            <form>
                <textarea
                    className='w-xl border border-dashed'
                    name='message'
                    cols='30'
                    rows={'10'}
                />

                <button className='btn'>Add Feedback</button>
            </form>
        </div>
    );
};

export default FeedbackForms;