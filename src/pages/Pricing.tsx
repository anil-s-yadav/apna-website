import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { plans } from "@/data/pricing";

const Pricing = () => (
  <section className="py-16">
    <div className="container">
      <h1 className="text-center text-3xl font-bold sm:text-4xl">
        Simple, Transparent <span className="text-gradient">Pricing</span>
      </h1>
      <p className="mx-auto mt-3 max-w-md text-center text-muted-foreground">
        No hidden fees. Choose the plan that works for you.
      </p>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-2xl border p-8 transition-all hover:-translate-y-1 ${
              plan.highlighted
                ? "border-primary bg-primary/5 shadow-elevated"
                : "border-border bg-card shadow-card"
            }`}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-accent-foreground">
                Most Popular
              </span>
            )}
            <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
            <div className="mt-6">
              <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
              <span className="text-muted-foreground">{plan.period}</span>
            </div>
            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="h-4 w-4 shrink-0 text-primary" /> {f}
                </li>
              ))}
            </ul>
            <Link to="/create" className="mt-8">
              <Button
                className="w-full"
                variant={plan.highlighted ? "default" : "outline"}
              >
                Buy Now
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
