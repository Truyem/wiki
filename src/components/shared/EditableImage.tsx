import React from 'react';
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
  return <div className="relative group">
      <img src={src || "/placeholder.svg"} alt={alt} className="rounded-lg shadow-md max-w-full h-auto mb-4" />
      
    </div>;
};
export default EditableImage;