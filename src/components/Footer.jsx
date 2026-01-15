import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Keerthi Enterprises</h3>
          <p className="text-white/90 text-sm">
            Your trusted insurance partner since 2017. We provide comprehensive
            insurance solutions with personalized service and expert guidance.
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-white/90">
            <li>
              📍 Head Office – ECIL (
              <a
                href="https://www.google.com/maps?q=17.4723056,78.5643889"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-white"
              >
                View on Map
              </a>
              )
            </li>
            <li>
              📍 Branch Office – Gajularamaram (
              <a
                href="https://www.google.com/maps?q=17.5193611,78.42775"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-white"
              >
                View on Map
              </a>
              )
            </li>
            <li>📞 +91 63098 32224</li>
            <li>
              ✉️{" "}
              <a
                href="mailto:keerthienterpriseshyd1972@gmail.com"
                className="underline hover:text-white"
              >
                keerthienterpriseshyd1972@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-white/80">Services</Link></li>
            <li><Link to="/about" className="hover:text-white/80">Why Choose Us</Link></li>
            <li><Link to="/locations" className="hover:text-white/80">Locations</Link></li>
            <li><Link to="/testimonials" className="hover:text-white/80">Testimonials</Link></li>
            <li><Link to="/contact" className="hover:text-white/80">Contact Us</Link></li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h4 className="font-semibold mb-4">Get Started</h4>
          <p className="text-white/90 text-sm mb-4">
            Ready to protect what matters most? Get a free consultation today.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary font-semibold py-2 px-4 rounded hover:bg-slate-100 transition"
          >
            Request a Call
          </Link>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/20 py-4 text-center text-sm">
        © {year} Keerthi Enterprises. All rights reserved.
      </div>
    </footer>
  );
}
