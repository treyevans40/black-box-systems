import logo from "@/assets/bbe-logo.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-primary">
      <div className="container flex items-center justify-between py-4">
        <img src={logo} alt="Black Box Engineering" className="h-10 brightness-0 invert" />
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-primary-foreground/70">
          <a href="#industries" className="hover:text-primary-foreground transition-colors">Industries</a>
          <a href="#services" className="hover:text-primary-foreground transition-colors">Services</a>
          <a href="#delivery" className="hover:text-primary-foreground transition-colors">Delivery</a>
          <a href="#about-us" className="hover:text-primary-foreground transition-colors">About Us</a>
          <a href="#contact" className="px-4 py-2 bg-copper text-primary-foreground rounded hover:bg-copper-light transition-colors">
            Contact
          </a>
        </nav>
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-primary-foreground/10 pb-4">
          <div className="container flex flex-col gap-3 pt-4 text-sm font-medium text-primary-foreground/70">
            <a href="#industries" onClick={() => setMobileOpen(false)} className="hover:text-primary-foreground py-1">Industries</a>
            <a href="#services" onClick={() => setMobileOpen(false)} className="hover:text-primary-foreground py-1">Services</a>
            <a href="#delivery" onClick={() => setMobileOpen(false)} className="hover:text-primary-foreground py-1">Delivery</a>
            <a href="#about-us" onClick={() => setMobileOpen(false)} className="hover:text-primary-foreground py-1">About Us</a>
            <a href="#contact" onClick={() => setMobileOpen(false)} className="mt-2 px-4 py-2 bg-copper text-primary-foreground rounded text-center hover:bg-copper-light transition-colors">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
