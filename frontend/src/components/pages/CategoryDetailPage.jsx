import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to access dynamic route params

const CategoryDetailPage = () => {
  const { category } = useParams(); // Get the category from the URL
  console.log(category); // Log the category to check if it's coming through

  // You can add specific details for each category (e.g., hospitals)
  const renderCategoryDetails = () => {
    switch (category) {
      case 'hospitals':
        return (
          <div>
            <div className='container mx-auto flex flex-wrap items-center justify-between px-6 py-4 object-cover'>
                <img src='/src/assets/images/Hospital_category.png'></img>
            </div>
            <h1 className="text-4xl font-semibold mb-6 text-black-900">Hospitals</h1>
            <p className="text-lg mb-4">
              Discover the best hospitals in your area. We provide a list of trusted healthcare providers, emergency services, and specialist doctors to ensure your well-being.
            </p>
            <div>
              {/* Example of hospital list or information */}
              <ul>
                <li className="text-xl">City General Hospital</li>
                <li className="text-xl">Hope Medical Center</li>
                <li className="text-xl">St. Mary’s Health Care</li>
              </ul>
            </div>
          </div>
        );  
      default:
        return <h1 className="text-4xl">Category not found</h1>;
    }
  };

  return (
    <div className="container mx-auto py-8">
      {renderCategoryDetails()}
    </div>
  );
};

export default CategoryDetailPage;  