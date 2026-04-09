"use client";

import React, { useState } from "react";
import InputField from "../ui/InputField";

interface ContactFormProps {
  inputBgColor?: string;
  layoutClasses?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  inputBgColor = "bg-[#f2efea]",
  layoutClasses = "grid-cols-1"
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validate = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", phone: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "This field is required. Please input your name.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "This field is required. Please input a valid email.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please input a valid email address.";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "This field is required. Please input a phone number.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "This field is required. Please input your message.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div className={`grid gap-5 ${layoutClasses}`}>
        <InputField
          label="Name"
          name="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          inputClassName={inputBgColor}
          required
        />
        <InputField
          label="Email Address"
          name="email"
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          inputClassName={inputBgColor}
          required
        />
        <InputField
          label="Phone"
          name="phone"
          type="tel"
          placeholder="+1 (780) 000-0000"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          inputClassName={inputBgColor}
          required
        />
      </div>

      <InputField
        label="Your Message"
        name="message"
        placeholder="Tell us about your trip..."
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        inputClassName={inputBgColor}
        isTextArea
        required
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className={`btn btn-primary btn-hover w-full justify-center ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
      >
        <span>{isSubmitting ? "Submitting..." : "Submit"}</span>
      </button>

      {submitStatus === "success" && (
        <div className="p-4 bg-green-100 text-green-700 rounded-xl text-center animate-in fade-in zoom-in duration-300">
          Message sent successfully! We'll get back to you soon.
        </div>
      )}
      {submitStatus === "error" && (
        <div className="p-4 bg-red-100 text-red-700 rounded-xl text-center animate-in fade-in zoom-in duration-300">
          Something went wrong. Please try again.
        </div>
      )}
    </form>
  );
};

export default ContactForm;
