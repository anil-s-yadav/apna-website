import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16">
      <div className="container max-w-4xl">
        <h1 className="text-center text-3xl font-bold sm:text-4xl">
          Get in <span className="text-gradient">Touch</span>
        </h1>
        <p className="mx-auto mt-3 max-w-md text-center text-muted-foreground">
          Have questions? We'd love to hear from you.
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {/* Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Email</h3>
                <p className="text-sm text-muted-foreground">
                  anilyadav44x@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Phone</h3>
                <p className="text-sm text-muted-foreground">+91 9892986314</p>
              </div>
            </div>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-green-700"
            >
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-xl border border-border bg-card p-6 shadow-card"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                maxLength={100}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                maxLength={255}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help?"
                rows={4}
                maxLength={1000}
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-primary/5 border border-primary/10 p-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">
                Support & Guidance
              </h2>
              <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-3">
                Contact Apna Website Support Team
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Get Help with Your Business Website
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary"></span>
                  Expert Support
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Reach out to Apna Website for website creation, customization,
                  pricing inquiries, and technical support. We are here to help
                  you succeed.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary"></span>
                  Talk to Website Experts
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our team provides reliable guidance to help small businesses
                  grow online with professional websites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
