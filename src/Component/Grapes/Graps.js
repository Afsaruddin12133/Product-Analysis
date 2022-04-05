import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Graps = () => {
  const data =   [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
return (
  <div className='gap-8'>
     <div className='md:w-[800px] md:m-auto md:mt-10 w-[400px]'>
   <BarChart width={800} height={250} data={data}>
  <CartesianGrid strokeDasharray="3 4" />
  <XAxis dataKey="month" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="investment" fill="#8884d8" />
  <Bar dataKey="sell" fill="#82ca9d" />
  <Bar dataKey="revenue" fill="#82ca9d" />
</BarChart>
      </div>
    <div className='md:w-[800px] md:m-auto md:mt-10 w-[400px]'>
    <PieChart width={800} height={250}>
    <Tooltip />
  <Pie data={data} dataKey="investment" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
  <Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
  <Pie data={data} dataKey="sell" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Bar dataKey="investment" fill="#82ca9d" />
  <Bar dataKey="sell" fill="#8884d8" />
  <Bar dataKey="revenue" fill="#82ca9d" />
</PieChart>
    </div>
</div>
);
};

export default Graps;



