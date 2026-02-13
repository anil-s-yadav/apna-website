import { Link } from "react-router-dom";
import { Globe } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-secondary/50">
    <div className="container py-12">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link
            to="/"
            className="flex items-center gap-2 font-heading text-lg font-bold text-foreground"
          >
            <Globe className="h-5 w-5 text-primary" />
            Apna Website
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">
            Helping small businesses build professional websites in minutes.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">
            Product
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link
                to="/templates"
                className="hover:text-primary transition-colors"
              >
                Templates
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="hover:text-primary transition-colors"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/create"
                className="hover:text-primary transition-colors"
              >
                Create Website
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">
            Company
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link
                to="/about"
                className="hover:text-primary transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-primary transition-colors">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">
            Contact
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>anilyadav44x@gmail.com</li>
            <li>+91 9892986314</li>
            <li>Mumbai, India</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Apna Website. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
