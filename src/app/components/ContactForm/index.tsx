"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("message sent! i'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("failed to send. please try again or email me directly.");
      }
    } catch {
      toast.error("something went wrong. please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 md:space-y-6 max-w-lg">
      <div>
        <label
          htmlFor="name"
          className="font-mono text-xs lowercase tracking-[0.2em] block mb-2"
        >
          name
        </label>
        <input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
          className="w-full bg-transparent border-2 border-foreground/30 px-4 py-2 md:py-3 font-mono text-sm focus:border-accent-blue focus:outline-none transition-colors"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="font-mono text-xs lowercase tracking-[0.2em] block mb-2"
        >
          email
        </label>
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
          className="w-full bg-transparent border-2 border-foreground/30 px-4 py-2 md:py-3 font-mono text-sm focus:border-accent-blue focus:outline-none transition-colors"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="font-mono text-xs lowercase tracking-[0.2em] block mb-2"
        >
          message
        </label>
        <textarea
          id="message"
          required
          rows={3}
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
          className="w-full bg-transparent border-2 border-foreground/30 px-4 py-2 md:py-3 font-mono text-sm focus:border-accent-blue focus:outline-none transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-foreground text-background font-mono text-sm lowercase tracking-[0.3em] px-8 py-3 hover:bg-accent-brown transition-colors disabled:opacity-50"
      >
        {isSubmitting ? "sending..." : "send"}
      </button>
    </form>
  );
}
