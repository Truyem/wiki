
import React, { useState } from 'react';

interface EditableImageProps {
  src: string;
  alt: string;
  className?: string;
  onImageChange?: (newPath: string) => void;
}

const EditableImage = ({
  src,
  alt,
  className = "w-16 h-16",
  onImageChange
}: EditableImageProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleImageClick = () => {
    if (onImageChange) {
      console.info("Edit image clicked for:", alt);
      // Normally here you would integrate with a file picker
      // For now, we'll just remove the image functionality since it's causing issues
    }
  };

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={src || "/placeholder.svg"} 
        alt={alt} 
        className={`rounded-lg shadow-md max-w-full h-auto mb-4 object-contain ${className}`} 
        onClick={handleImageClick}
      />
      
      {onImageChange && isHovered && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg cursor-pointer transition-opacity"
          onClick={handleImageClick}
        >
          <span className="text-white text-sm font-medium">
            Edit Image
          </span>
        </div>
      )}
    </div>
  );
};

export default EditableImage;
