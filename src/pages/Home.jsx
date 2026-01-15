import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";

export default function Home() {
  useSEO({
    title: "Best Insurance Broking Company in India",
    description:
      "Keerthi Enterprises - India's #1 trusted insurance broking company since 2017. Expert guidance for Life Insurance, Health Insurance & Motor Insurance. 30+ team members, 1000+ happy customers across India. Headquartered in Hyderabad. Call +91 63098 32224 for free consultation.",
    keywords:
      "best insurance broking company india, insurance broking india, life insurance india, health insurance india, motor insurance india, best insurance agent india, insurance company india, LIC agent india, Star Health agent india, keerthi enterprises, insurance broking hyderabad",
    canonical: "/",
  });

  return (
    <>
      {/* HERO */}
      <section
        className="relative flex flex-col min-h-screen"
        style={{
          backgroundImage: "url('/assets/Background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-transparent"></div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-9 relative z-10 flex-grow flex items-center">
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center w-full py-8 sm:py-12 md:py-16">
            {/* LEFT SIDE */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-3 py-1 text-xs mb-6">
                🛡️ Trusted Insurance Partner Since 2017
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-3 sm:mb-4">
                Best Insurance Broking Company in India
              </h1>

              <p className="text-white/90 text-sm sm:text-base md:text-lg mb-5 sm:mb-8 max-w-prose">
                Expert broking for <strong>Life Insurance</strong>, <strong>Health Insurance</strong>, and <strong>Motor Insurance</strong>.
                Personalized advice, seamless onboarding, and fast claim support for families and businesses across India.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/services"
                  className="bg-white text-primary hover:opacity-90 rounded-xl px-4 sm:px-6 py-2.5 sm:py-3 font-semibold text-center text-sm sm:text-base"
                >
                  Explore Insurance Services
                </Link>

                <Link
                  to="/contact"
                  className="border border-white/80 text-white hover:bg-white/10 rounded-xl px-4 sm:px-6 py-2.5 sm:py-3 font-semibold text-center text-sm sm:text-base"
                >
                  Get Free Consultation
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="mt-4 sm:mt-8 flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-white/80">
                <span className="flex items-center gap-1">✓ GSTIN Registered</span>
                <span className="flex items-center gap-1">✓ MSME Certified</span>
                <span className="flex items-center gap-1">✓ 1000+ Happy Customers</span>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="hidden md:block">
              <div className="bg-white/10 rounded-2xl p-6 shadow-soft backdrop-blur">
                <h2 className="text-white text-xl font-semibold">
                  Why Choose Keerthi Enterprises?
                </h2>

                <ul className="mt-4 space-y-3 text-white/90">
                  <li>• 30+ expert insurance advisors</li>
                  <li>• Offices at ECIL & Gajularamaram, Hyderabad</li>
                  <li>• Partnerships with LIC, Star Health, ICICI, TATA AIG</li>
                  <li>• Fast claim assistance & support</li>
                  <li>• Personalized insurance solutions</li>
                </ul>

                <Link
                  to="/about"
                  className="inline-block mt-4 text-white underline hover:text-white/80"
                >
                  Learn more about us →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* SCROLLING PARTNERS - Inside Hero at Bottom */}
        <div className="relative z-10 w-full overflow-hidden py-4 sm:py-6 md:py-8 mt-auto">
          <p className="text-center text-white/80 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3 sm:mb-4">
            Trusted by India's Leading Insurers
          </p>

          {/* Scrolling Container */}
          <div className="relative">
            {/* Gradient fade left */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-primary to-transparent z-10"></div>
            {/* Gradient fade right */}
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-primary to-transparent z-10"></div>

            <div className="flex animate-scroll-hero">
              {/* First set of partners - All 20 companies */}
              {[
                "TATA AIG", "ICICI Prudential", "Reliance General", "Shriram General",
                "Royal Sundaram", "HDFC ERGO", "SBI General", "Magma HDI",
                "Zuno General", "Liberty General", "National Insurance", "Oriental Insurance",
                "United India", "New India Assurance", "Bajaj Allianz", "Cholamandalam MS",
                "Future General", "Star Health", "Care Health", "LIC"
              ].map((partner) => (
                <span
                  key={partner}
                  className="flex-shrink-0 mx-1.5 sm:mx-3 px-3 sm:px-6 py-1.5 sm:py-2.5 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full text-white font-semibold text-xs sm:text-base whitespace-nowrap shadow-lg"
                >
                  {partner}
                </span>
              ))}
              {/* Duplicate set for seamless loop - All 20 companies */}
              {[
                "TATA AIG", "ICICI Prudential", "Reliance General", "Shriram General",
                "Royal Sundaram", "HDFC ERGO", "SBI General", "Magma HDI",
                "Zuno General", "Liberty General", "National Insurance", "Oriental Insurance",
                "United India", "New India Assurance", "Bajaj Allianz", "Cholamandalam MS",
                "Future General", "Star Health", "Care Health", "LIC"
              ].map((partner, i) => (
                <span
                  key={`${partner}-dup-${i}`}
                  className="flex-shrink-0 mx-1.5 sm:mx-3 px-3 sm:px-6 py-1.5 sm:py-2.5 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full text-white font-semibold text-xs sm:text-base whitespace-nowrap shadow-lg"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>

          {/* CSS Animation */}
          <style>{`
            @keyframes scrollHero {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll-hero {
              animation: scrollHero 30s linear infinite;
            }
            .animate-scroll-hero:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-4 sm:h-8 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-16 bg-white" aria-labelledby="services-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 id="services-heading" className="text-3xl font-bold">
              Insurance Services Across India
            </h2>
            <p className="text-slate-600 mt-2">
              Comprehensive coverage for every stage of life - Life, Health & Motor Insurance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Life Insurance",
                icon: "🛡️",
                desc: "Secure your family's future with term life, whole life & investment plans",
                link: "/services#life-insurance",
              },
              {
                title: "Health Insurance",
                icon: "🏥",
                desc: "Family floater plans, critical illness cover & cashless hospitalization",
                link: "/services#health-insurance",
              },
              {
                title: "Motor Insurance",
                icon: "🚗",
                desc: "Car & bike insurance with zero depreciation & 24/7 roadside assistance",
                link: "/services#motor-insurance",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="text-center p-6 rounded-2xl border shadow-soft hover:shadow-medium transition-shadow"
              >
                <div className="text-4xl mb-4" aria-hidden="true">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-600 mb-4">{item.desc}</p>
                <Link to={item.link} className="text-primary font-medium hover:underline">
                  Learn More →
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/services"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              View All Insurance Services →
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-slate-50" aria-labelledby="stats-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="stats-heading" className="sr-only">Our Achievements</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary">2017</div>
              <div className="mt-1 text-slate-600">Established in India</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary">30+</div>
              <div className="mt-1 text-slate-600">Expert Team Members</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary">Pan India</div>
              <div className="mt-1 text-slate-600">Service Coverage</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary">1000+</div>
              <div className="mt-1 text-slate-600">Happy Customers Across India</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4 text-center">
          <h2 id="cta-heading" className="text-3xl font-bold mb-4">
            Get Your Free Insurance Quote Today
          </h2>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">
            Contact India's trusted insurance broking company for a free consultation.
            We help you find the best coverage at the best price.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
            >
              Request Free Consultation
            </Link>
            <a
              href="tel:+916309832224"
              className="inline-block border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              📞 Call +91 63098 32224
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
