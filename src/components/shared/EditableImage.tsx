
import React from 'react';

interface EditableImageProps {
  src: string;
  alt: string;
  className?: string;
  onImageChange?: (newPath: string) => void;
}

const EditableImage = ({ src, alt, className = "w-16 h-16", onImageChange }: EditableImageProps) => {
  return (
    <div className="relative group">
      <img 
        src={src || "/placeholder.svg"}
        alt={alt}
        className={`${className} rounded-lg shadow-md object-cover`}
      />
      <button 
        onClick={() => {
          // This will trigger when user clicks the overlay
          console.log("Edit image clicked for:", alt);
        }}
        className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-sm rounded-lg"
      >
        Change Image
      </button>
    </div>
  );
};

export default EditableImage;
