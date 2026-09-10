"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { HudContainer } from "@/components/ui/hud-container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    interest: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interest: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast("Request Submitted", {
        description:
          "We've received your beta request. Our team will be in touch shortly.",
      });
      setFormData({
        name: "",
        email: "",
        organization: "",
        interest: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <HudContainer className="h-full">
      <div className="flex items-center mb-6">
        <Image
          src="/logos/Logo 88.png"
          alt="Gravion Logo"
          width={160}
          height={40}
          className="h-12 w-auto text-primary mr-2"
        />
        <h2 className="text-xl font-bold tracking-wider">GET IN TOUCH</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-card/50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-card/50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="organization">Organization</Label>
          <Input
            id="organization"
            name="organization"
            placeholder="Your company or organization"
            value={formData.organization}
            onChange={handleChange}
            required
            className="bg-card/50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="interest">Area of Interest</Label>
          <Select
            value={formData.interest}
            onValueChange={handleSelectChange}
            required
          >
            <SelectTrigger id="interest" className="bg-card/50">
              <SelectValue placeholder="Select your primary interest" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="defense">Defense & Intelligence</SelectItem>
              <SelectItem value="search">Search & Rescue</SelectItem>
              <SelectItem value="mining">
                Mining & Resource Exploration
              </SelectItem>
              <SelectItem value="research">Research & Development</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us about your specific needs or applications"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="bg-card/50"
          />
        </div>

        <Button
          type="submit"
          className="w-full cursor-pointer"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "SUBMIT"}
        </Button>
      </form>
    </HudContainer>
  );
}
