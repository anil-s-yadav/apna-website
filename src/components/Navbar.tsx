import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/templates", label: "Templates" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-heading text-xl font-bold text-foreground">
          <Globe className="h-6 w-6 text-primary" />
          SiteKaro
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary ${
                  location.pathname === l.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Link to="/dashboard">
            <Button variant="ghost" size="sm">Login</Button>
          </Link>
          <Link to="/create">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background px-4 pb-4 md:hidden animate-fade-in">
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary ${
                    location.pathname === l.to ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-col gap-2">
            <Link to="/dashboard" onClick={() => setOpen(false)}>
              <Button variant="ghost" className="w-full">Login</Button>
            </Link>
            <Link to="/create" onClick={() => setOpen(false)}>
              <Button className="w-full">Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
