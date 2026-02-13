import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { templates, categories } from "@/data/templates";
import HowWeWork from "@/components/HowWeWork";

const Templates = () => {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All"
      ? templates
      : templates.filter((t) => t.category === active);

  return (
    <section className="py-16">
      <div className="container">
        <h1 className="text-center text-3xl font-bold sm:text-4xl">
          Browse <span className="text-gradient">Templates</span>
        </h1>
        <p className="mx-auto mt-3 max-w-md text-center text-muted-foreground">
          Choose a template and customize it for your business.
        </p>

        {/* Process Steps */}
        <div className="mt-16 mb-16 py-10 px-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10">
          <h2 className="text-center text-2xl font-bold mb-8 text-foreground">
            Your Path to a <span className="text-gradient">Live Website</span>
          </h2>
          <HowWeWork />
        </div>

        {/* Category Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence initial={false}>
            {filtered.map((t) => (
              <motion.div
                key={t.id + active}
                layout
                initial={{ opacity: 0, y: 5, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.8 }}
                className="group overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground">
                    {t.category}
                  </span>
                </div>
                <div className="flex items-center justify-between p-4">
                  <h3 className="font-semibold text-card-foreground">
                    {t.name}
                  </h3>
                  <div className="flex gap-2">
                    <Link to={t.preview}>
                      <Button variant="ghost" size="sm">
                        <Eye className="mr-1 h-4 w-4" /> Preview
                      </Button>
                    </Link>
                    <Link to="/create">
                      <Button size="sm">Select</Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-primary/5 border border-primary/10 p-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">
                Browse Template
              </h2>
              <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-3">
                Website Templates for Small Businesses
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Ready-Made Website Designs by Apna Website
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary"></span>
                  Professional Designs
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Explore professional website templates for gyms, teachers,
                  shops, clinics, and personal brands. All designs are
                  responsive and optimized for search engines.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary"></span>
                  Fully Customizable Templates
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Customize colors, text, images, and contact details easily.
                  Create your business website quickly using Apna Website
                  templates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Templates;
