import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaHeart, FaUserCircle } from "react-icons/fa";

const projects = [
  {
    title: "TinyCraft",
    description: "Jewellery Store Website.",
    image: "/image/TinyCraft.png",
    related: [2, 3, 4],
  },
  {
    title: "Cup",
    description: "Mini website on Figma.",
    image: "/image/Cup.png",
    related: [0, 2, 5],
  },
  {
    title: "Portfolio Website",
    description: "Portfolio website on Figma.",
    image: "/image/Portfolio.png",
    related: [1, 4, 7],
  },
  {
    title: "Flower",
    description: "Flower store website on Figma.",
    image: "/image/Flower.png",
    related: [0, 5, 6],
  },
  {
    title: "Collection",
    description: "New Collection store on Figma.",
    image: "/image/Collection.png",
    related: [2, 6, 7],
  },
  {
    title: "Legora",
    description: "Legora clone website on HTML.",
    image: "/image/Legora.png",
    related: [0, 3, 7],
  },
  {
    title: "Yucca",
    description: "Yucca coffee shop website on HTML.",
    image: "/image/Yucca.png",
    related: [1, 4, 5],
  },
  {
    title: "Haven",
    description: "Haven spaceship website on HTML.",
    image: "/image/Haven.png",
    related: [0, 2, 3],
  },
  {
    title: "Cabana",
    description: "Cabana clone website on React.",
    image: "/image/Cabana.png",
    related: [1, 2, 3],
  },
  {
    title: "Auriga",
    description: "Auriga spaceship clone website on React.",
    image: "/image/Auriga.png",
    related: [3, 6, 1],
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects[id];

  const now = new Date();
  const options = { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" };
  const formattedDate = now.toLocaleString("en-US", options);

  const relatedProjects = project.related.map((idx) => projects[idx]);

  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Comment submitted:", comment);
    setComment("");
    alert("Comment sent to email! Thank you for your comment.");
  };

  return (
    <div className="max-w-6xl mx-auto p-8 border border-gray-300 rounded-lg relative mt-12 mb-12">
    
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 right-4 text-3xl text-gray-600 hover:text-gray-800 z-50"
      >
        ✕
      </button>

      
      <div className="flex items-center text-gray-600 text-sm mb-4">
        <span className="mr-2">👤 Admin</span>
        <span className="mr-2">{formattedDate}</span>
      </div>

      
      <h1 className="text-4xl font-bold mb-8">{project.title}</h1>

    
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-[500px] object-cover rounded-md mb-8"
      />

      
      <p className="text-gray-700 mb-10 text-lg">{project.description}</p>

      
      <div className="grid grid-cols-3 gap-8 mb-12">
        {relatedProjects.map((p, i) => (
          <SmallProject key={i} project={p} index={projects.indexOf(p)} />
        ))}
      </div>

    
      <form
        onSubmit={handleSubmit}
        className="flex items-center border-t border-gray-200 pt-4 mb-8"
      >
        <FaUserCircle className="text-3xl text-gray-400 mr-3" />
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment..."
          className="flex-1 border-none focus:ring-0 text-base"
          required
        />
        <button
          type="submit"
          className="ml-3 text-blue-600 font-semibold hover:text-blue-800"
        >
          Post
        </button>
      </form>

      
      <div className="flex space-x-8 text-blue-600 font-medium text-lg">
        <a href="mailto:tsetseed666@gmail.com">Email</a>
        <a
          href="https://github.com/Hana88l"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

function SmallProject({ project, index }) {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/project/${index}`)}
      className="relative border border-gray-200 rounded-md p-4 text-center cursor-pointer hover:shadow-lg transition"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-[300px] object-cover rounded-md mb-4"
      />
      <p className="text-lg font-medium">{project.title}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setLiked(!liked);
        }}
        className="absolute bottom-4 right-4 text-2xl"
      >
        <FaHeart className={liked ? "text-red-500" : "text-gray-400"} />
      </button>
    </div>
  );
}

export default ProjectDetail;