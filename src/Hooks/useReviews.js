import { useEffect, useState } from "react";


const useReviews = () =>{
    const [reviews,setReviews] = useState();
    useEffect(()=>{
        fetch('reviews.json')
        .then(review => review.json())
        .then(review =>setReviews(review))
    },[])
    return[reviews,setReviews];
}

export default useReviews;