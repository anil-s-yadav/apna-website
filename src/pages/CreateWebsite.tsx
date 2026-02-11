import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const CreateWebsite = () => {
  const [form, setForm] = useState({
    businessName: "",
    ownerName: "",
    phone: "",
    email: "",
    address: "",
    services: "",
    socialLinks: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.businessName || !form.ownerName || !form.email || !form.phone) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ""))) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }
    toast.success(
      "Your website request has been submitted! We'll get back to you soon.",
    );
  };

  return (
    <section className="py-16">
      <div className="container max-w-2xl">
        <h1 className="text-center text-3xl font-bold sm:text-4xl">
          Create Your <span className="text-gradient">Website</span>
        </h1>
        <p className="mx-auto mt-3 max-w-md text-center text-muted-foreground">
          Fill in your business details and we'll generate a professional
          website for you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6 rounded-xl border border-border bg-card p-6 shadow-card sm:p-8"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="businessName">Business Name *</Label>
              <Input
                id="businessName"
                name="businessName"
                value={form.businessName}
                onChange={handleChange}
                placeholder="e.g. FitZone Gym"
                maxLength={100}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ownerName">Owner Name *</Label>
              <Input
                id="ownerName"
                name="ownerName"
                value={form.ownerName}
                onChange={handleChange}
                placeholder="Your name"
                maxLength={100}
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="9876543210"
                maxLength={10}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
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
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Your business address"
              maxLength={300}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="services">Services Description</Label>
            <Textarea
              id="services"
              name="services"
              value={form.services}
              onChange={handleChange}
              placeholder="Describe the services you offer..."
              rows={4}
              maxLength={1000}
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="logo">Upload Logo</Label>
              <Input id="logo" type="file" accept="image/*" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="images">Upload Images</Label>
              <Input id="images" type="file" accept="image/*" multiple />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="socialLinks">Social Media Links</Label>
            <Input
              id="socialLinks"
              name="socialLinks"
              value={form.socialLinks}
              onChange={handleChange}
              placeholder="Instagram, Facebook, YouTube URLs"
              maxLength={500}
            />
          </div>

          <Button type="submit" size="lg" className="w-full">
            Generate My Website
          </Button>
        </form>
      </div>
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Create Your Business Website Online
        </h1>

        <h2 className="text-2xl font-semibold mb-4 text-gray-600">
          Build Your Website Without Technical Skills
        </h2>

        <p className="text-gray-700 max-w-3xl mx-auto mb-6">
          With Apna Website, you can create a professional website by simply
          entering your business details. Our system automatically generates
          your complete website.
        </p>

        <h3 className="text-xl font-semibold mb-2">Instant Website Setup</h3>

        <p className="text-gray-700 max-w-2xl mx-auto">
          Get your gym website, shop website, or portfolio website live within
          hours. No developer required. Everything is managed online.
        </p>
      </section>
    </section>
  );
};

export default CreateWebsite;
