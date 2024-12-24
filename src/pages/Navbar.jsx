import React, { useState } from "react";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <nav className="bg-custom-blue text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Left Logo and Company Name */}
          <a className="flex items-center space-x-2" href="#">
            <img src="https://img.pristyncare.com/new_brand%2Felements%2Flogo.svg" alt="Logo" className="w-20 h-20" />
          </a>

          {/* Search and Location */}
          <div className="flex items-center space-x-2">
            <button
              className="flex items-center space-x-1 text-white"
              onClick={toggleModal}
            >
              <i className="bi bi-geo-alt-fill"></i>
              <span>Delhi</span>
            </button>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-lg w-96"
              placeholder="Search disease, doctors, treatment"
            />
            <button className="text-white">
              <i className="bi bi-search"></i>
            </button>
          </div>

          {/* Right Dropdowns and Button */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button className="text-white font-medium">For Patients</button>
              <ul className="absolute left-0 mt-2 bg-white text-black rounded-lg shadow-lg hidden group-hover:block">
                <li><a className="block px-4 py-2 hover:bg-gray-200" href="#">FAQs</a></li>
                <li><a className="block px-4 py-2 hover:bg-gray-200" href="#">Videos</a></li>
                <li><a className="block px-4 py-2 hover:bg-gray-200" href="#">CoWIN</a></li>
                <li><a className="block px-4 py-2 hover:bg-gray-200" href="#">Patient Help</a></li>
                <li><a className="block px-4 py-2 hover:bg-gray-200" href="#">Our Doctors</a></li>
                <li><a className="block px-4 py-2 hover:bg-gray-200" href="#">Our Clinics</a></li>
                <li><a className="block px-4 py-2 hover:bg-gray-200" href="#">BMI Calculator</a></li>
                <li><a className="block px-4 py-2 hover:bg-gray-200" href="#">English Blog</a></li>
                <li><a className="block px-4 py-2 hover:bg-gray-200" href="#">Hindi Blog</a></li>
                <li><a className="block px-4 py-2 hover:bg-gray-200" href="#">Our Reviews</a></li>
                <li><a className="block px-4 py-2 hover:bg-gray-200" href="#">No Cost EMI</a></li>
                <li><a className="block px-4 py-2 hover:bg-gray-200" href="#">Create ABHA</a></li>
                <li><a className="block px-4 py-2 hover:bg-gray-200" href="#">Period Tracker</a></li>
              </ul>
            </div>

            <div className="relative">
              <button className="text-white font-medium">Our Company</button>
              <ul className="absolute left-0 mt-2 bg-white text-black rounded-lg shadow-lg hidden group-hover:block">
                <li><a className="block px-4 py-2 hover:bg-gray-200" href="#">Partner With Us</a></li>
                <li><a className="block px-4 py-2 hover:bg-gray-200" href="#">Doctor Onboarding</a></li>
                <li><a className="block px-4 py-2 hover:bg-gray-200" href="#">Media Coverage</a></li>
                <li><a className="block px-4 py-2 hover:bg-gray-200" href="#">About Us</a></li>
                <li><a className="block px-4 py-2 hover:bg-gray-200" href="#">Careers</a></li>
                <li><a className="block px-4 py-2 hover:bg-gray-200" href="#">Find Clinic</a></li>
              </ul>
            </div>

            <button className="bg-white text-blue-900 font-medium px-4 py-2 rounded-lg shadow">Book Free Appointment</button>
          </div>
        </div>
      </nav>

      {/* Location Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
          <div className="bg-white w-1/3 p-4">
            <button
              className="text-black float-right"
              onClick={toggleModal}
            >
              &#10005;
            </button>
            <h2 className="text-lg font-medium mb-4">Select Your Location</h2>
            <ul className="space-y-2">
              <li className="p-2 border-b">Delhi</li>
              <li className="p-2 border-b">Mumbai</li>
              <li className="p-2 border-b">Bangalore</li>
              <li className="p-2 border-b">Hyderabad</li>
              <li className="p-2 border-b">Chennai</li>
              <li className="p-2 border-b">Kolkata</li>
              {/* Add more cities */}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
