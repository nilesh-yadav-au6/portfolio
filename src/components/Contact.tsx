import React, { useState } from "react";

// Define types for form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  // State for form data
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can send the form data to your backend or do whatever you need
    console.log(formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <div className="border-b bg-primary border-orange justify-between w-full h-full px-6 md:px-16">
      <h1 className="w-full text-center text-purple border-x border-orange font-extrabold text-3xl py-10">
        Contact
      </h1>
      <div className="border-x border-orange flex justify-around flex-wrap-reverse w-full h-full px-16 py-10">
        <div className="w-1/2 mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-xl text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 block w-full h-10 border-orange rounded-md shadow-sm focus:ring-pink focus:border-orange sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xl text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 block w-full h-10 border-orange rounded-md shadow-sm focus:ring-pink focus:border-orange sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xl text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="mt-2 block w-full h-20 border-orange rounded-md shadow-sm focus:ring-pink focus:border-orange sm:text-sm"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
