import logo from "@/assets/bbe-logo.png";

const Header = () => {
  return (
    <header className="border-b border-border bg-card">
      <div className="container flex items-center justify-between py-4">
        <img src={logo} alt="Black Box Engineering" className="h-10" />
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#markets" className="hover:text-foreground transition-colors">Markets</a>
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#delivery" className="hover:text-foreground transition-colors">Delivery</a>
          <a href="#contact" className="px-4 py-2 bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
