
import React, { useEffect, useState } from 'react';
import Proudct from './proudct';

const Order = () => {
    const [pizzas , setPizzas] = useState()
    useEffect(()=>{
        fetch('pizza.json')
        .then(data => data.json())
        .then(data =>setPizzas(data))
    },[])
    return (
       <div className='grid grid-cols-1 md:grid-cols-3 m-4 gap-4'>
           {
               (pizzas)? pizzas.map(pizza => <Proudct pizza ={pizza} key ={pizza.id}></Proudct>) : ""
           }
       </div>
    );
};

export default Order;