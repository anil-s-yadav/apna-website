import { Target, Heart, Users } from "lucide-react";

const About = () => (
  <section className="py-16">
    <div className="container max-w-3xl">
      <h1 className="text-center text-3xl font-bold sm:text-4xl">
        About <span className="text-gradient">SiteKaro</span>
      </h1>
      <p className="mx-auto mt-4 text-center text-lg text-muted-foreground">
        We believe every small business deserves a professional online presence — without the cost, complexity, or coding.
      </p>

      <div className="mt-14 space-y-10">
        <div className="flex gap-5">
          <div className="shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Target className="h-6 w-6" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Our Mission</h3>
            <p className="mt-1 text-muted-foreground">
              To empower gym owners, teachers, content creators, and shop owners across India to create beautiful, functional websites in minutes — starting at just ₹499/year.
            </p>
          </div>
        </div>

        <div className="flex gap-5">
          <div className="shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Heart className="h-6 w-6" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Our Story</h3>
            <p className="mt-1 text-muted-foreground">
              SiteKaro was born from a simple observation: millions of small businesses in India have no online presence. Not because they don't want one, but because existing tools are either too expensive or too complicated. We set out to change that.
            </p>
          </div>
        </div>

        <div className="flex gap-5">
          <div className="shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Users className="h-6 w-6" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Our Impact</h3>
            <p className="mt-1 text-muted-foreground">
              Over 2,000 businesses have gone online with SiteKaro. From a yoga teacher in Jaipur to a bakery in Bengaluru — we've helped entrepreneurs across the country reach new customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
