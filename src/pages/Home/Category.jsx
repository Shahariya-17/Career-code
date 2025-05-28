import React, { useEffect, useRef, useState } from 'react';

const categories = [
  { icon: '📣', title: 'Marketing & Sale', jobs: 1526, bg: 'from-green-400 to-blue-500' },
  { icon: '🎧', title: 'Customer Help', jobs: 185, bg: 'from-purple-400 to-pink-500' },
  { icon: '🏦', title: 'Finance', jobs: 168, bg: 'from-yellow-400 to-orange-500' },
  { icon: '💡', title: 'Software', jobs: 1856, bg: 'from-indigo-400 to-cyan-500' },
  { icon: '👨‍💼', title: 'Human Resource', jobs: 165, bg: 'from-pink-400 to-red-500' },
  { icon: '🎨', title: 'Design & Creative', jobs: 312, bg: 'from-teal-400 to-blue-600' },
  { icon: '🧪', title: 'Research & Dev', jobs: 90, bg: 'from-blue-400 to-purple-600' },
];

const Category = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const scrollAmount = useRef(0);

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    let animationId;
    let lastTimestamp = 0;
    const scrollSpeed = 0.5;

    const autoScroll = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!isHovered && slider) {
        if (scrollAmount.current >= slider.scrollWidth - slider.clientWidth) {
          scrollAmount.current = 0;
        } else {
          scrollAmount.current += scrollSpeed * (delta / 16);
        }
        slider.scrollTo({ left: scrollAmount.current, behavior: 'auto' });
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Browse by Category</h2>
          <p className="text-gray-500">Explore top job categories. 800+ new jobs every day.</p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-6 hide-scrollbar scroll-smooth"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              paddingLeft: '1rem',
              paddingRight: '1rem',
            }}
          >
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-64 p-6 bg-white rounded-3xl shadow-md hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-gray-200 text-center" // Added text-center here
                style={{ margin: '0.25rem 0' }}
              >
                <div
                  className={`text-4xl mb-4 h-16 w-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r ${cat.bg} text-white shadow-lg`}
                >
                  {cat.icon}
                </div>
                <h3 className="font-semibold text-xl text-gray-800 mb-1">{cat.title}</h3>
                <p className="text-sm text-gray-500">{cat.jobs} Jobs Available</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;