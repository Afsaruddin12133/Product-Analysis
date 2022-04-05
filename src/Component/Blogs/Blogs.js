import React from 'react';

const Blogs = () => {
    return (
       <div className='m-8 md:flex md:justify-around '>
        <div className='border w-[500px] p-3'>
        <h1 className='text-4xl text-bold mt-10 mb-5'>Q: What is Context Api?</h1>
        <h3 className='text-xl'>Ans: If you want to pass some data in your react application without props you can pass your data globaly in you and child component using React Context Api. In Short Context Api is a way for a React app to effectively produce global variables that can be passed around.Fast of all you can create createContext Hooks in your apps. then you can wrape in your aria conponent it another hook .Then you pass your data anywhere.</h3>
        </div>
        <div className='border w-[500px] p-3'>
        <h1 className='text-4xl text-bold mt-10 mb-5'>Q: What is Semantic Element?</h1>
        <h3 className='text-xl'>Ans: Semantic tag denote by clear meaning devloper and there team.Semantic tag look like good. It is a usderstanding and mening full element. For Example form , table , and article etc.this all tag are semantic tag.</h3>
        </div>
       </div>
    );
};

export default Blogs;