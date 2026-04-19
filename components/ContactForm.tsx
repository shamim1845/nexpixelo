"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        const data = await res.json();
        setErrorMessage(data.error?.message || "Something went wrong.");
        setStatus("error");
      }
    } catch (error) {
      setErrorMessage("Network error. Please try again later.");
      setStatus("error");
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-10">
        <div className="flex flex-col gap-8">
          {/* Name Field */}
          <div className="flex flex-col gap-2 relative">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full py-2 bg-transparent border-b border-black outline-none focus:border-gray-400 transition-colors"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-2 relative">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full py-2 bg-transparent border-b border-black outline-none focus:border-gray-400 transition-colors"
            />
          </div>

          {/* Phone Field */}
          <div className="flex flex-col gap-2 relative">
            <label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full py-2 bg-transparent border-b border-black outline-none focus:border-gray-400 transition-colors"
            />
          </div>

          {/* Subject Field */}
          <div className="flex flex-col gap-2 relative">
            <label htmlFor="subject" className="text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full py-2 bg-transparent border-b border-black outline-none focus:border-gray-400 transition-colors"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-2 relative">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={1}
              value={formData.message}
              onChange={handleChange}
              className="w-full py-2 bg-transparent border-b border-black outline-none focus:border-gray-400 transition-colors resize-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex flex-col gap-4">
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-fit px-10 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors disabled:bg-gray-400"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {/* Status Messages */}
          <AnimatePresence>
            {status === "success" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-600 text-sm font-medium"
              >
                Message sent successfully!
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-600 text-sm font-medium"
              >
                {errorMessage}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </form>
    </div>
  );
}
