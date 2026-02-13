import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PageIndicator = ({ sections }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!sections) return;

    sections.forEach((section, index) => {
      if (!section) return;
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        onEnter: () => setCurrentPage(index + 1),
        onEnterBack: () => setCurrentPage(index + 1),
      });
    });
  }, [sections]);

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans text-2xl font-semibold text-gray-800 tabular-nums">
      {currentPage}/{sections.length}
    </div>
  );
};

export default PageIndicator;