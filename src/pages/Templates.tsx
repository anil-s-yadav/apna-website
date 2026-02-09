import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { templates, categories } from "@/data/templates";

const Templates = () => {
  const [active, setActive] = useState<string>("All");

  const filtered = active === "All" ? templates : templates.filter((t) => t.category === active);

  return (
    <section className="py-16">
      <div className="container">
        <h1 className="text-center text-3xl font-bold sm:text-4xl">
          Browse <span className="text-gradient">Templates</span>
        </h1>
        <p className="mx-auto mt-3 max-w-md text-center text-muted-foreground">
          Choose a template and customize it for your business.
        </p>

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
          {filtered.map((t) => (
            <div
              key={t.id}
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
                <h3 className="font-semibold text-card-foreground">{t.name}</h3>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    <Eye className="mr-1 h-4 w-4" /> Preview
                  </Button>
                  <Link to="/create">
                    <Button size="sm">Select</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Templates;
