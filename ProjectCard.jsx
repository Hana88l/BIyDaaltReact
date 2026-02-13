import { useState } from "react";
import { FaHeart } from "react-icons/fa";

function ProjectCard({ image, title, description }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-6">
  
      <div className="relative">
        <img src={image} alt={title} className="w-full rounded-md" />
        
        <button
          type="button"
          onClick={() => setLiked(!liked)}
          className="absolute bottom-2 right-2 text-xl transition-colors duration-300"
        >
          <FaHeart className={liked ? "text-red-700" : "text-red-300"} />
        </button>
      </div>

    
      <div className="mt-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;