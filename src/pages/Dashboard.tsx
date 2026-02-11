import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ExternalLink } from "lucide-react";
import { toast } from "sonner";

const dummySites = [
  { id: 1, name: "FitZone Gym Website", status: "Live", url: "#" },
  { id: 2, name: "Sharma Coaching Classes", status: "Pending", url: "#" },
  { id: 3, name: "RetailMart Online Shop", status: "Live", url: "#" },
];

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    toast.success(isRegister ? "Account created!" : "Welcome back!");
  };

  if (!isLoggedIn) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center py-16">
        <div className="w-full max-w-md rounded-xl border border-border bg-card p-8 shadow-card">
          <h1 className="text-center text-2xl font-bold text-foreground">
            {isRegister ? "Create Account" : "Welcome Back"}
          </h1>
          <p className="mt-1 text-center text-sm text-muted-foreground">
            {isRegister
              ? "Sign up to manage your websites"
              : "Login to your dashboard"}
          </p>
          <form onSubmit={handleAuth} className="mt-6 space-y-4">
            {isRegister && (
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  required
                  maxLength={100}
                />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                maxLength={255}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              {isRegister ? "Sign Up" : "Login"}
            </Button>
          </form>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              onClick={() => setIsRegister(!isRegister)}
              className="font-medium text-primary hover:underline"
            >
              {isRegister ? "Login" : "Sign Up"}
            </button>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="container max-w-3xl">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold sm:text-3xl">My Websites</h1>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </Button>
        </div>

        <div className="mt-8 space-y-4">
          {dummySites.map((site) => (
            <div
              key={site.id}
              className="flex items-center justify-between rounded-xl border border-border bg-card p-5 shadow-card"
            >
              <div>
                <h3 className="font-semibold text-card-foreground">
                  {site.name}
                </h3>
                <span
                  className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    site.status === "Live"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {site.status}
                </span>
              </div>
              <Button variant="ghost" size="sm">
                <ExternalLink className="mr-1 h-4 w-4" /> View
              </Button>
            </div>
          ))}
        </div>
      </div>
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Manage Your Website Dashboard
        </h1>

        <h2 className="text-2xl font-semibold mb-4 text-gray-600">
          Control Your Website with Apna Website Panel
        </h2>

        <p className="text-gray-700 max-w-3xl mx-auto mb-6">
          Use your dashboard to update content, manage pages, change designs,
          and monitor your website performance easily.
        </p>

        <h3 className="text-xl font-semibold mb-2">
          Complete Website Management
        </h3>

        <p className="text-gray-700 max-w-2xl mx-auto">
          Track visitors, edit business information, and customize layouts from
          one secure and user-friendly platform.
        </p>
      </section>
    </section>
  );
};

export default Dashboard;
