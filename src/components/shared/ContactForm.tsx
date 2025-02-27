
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  insuranceTypes: string[];
  message: string;
  consent: boolean;
};

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedInsuranceTypes, setSelectedInsuranceTypes] = useState<string[]>([]);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<FormData>({
    defaultValues: {
      insuranceTypes: [],
    }
  });

  const handleInsuranceTypeChange = (value: string) => {
    // Check if value is already selected
    if (selectedInsuranceTypes.includes(value)) {
      // Remove it
      const updated = selectedInsuranceTypes.filter(type => type !== value);
      setSelectedInsuranceTypes(updated);
      setValue("insuranceTypes", updated);
    } else {
      // Add it
      const updated = [...selectedInsuranceTypes, value];
      setSelectedInsuranceTypes(updated);
      setValue("insuranceTypes", updated);
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const dbData = {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        city: data.city,
        state: data.state,
        zip: data.zip,
        insurance_type: data.insuranceTypes.join(", "),
        message: data.message,
        consent: data.consent
      };
      const { error: supabaseError } = await supabase.from("contact_submissions").insert(dbData);
      if (supabaseError) throw supabaseError;
      console.log("Sending email notification...");
      const {
        data: emailResponse,
        error: emailError
      } = await supabase.functions.invoke("send-contact-notification", {
        body: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          message: data.message,
          insuranceType: data.insuranceTypes.join(", ")
        }
      });
      console.log("Email response:", emailResponse);
      if (emailError) {
        console.error("Email error:", emailError);
        throw emailError;
      }
      toast({
        title: "Form submitted successfully!",
        description: "We'll get back to you as soon as possible."
      });
      reset();
      setSelectedInsuranceTypes([]);
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error submitting form",
        description: error.message || "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Input placeholder="First Name" {...register("firstName", { required: true })} />
          {errors.firstName && <span className="text-red-500 text-sm">This field is required</span>}
        </div>
        <div>
          <Input placeholder="Last Name" {...register("lastName", { required: true })} />
          {errors.lastName && <span className="text-red-500 text-sm">This field is required</span>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Input type="email" placeholder="Email" {...register("email", { required: true })} />
          {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
        </div>
        <div>
          <Input 
            type="tel" 
            placeholder="Phone (Optional)" 
            {...register("phone")} 
            aria-label="Phone number (Optional)"
          />
        </div>
      </div>

      <div className="space-y-4">
        <Input placeholder="Street Address" {...register("address", { required: true })} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Input placeholder="City" {...register("city", { required: true })} />
          <Input placeholder="State" {...register("state", { required: true })} defaultValue="GA" />
          <Input placeholder="ZIP" {...register("zip", { required: true })} />
          
          <div className="col-span-2 md:col-span-4">
            <div className="text-sm font-medium mb-2">Insurance Type (Select all that apply)</div>
            <div className="flex flex-wrap gap-2">
              {["auto", "home", "commercial", "bonds", "other"].map((type) => {
                const isSelected = selectedInsuranceTypes.includes(type);
                const displayNames: Record<string, string> = {
                  auto: "Auto Insurance",
                  home: "Home Insurance",
                  commercial: "Commercial Insurance",
                  bonds: "Surety Bonds",
                  other: "Other"
                };
                
                return (
                  <div
                    key={type}
                    onClick={() => handleInsuranceTypeChange(type)}
                    className={`px-3 py-2 rounded-full text-sm cursor-pointer border transition-colors ${
                      isSelected 
                        ? "border-sky-600 bg-sky-100 text-sky-800" 
                        : "border-gray-300 hover:border-sky-400 hover:bg-gray-50"
                    }`}
                  >
                    {displayNames[type]}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Textarea placeholder="How can we help you?" {...register("message")} className="min-h-[100px]" />

      <div className="flex items-center space-x-2">
        <Checkbox id="consent" onCheckedChange={checked => setValue("consent", checked as boolean)} required />
        <label htmlFor="consent" className="text-sm text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          I consent to receive calls, emails, and/or SMS/MMS for insurance related service and marketing purposes from Standard Financial Group, LLC, including the use of automated technology, artificial voice messages, or pre-recorded calls. Consent is not required to obtain any service or product. Message frequency varies and data rates may apply. Reply STOP to opt-out.
          <Link to="/privacy" className="text-sky-600 hover:underline ml-1">Privacy Policy</Link>
        </label>
      </div>

      <Button type="submit" className="w-full bg-sky-600 hover:bg-sky-700" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
};

export default ContactForm;
