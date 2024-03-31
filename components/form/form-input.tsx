"use client";

import { useFormStatus } from "react-dom";
import { forwardRef } from "react";

import { Label } from "../ui/label";
import { cn } from "@/lib/utils";
import FormErrors from "./form-errors";
import { Input } from "../ui/input";

interface FormInputProps {
  id: string;
  className?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  errors?: Record<string, string[] | undefined>;
  defaultValue?: string;
  onBlur?: () => void;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      id,
      className,
      label,
      errors,
      defaultValue,
      disabled,
      onBlur,
      placeholder,
      required,
      type,
    },
    ref
  ) => {
    const { pending } = useFormStatus();

    return (
      <div className="space-y-2">
        <div className="space-y-1">
          {label && (
            <Label
              htmlFor={id}
              className="block text-xs font-semibold text-neutral-700"
            >
              {label}
            </Label>
          )}
          <Input
            onBlur={onBlur}
            defaultValue={defaultValue}
            disabled={pending || disabled}
            required={required}
            placeholder={placeholder}
            type={type}
            ref={ref}
            id={id}
            name={id}
            className={cn("text-sm px-2 py-1 h-7", className)}
            aria-describedby={`${id}-error`}
          />
        </div>
        <FormErrors id={id} errors={errors} />
      </div>
    );
  }
);

FormInput.displayName = "FormInput";
