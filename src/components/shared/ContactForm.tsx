import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  insuranceType: string;
  message: string;
  consent: boolean;
};

const ContactForm = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Here you would typically send the data to your backend
    console.log(data);
    toast({
      title: "Form submitted successfully!",
      description: "We'll get back to you as soon as possible.",
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Input
            placeholder="First Name"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        <div>
          <Input
            placeholder="Last Name"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        <div>
          <Input
            type="tel"
            placeholder="Phone"
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <Input
          placeholder="Street Address"
          {...register("address", { required: true })}
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Input placeholder="City" {...register("city", { required: true })} />
          <Input
            placeholder="State"
            {...register("state", { required: true })}
            defaultValue="GA"
          />
          <Input placeholder="ZIP" {...register("zip", { required: true })} />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Insurance Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="auto">Auto Insurance</SelectItem>
              <SelectItem value="home">Home Insurance</SelectItem>
              <SelectItem value="commercial">Commercial Insurance</SelectItem>
              <SelectItem value="bonds">Surety Bonds</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Textarea
        placeholder="How can we help you?"
        {...register("message")}
        className="min-h-[100px]"
      />

      <div className="flex items-center space-x-2">
        <Checkbox id="consent" required />
        <label
          htmlFor="consent"
          className="text-sm text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          I consent to receive calls, texts, and emails about insurance products
          and services. Message and data rates may apply. Message frequency varies.
          Reply STOP to opt-out.
        </label>
      </div>

      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;