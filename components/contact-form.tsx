"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import Image from "next/image";
import { Loader2, Send } from "lucide-react";
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
    <HudContainer className="h-full p-6 md:p-10 bg-card/60 shadow-[0_30px_80px_-30px_rgba(0,255,255,0.3)]">
      <div className="absolute inset-x-0 top-0 glow-line" />

      <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
        <Image
          src="/logos/Logo 88.png"
          alt="Gravion Logo"
          width={160}
          height={40}
          className="h-12 w-auto rounded-sm ring-1 ring-primary/20"
        />
        <div>
          <div className="eyebrow mb-1">Beta Access Request</div>
          <h2 className="text-xl font-bold tracking-wider">GET IN TOUCH</h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className={LABEL_CLASS}>
              Full Name
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className={FIELD_CLASS}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className={LABEL_CLASS}>
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className={FIELD_CLASS}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="organization" className={LABEL_CLASS}>
            Organization
          </Label>
          <Input
            id="organization"
            name="organization"
            placeholder="Your company or organization"
            value={formData.organization}
            onChange={handleChange}
            required
            className={FIELD_CLASS}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="interest" className={LABEL_CLASS}>
            Area of Interest
          </Label>
          <Select
            value={formData.interest}
            onValueChange={handleSelectChange}
            required
          >
            <SelectTrigger id="interest" className={FIELD_CLASS}>
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
          <Label htmlFor="message" className={LABEL_CLASS}>
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us about your specific needs or applications"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`${FIELD_CLASS} h-auto`}
          />
        </div>

        <Button
          type="submit"
          className="btn-shine group w-full h-12 cursor-pointer font-semibold tracking-wider shadow-[0_0_25px_rgba(0,255,255,0.3)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,255,0.55)]"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              SUBMIT
              <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </>
          )}
        </Button>
      </form>
    </HudContainer>
  );
}

const LABEL_CLASS =
  "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground";

const FIELD_CLASS =
  "h-11 bg-background/60 border-white/10 transition-colors hover:border-primary/30 focus-visible:border-primary/60 focus-visible:ring-primary/30 focus-visible:ring-offset-0";
