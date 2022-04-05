import React from 'react';

const Proudct = (props) => {
    const {img,name,price} = props.pizza
    return (
        <div className='shadow-lg rounded-xl p-5'>
        <img  className='w-[100%] mx-auto' src={img} alt="" id='productImg'/>
        <h2 className='text-xl font-semibold my-3 '>{name}</h2>
        <h4>Price :${price}</h4>
        <br />
        <button className="btn btn" >Buy Now
        </button>
    </div>
    );
};

export default Proudct;