import Link from "next/link";
import Header from "../Header";
import { useState } from "react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center">
      <Header />
      <h1 className="text-4xl font-bold mb-4 mt-20">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-xl text-center">
        Have a project in mind or want to learn more? Fill out the form below or
        email us at{" "}
        <a href="mailto:info@marmotfab.com" className="text-blue-600 underline">
          info@marmotfab.com
        </a>
        .
      </p>
      {!isSubmitted ? (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-gray-50 rounded-xl shadow p-8 flex flex-col gap-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="you@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="How can we help you?"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      ) : (
        <div className="w-full max-w-lg bg-gray-50 rounded-xl shadow p-8 text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h2>
          <p className="text-gray-600">
            We&apos;ve received your message and will reach out to you shortly.
          </p>
        </div>
      )}
    </div>
  );
}
