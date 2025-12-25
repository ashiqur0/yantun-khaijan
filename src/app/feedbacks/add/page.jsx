import { postFeedback } from '@/action/server/feedback';
import FeedbackForms from '@/components/forms/FeedbackForms';
import React from 'react';

const AddFeedback = () => {
    return (
        <div>
            <h1>Add Feedback</h1>
            <FeedbackForms postFeedback={postFeedback} />
        </div>
    );
};

export default AddFeedback;