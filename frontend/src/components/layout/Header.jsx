import React, { useEffect, useState } from "react";

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Advertisement images
  const images = [
    "https://static.vecteezy.com/system/resources/previews/008/407/977/non_2x/realistic-celery-ads-horizontal-poster-vector.jpg",
    "https://i.pinimg.com/736x/b7/f5/ce/b7f5ce68ff3166b351a6e3c6ee934020.jpg",
    "https://img.freepik.com/free-vector/flat-design-grocery-store-sale-banner_23-2151069702.jpg",
    "https://www.shutterstock.com/image-vector/banner-announcing-mega-discount-half-260nw-1962489325.jpg",
  ];

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <header className="bg-white text-gray-800 rounded-lg py-8 shadow-lg w-full">
      {/* Title Section */}
      <h1 className="text-3xl font-extrabold text-center text-blue-600">
        Connecting You to Trusted Local Services, Anytime, Anywhere!
      </h1>
      <p className="text-lg text-center text-gray-600 mt-2">
        Find and connect with the best local businesses in your area. Support
        local, thrive together.
      </p>

      {/* Advertisement Slideshow */}
      <div className="container mx-auto px-4 mt-8">
        <div className="flex justify-center">
          <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Image Container */}
            <div className="h-64 overflow-hidden relative">
              <img
                src={images[currentIndex]}
                alt={`Advertisement ${currentIndex + 1}`}
                className="w-full h-full object-cover rounded-lg transition-all duration-500 ease-in-out"
              />
              {/* Optional Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
                <h3 className="text-lg text-white font-bold">
                  {/* Ad {currentIndex + 1} */}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-8 text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg font-bold hover:bg-blue-700 transition-all">
          Explore More
        </button>
      </div>
    </header>
  );
};

export default Header;
