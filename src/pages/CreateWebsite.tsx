import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { templates, categories } from "@/data/templates";
import {
  trackPageView,
  trackFormStart,
  trackFormSubmit
} from "@/lib/analytics";

const CreateWebsite = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const templateIdParam = searchParams.get("template");
  const templateId = templateIdParam ? parseInt(templateIdParam, 10) : null;
  const selectedTemplate = templates.find((t) => t.id === templateId);

  const [form, setForm] = useState({
    businessName: "",
    ownerName: "",
    category: selectedTemplate ? selectedTemplate.category : "Salon & Spa",
    phone: "",
    email: "",
    address: "",
    services: "",
    socialLinks: "",
  });

  const [formStarted, setFormStarted] = useState(false);

  useEffect(() => {
    trackPageView("create");
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => {
    if (!formStarted) {
      trackFormStart();
      setFormStarted(true);
    }
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

    const templateName = selectedTemplate ? selectedTemplate.name : "None";
    trackFormSubmit(form.category, templateName);

    toast.success("Details saved! Let's choose your plan.");

    navigate("/pricing", {
      state: {
        formData: form,
        template: selectedTemplate,
      },
    });
  };

  return (
    <section className="py-16">
      <div className="container max-w-2xl">
        <h1 className="text-center text-3xl font-bold sm:text-4xl mb-4">
          Create Your <span className="text-gradient">Website</span>
        </h1>
        <p className="mx-auto mb-10 max-w-md text-center text-muted-foreground text-sm">
          Fill in your business details and we'll generate a professional website for you.
        </p>

        {/* Progress Stepper */}
        <div className="mb-10 flex items-center justify-between max-w-md mx-auto px-4">
          {[
            { label: "Choose Template", active: false, done: true },
            { label: "Fill Details", active: true, done: false },
            { label: "Select Plan", active: false, done: false },
            { label: "Go Live", active: false, done: false },
          ].map((step, idx, arr) => (
            <div key={step.label} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${
                    step.active
                      ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                      : step.done
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step.done ? "✓" : idx + 1}
                </div>
                <span className="mt-1 text-[10px] sm:text-xs font-medium text-muted-foreground text-center truncate max-w-[80px] sm:max-w-none">
                  {step.label}
                </span>
              </div>
              {idx < arr.length - 1 && (
                <div
                  className={`h-[2px] flex-1 mx-2 -mt-4 ${
                    step.done ? "bg-primary" : "bg-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Selected Template Card */}
        {selectedTemplate && (
          <div className="mb-8 flex items-center gap-4 rounded-xl border border-primary/20 bg-primary/5 p-4 max-w-2xl mx-auto animate-fade-in">
            <img
              src={selectedTemplate.image}
              alt={selectedTemplate.name}
              className="h-16 w-24 rounded-lg object-cover"
            />
            <div>
              <span className="text-xs font-semibold uppercase text-primary tracking-wide">
                Selected Template
              </span>
              <h3 className="font-bold text-foreground text-sm">{selectedTemplate.name}</h3>
              <p className="text-xs text-muted-foreground">{selectedTemplate.category}</p>
            </div>
          </div>
        )}

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
                onFocus={handleFocus}
                placeholder="e.g. FitZone Gym"
                maxLength={100}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Business Category *</Label>
              <select
                id="category"
                name="category"
                value={form.category}
                onChange={handleChange}
                onFocus={handleFocus}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                {categories.filter(cat => cat !== "All").map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="ownerName">Owner/Contact Person Name *</Label>
              <Input
                id="ownerName"
                name="ownerName"
                value={form.ownerName}
                onChange={handleChange}
                onFocus={handleFocus}
                placeholder="Your name"
                maxLength={100}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                onFocus={handleFocus}
                placeholder="9876543210"
                maxLength={10}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              placeholder="you@example.com"
              maxLength={255}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              name="address"
              value={form.address}
              onChange={handleChange}
              onFocus={handleFocus}
              placeholder="Your business address"
              maxLength={300}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="services">Services/Products Description</Label>
            <Textarea
              id="services"
              name="services"
              value={form.services}
              onChange={handleChange}
              onFocus={handleFocus}
              placeholder="Describe the services or products you offer..."
              rows={4}
              maxLength={1000}
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="logo">Upload Logo</Label>
              <Input id="logo" type="file" accept="image/*" onFocus={handleFocus} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="images">Upload Images</Label>
              <Input id="images" type="file" accept="image/*" multiple onFocus={handleFocus} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="socialLinks">Social Media Links</Label>
            <Input
              id="socialLinks"
              name="socialLinks"
              value={form.socialLinks}
              onChange={handleChange}
              onFocus={handleFocus}
              placeholder="Instagram, Facebook, YouTube URLs"
              maxLength={500}
            />
          </div>

          <Button type="submit" size="lg" className="w-full">
            Generate My Website
          </Button>
        </form>
      </div>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-primary/5 border border-primary/10 p-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">
                Quick Setup
              </h2>
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-3">
                Create Your Business Website Online
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Build Your Website Without Technical Skills
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary"></span>
                  Effortless Creation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  With Apna Website, you can create a professional website by
                  simply entering your business details. Our system
                  automatically generates your complete website.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary"></span>
                  Instant Website Setup
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get your gym website, shop website, or portfolio website live
                  within hours. No developer required. Everything is managed
                  online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CreateWebsite;
