import { MenuIcon } from '@heroicons/react/solid';
import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../image/Pizzateca Logo - Original - 5000x5000.png';


const Nav = () => {
    const navinfo = [
        {id:1,name:'Home',link:"/"},
        {id:2,name:'Order',link:"/order"},
        {id:2,name:'Reviews',link:"/reviews"},
        {id:3,name:'Chart',link:"/graps"},
        {id:4,name:'Blogs',link:"/blogs"},
        {id:5,name:'About',link:"/about"}
    ];
  const active =  ({ isActive }) => {
        return {
          display: "block",
          margin: "1rem 0",
          color: isActive ? "red" : "",

        };
      }
    return (
        <div className='flex justify-between md:p-2 p-3 sticky top-0 bg-white '>
            <div className='w-[220px] h-[50px]'>
                <img width= "100%" src={img} alt="" />
            </div>
          <div className='my-auto'>
              <MenuIcon className='w-20 md:hidden'/>
              <div className='hidden md:block'>
              <nav className='flex'>
               {
                navinfo.map(info => <NavLink style={active} className='px-5 py-3   rounded hover:bg-slate-600 hover:text-white flex' key={info.id} to={info.link}>{info.name}</NavLink>)
               }
           </nav>
              </div>
          
          </div>
        </div>
    );
};

export default Nav;