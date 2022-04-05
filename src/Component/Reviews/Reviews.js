import React from 'react';
import useReviews from '../../Hooks/useReviews';
import Review from './Review';

const Reviews = () => {
    const [reviews,setReviews] = useReviews()
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 m-4 gap-4 '>
          {
            (reviews)?reviews.map(review => <Review key={review.id} review={review}/>):''
          }
        </div>
    );
};

export default Reviews;