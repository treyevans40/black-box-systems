const Footer = () => {
  return (
    <footer className="bg-primary border-t border-primary-foreground/10">
      <div className="container py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-primary-foreground/40">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <span>© {new Date().getFullYear()} Black Box Engineering</span>
            <span className="hidden sm:inline">·</span>
            <span>Mexico City · Texas · Global</span>
          </div>
          <div className="flex gap-6">
            <a href="#industries" className="hover:text-primary-foreground transition-colors">Industries</a>
            <a href="#services" className="hover:text-primary-foreground transition-colors">Services</a>
            <a href="#about-us" className="hover:text-primary-foreground transition-colors">About Us</a>
            <a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
