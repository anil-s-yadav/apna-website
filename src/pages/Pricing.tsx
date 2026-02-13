import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { plans } from "@/data/pricing";
import HowWeWork from "@/components/HowWeWork";

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
            <p className="mt-1 text-sm text-muted-foreground">
              {plan.description}
            </p>
            <div className="mt-6">
              <span className="text-4xl font-extrabold text-foreground">
                {plan.price}
              </span>
              <span className="text-muted-foreground">{plan.period}</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{plan.total}</p>
            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <Check className="h-4 w-4 shrink-0 text-primary" /> {f}
                </li>
              ))}
            </ul>
            <Link to="/create" className="mt-8">
              <Button
                className="w-full"
                variant={plan.highlighted ? "default" : "outline"}
              >
                Create Now
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>

    {/* How It Works */}
    <section className="py-20 bg-gradient-to-b from-transparent to-primary/5">
      <div className="container">
        <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl mb-3">
          Simple Pricing, <span className="text-gradient">Clear Process</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground mb-14">
          Create and preview your website for free. Only pay when you're ready
          to go live.
        </p>
        <HowWeWork />
      </div>
    </section>

    <section className="max-w-5xl mx-auto px-4 py-16">
      <div className="rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-primary/5 border border-primary/10 p-12">
        <div className="space-y-6">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">
              Transparent Pricing
            </h2>
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-3">
              Affordable Website Pricing Plans
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Budget-Friendly Website Packages by Apna Website
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-primary"></span>
                Simple Plans for Everyone
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Choose from simple and transparent pricing plans designed for
                small businesses, startups, and freelancers in India.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-primary"></span>
                No Hidden Charges
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Pay once and get lifetime access to your website with free SSL,
                mobile optimization, and technical support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
);

export default Pricing;
