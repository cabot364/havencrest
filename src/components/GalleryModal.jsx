import React, { useEffect } from 'react';

const GalleryModal = ({ isOpen, images, currentIndex, onClose, onNext, onPrev }) => {
  if (!isOpen || !images.length) return null;

  // Close modal when clicking outside the image
  const handleBackdropClick = (event) => {
    event.stopPropagation();
    onClose();
  };

  // Prevent closing modal when clicking inside the modal content
  const handleModalContentClick = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    // Add event listener to close modal on escape key press
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Cleanup the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={handleBackdropClick}>
      <div className="relative" onClick={handleModalContentClick}>
        <img src={images[currentIndex]} alt="Gallery" className="w-full md:max-w-[600px] max-h-[600px]" />
        {currentIndex > 0 && (
          <button onClick={onPrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-4xl opacity-50">&#60;</button>
        )}
        {currentIndex < images.length - 1 && (
          <button onClick={onNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-4xl opacity-50">&#62;</button>
        )}
      </div>
    </div>
  );
};

export default GalleryModal;
