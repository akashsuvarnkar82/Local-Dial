import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const validateForm = () => {
    const formErrors = {};
    if (!formData.name.trim()) formErrors.name = "Name is required.";
    if (!formData.email.includes("@")) formErrors.email = "Invalid email.";
    if (!/^\d{10}$/.test(formData.phone))
      formErrors.phone = "Phone must be 10 digits.";
    if (!formData.message.trim())
      formErrors.message = "Message cannot be empty.";
    return formErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    // Simulating form submission
    setTimeout(() => {
      console.log("Form submitted successfully:", formData);
      setSubmitted(true);
      setLoading(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 2000);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center py-10 ${
        darkMode ? "bg-gray-900 text-white" : "bg-blue-200 text-gray-900"
      }`}
    >
      {/* Toggle Dark Mode */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-5 right-5 px-4 py-2 bg-gray-600 text-white rounded-full"
      >
        {darkMode ? "Light Mode 🌞" : "Dark Mode 🌙"}
      </button>

      <div
        className={`rounded-lg p-6 max-w-md w-full shadow-lg ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Contact Us
        </h2>
        {submitted ? (
          <div className="text-center">
            <p className="text-green-500 text-lg">
              🎉 Thank you for your message! We will get back to you shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Submit Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-4">
              <label className="block font-semibold mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 ${
                  darkMode ? "focus:ring-blue-500" : "focus:ring-blue-300"
                }`}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 ${
                  darkMode ? "focus:ring-blue-500" : "focus:ring-blue-300"
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone Field */}
            <div className="mb-4">
              <label className="block font-semibold mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 ${
                  darkMode ? "focus:ring-blue-500" : "focus:ring-blue-300"
                }`}
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label className="block font-semibold mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 ${
                  darkMode ? "focus:ring-blue-500" : "focus:ring-blue-300"
                }`}
                placeholder="Write your message here..."
                rows="4"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-2 rounded-lg font-bold hover:bg-blue-600 transition disabled:bg-blue-300"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
