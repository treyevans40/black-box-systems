const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} Black Box Engineering. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#markets" className="hover:text-foreground transition-colors">Markets</a>
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
