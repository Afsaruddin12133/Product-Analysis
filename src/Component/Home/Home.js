import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';
import img from '../image/pexels-andy-kuzma-2918521.jpg';
import Review from '../Reviews/Review';

const Home = () => {
    const [reviews,setReviews] = useReviews()
    return (
       <div>
            <div className='md:flex justify-between md:gap-8 md:m-4 md:p-5 m-2 p-2'>
            <div className='md:w-[50%]'>
                <h1 className='text-4xl md:text-6xl md:m-3 text-[#F2A65E]'>Pizzateca is Forever!!</h1>
                <h2 className='md:text-4xl text-2xl md:mx-5  md:m-5 my-3 text-[#647429]'>The best Pizza For You!!</h2>
                <p className='md:my-8 md:p-5 text-xl mb-4'>Chicken sausage Best Pizza Take from Pizzateca.This is the best pizza delivery recode in pizzateca.Pizzateca service is very awesome. Americans eat approximately 100 acres of pizza each day, or 350 slices per second. They are take from Pizzateca. It is a world wide pizza hut.94% of Americans eat pizza regularly from pizzateca.You Have take super Offer from pizzateca. </p>
                <button type='click' className="btn btn-primary md:mx-5 mb-10 inline"><Link to="/order">Order Now
                </Link>
                </button>
            </div>
            <div className='md:w-[50%]'>
                <img className='md:rounded-lg md:h-[445px]' src={img} alt="" />
            </div>
        </div>
        <div>
            <h1 className='text-4xl text-center font-semibold m-5'>Customer Reviews</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 m-8 gap-4 '>
               {
                   (reviews)?  (reviews.length > 3)?  reviews.slice(0,3).map(review => <Review key={review.id} review={review}/>) : "" : ""
                    
               }
            </div>
            <div className='w-[260px] m-auto'>
              <button className="btn btn-wide mx-auto gap-2"><Link to = "/reviews">See Customer review</Link> 
              <ArrowRightIcon className='w-5'/>
              </button>
              </div>
        </div>
       </div>
    );
};

export default Home;