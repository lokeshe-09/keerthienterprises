import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const linkClass = (path) =>
    `hover:text-primary transition-colors ${isActive(path) ? "text-primary font-semibold" : ""}`;

  const mobileLinkClass = (path) =>
    `block py-3 px-4 hover:bg-slate-50 transition-colors ${isActive(path) ? "text-primary font-semibold bg-primary/5" : ""}`;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
          <img
            src="/assets/company logo.png"
            alt="Keerthi Enterprises"
            className="h-12 w-12 md:h-16 md:w-16"
          />
          <div>
            <h1 className="text-lg md:text-xl font-bold">Keerthi Enterprises</h1>
            <p className="text-xs text-slate-500 hidden sm:block">Insurance Broking Services</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6 text-sm">
            <Link to="/" className={linkClass("/")}>Home</Link>
            <Link to="/services" className={linkClass("/services")}>Services</Link>
            <Link to="/about" className={linkClass("/about")}>Why Choose Us</Link>
            <Link to="/locations" className={linkClass("/locations")}>Locations</Link>
            <Link to="/testimonials" className={linkClass("/testimonials")}>Testimonials</Link>
          </nav>

          <Link
            to="/contact"
            className="bg-secondary text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-secondary/90 transition-colors"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile: Get Quote + Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <Link
            to="/contact"
            className="bg-secondary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-secondary/90 transition-colors"
            onClick={closeMenu}
          >
            Get Quote
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              /* X Icon */
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              /* Hamburger Icon */
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t shadow-lg">
          <div className="container mx-auto">
            <Link to="/" className={mobileLinkClass("/")} onClick={closeMenu}>
              Home
            </Link>
            <Link to="/services" className={mobileLinkClass("/services")} onClick={closeMenu}>
              Services
            </Link>
            <Link to="/about" className={mobileLinkClass("/about")} onClick={closeMenu}>
              Why Choose Us
            </Link>
            <Link to="/locations" className={mobileLinkClass("/locations")} onClick={closeMenu}>
              Locations
            </Link>
            <Link to="/testimonials" className={mobileLinkClass("/testimonials")} onClick={closeMenu}>
              Testimonials
            </Link>
            <Link to="/contact" className={mobileLinkClass("/contact")} onClick={closeMenu}>
              Contact Us
            </Link>

            {/* Quick Contact in Mobile Menu */}
            <div className="border-t p-4 bg-slate-50">
              <a href="tel:+916309832224" className="flex items-center gap-2 text-primary font-semibold mb-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 63098 32224
              </a>
              <p className="text-xs text-slate-500">Mon-Sat: 9AM - 6PM</p>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
