import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Clock, Smartphone, Shield } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const features = [
  {
    icon: Clock,
    title: "Ready in 5 Minutes",
    desc: "Fill a simple form and your website is live.",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    desc: "Looks great on every screen size.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Optimized for speed and performance.",
  },
  {
    icon: Shield,
    title: "SEO Optimized",
    desc: "Rank higher on Google from day one.",
  },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient py-20 lg:py-28">
        <div className="container relative z-10 grid items-center gap-10 lg:grid-cols-2">
          <div className="animate-fade-in-up">
            <span className="mb-4 inline-block rounded-full bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm">
              🚀 Trusted by 2,000+ businesses
            </span>
            <h1 className="text-4xl font-extrabold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Create Your Business Website in{" "}
              <span className="underline decoration-accent decoration-4 underline-offset-4">
                5 Minutes
              </span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-primary-foreground/80">
              Get a professional website for your gym, coaching, YouTube
              channel, or shop starting at ₹99/month.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/create">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent-foreground hover:text-accent"
                >
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/templates">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary hover:bg-primary-foreground/10"
                >
                  View Templates
                </Button>
              </Link>
            </div>
          </div>

          <div className="animate-fade-in hidden lg:block">
            <img
              src={heroImage}
              alt="Website templates showcase"
              className="rounded-2xl shadow-elevated"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl">
            Why Choose <span className="text-gradient">Apna Website?</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
            Everything you need to build a professional online presence for your
            business.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="group rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Affordable Website Builder for Small Businesses in India
        </h1>

        <h2 className="text-2xl font-semibold mb-4 text-gray-600">
          Create Professional Websites in Minutes
        </h2>

        <p className="text-gray-700 max-w-3xl mx-auto mb-6">
          Build modern and mobile-friendly websites for gyms, teachers, shops,
          YouTubers, and freelancers. Our low-cost website builder helps small
          business owners in India create an online presence without coding.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          Trusted by Local Businesses
        </h3>

        <p className="text-gray-700 max-w-2xl mx-auto">
          We provide ready-made website templates, fast setup, and secure
          hosting solutions. Start your business website today at an affordable
          price with complete technical support.
        </p>
      </section> */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Affordable Website Builder for Small Businesses in India
        </h1>

        <h2 className="text-2xl font-semibold mb-4 text-gray-600">
          Build Professional Websites with Apna Website
        </h2>

        <p className="text-gray-700 max-w-3xl mx-auto mb-6">
          Apna Website helps gyms, teachers, shops, YouTubers, and freelancers
          create modern, mobile-friendly, and SEO-optimized websites at an
          affordable price. No coding required.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          Trusted Website Platform for Local Businesses
        </h3>

        <p className="text-gray-700 max-w-2xl mx-auto">
          Launch your business website in minutes with secure hosting, fast
          performance, and full technical support from Apna Website.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-hero-gradient py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
            Ready to Go Online?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-primary-foreground/80">
            Join thousands of businesses already using Apna Website.
          </p>
          <Link to="/create">
            <Button
              size="lg"
              className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Start Building Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
