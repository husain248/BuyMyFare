import React from "react";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  className?: string;
  inputClassName?: string;
  isTextArea?: boolean;
  rows?: number;
  labelClassName?: string;
  errorClassName?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  required,
  value,
  onChange,
  error,
  className = "",
  inputClassName = "",
  isTextArea = false,
  rows = 4,
  labelClassName = "",
  errorClassName = "",
}) => {
  const baseInputClasses = `w-full border-none rounded-xl px-4 py-3 text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${
    error ? "ring-2 ring-red-500" : ""
  } ${inputClassName}`;

  return (
    <div className={className}>
      <label
        className={`mb-2 block text-sm font-semibold text-secondary/50 ${labelClassName}`}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {isTextArea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          rows={rows}
          className={baseInputClasses}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          className={baseInputClasses}
        />
      )}
      {error && (
        <p
          className={`mt-1.5 text-xs font-medium text-red-500 animate-in fade-in slide-in-from-top-1 ${errorClassName}`}
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;
