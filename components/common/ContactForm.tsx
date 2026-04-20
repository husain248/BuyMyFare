"use client";

import React, { useState } from "react";
import InputField from "../ui/InputField";

interface ContactFormProps {
  inputBgColor?: string;
  layoutClasses?: string;
  size?: "default" | "compact";
}

const ContactForm: React.FC<ContactFormProps> = ({
  inputBgColor = "bg-[#f2efea]",
  layoutClasses = "grid-cols-1",
  size = "default",
}) => {
  const isCompact = size === "compact";
  const fieldInputClass = isCompact
    ? `${inputBgColor} rounded-lg px-3 py-2.5 text-xs placeholder:text-xs`
    : inputBgColor;
  const fieldLabelClass = isCompact ? "mb-1 text-xs font-medium" : "";
  const fieldErrorClass = isCompact ? "text-[11px]" : "";
  const formSpacingClass = isCompact ? "space-y-3" : "space-y-5";
  const submitButtonClass = isCompact
    ? "w-full justify-center !rounded-lg !px-4 !py-2.5 text-xs"
    : "w-full justify-center";
  const statusMessageClass = isCompact ? "p-3 text-xs" : "p-4";

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
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
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

    try {
      setIsSubmitting(true);
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok || !data?.success) {
        throw new Error("Failed to submit form.");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  return (
    <form className={formSpacingClass} onSubmit={handleSubmit} noValidate>
      <div className={`grid ${layoutClasses}`}>
        <InputField
          label="Name"
          name="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          inputClassName={fieldInputClass}
          labelClassName={fieldLabelClass}
          errorClassName={fieldErrorClass}
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
          inputClassName={fieldInputClass}
          labelClassName={fieldLabelClass}
          errorClassName={fieldErrorClass}
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
          inputClassName={fieldInputClass}
          labelClassName={fieldLabelClass}
          errorClassName={fieldErrorClass}
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
        inputClassName={fieldInputClass}
        labelClassName={fieldLabelClass}
        errorClassName={fieldErrorClass}
        isTextArea
        rows={isCompact ? 3 : 4}
        required
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className={`btn btn-primary btn-hover ${submitButtonClass} ${isSubmitting ? "cursor-not-allowed opacity-70" : ""}`}
      >
        <span>{isSubmitting ? "Submitting..." : "Submit"}</span>
      </button>

      {submitStatus === "success" && (
        <div
          className={`${statusMessageClass} rounded-xl bg-green-100 text-center text-green-700 animate-in fade-in zoom-in duration-300`}
        >
          Message sent successfully! We'll get back to you soon.
        </div>
      )}
      {submitStatus === "error" && (
        <div
          className={`${statusMessageClass} rounded-xl bg-red-100 text-center text-red-700 animate-in fade-in zoom-in duration-300`}
        >
          Something went wrong. Please try again.
        </div>
      )}
    </form>
  );
};

export default ContactForm;
