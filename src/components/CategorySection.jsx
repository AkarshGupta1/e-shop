import React from 'react'
import MenCategory from '../assets/images/men-img.jpeg';
import WomenCategory from '../assets/images/women-img21.jpg';
import KidsCategory from '../assets/images/kid-img1.jpg';
// import { Categories } from '../assets/mockData';

const categories = [
    {
        title: 'Men',
        imageUrl: MenCategory,
    },
    {
        title: 'Women',
        imageUrl: WomenCategory,
    },
    {
        title: 'Kids',
        imageUrl: KidsCategory,
    },
];

const CategorySection = () => {
  return (
    <>

   <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 '>
      {categories.map((category, index) => (
        <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
            <img src={category.imageUrl} alt="" className='w-full h-full object-cover rounded-lg shadow-md'/>
            <div className='absolute top-20 left-12'>
                <p className='test-xl font-bold'>{category.title}</p>
                <p className='text-gray-600'>View All</p>
            </div>
        </div>
      ))}
    </div>
    </>
    
  );
};

export default CategorySection
