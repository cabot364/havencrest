import React, { useState } from 'react';
import GalleryModal from './GalleryModal';
import GalleryImage from '../assets/images/hero3.jpg';
import images from '../../public/assets/images/gallery/Gallery.js';


const Gallery = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    // Initialize your images array with the paths to your images

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const nextImage = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <>
            <div
                className="rounded w-auto cursor-pointer mb-5 hover:opacity-80 transition duration-300 ease-in-out relative"
                onClick={openModal}
                style={{ backgroundImage: `url(${GalleryImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="flex flex-col items-center justify-center h-64 bg-black bg-opacity-0">
                    <h2 className="text-white text-4xl font-bold opacity-50">GALLERY</h2>
                </div>
            </div>
            <GalleryModal
                isOpen={isModalOpen}
                images={images}
                currentIndex={currentIndex}
                onClose={closeModal}
                onNext={nextImage}
                onPrev={prevImage}
            />
        </>
    );
};

export default Gallery;
