import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
const CourseCard = ({ img, className = '', description , id , title}) => {
  return (
       <Link to={`/courses/${id}`} >
    <div id={id} className={`bg-white max-w-sm w-full rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105 duration-300 h-[400px] ${className}`}>
      <img src={img} alt="Card" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="text-gray-700 text-sm sm:text-base">{description}</p>
        <Button className="mt-4">Enroll Now</Button>
      
      
      </div>
    </div>
      </Link>
  );
};

export default CourseCard;