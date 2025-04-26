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
      <img src={src || "/placeholder.svg"} alt={alt} className="" />
      
    </div>;
};
export default EditableImage;