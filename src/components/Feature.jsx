import React from 'react';
import PropTypes from 'prop-types';

const Feature = ({ image, title, description }) => {
    return (
        <div className="flex flex-col items-center justify-center text-[#F7F7F7]">
            <img src={image} alt={title} className="w-80 md:w-60 h-60 object-cover rounded"/>
            <h2 className="text-[rgb(201,170,121)] text-2xl font-light mt-5">{title}</h2>
            <hr className="w-1/4 h-0.5 my-5"/>
            <p className="leading-relaxed text-gray-300 text-center">{description}</p>
        </div>
    );
}

Feature.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Feature;

