import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";

export default function About() {
  useSEO({
    title: "About Us - Why Choose Keerthi Enterprises India",
    description:
      "Know why Keerthi Enterprises is India's most trusted insurance broking company since 2017. 30+ expert team members, 1000+ happy customers across India, GSTIN & MSME registered. Personalized service, fast claim support, partnerships with LIC, Star Health, ICICI.",
    keywords:
      "about keerthi enterprises, best insurance broking company india, why choose keerthi enterprises, trusted insurance agent india, GSTIN registered insurance broking, MSME insurance company, best insurance advisor india, insurance consultant india",
    canonical: "/about",
  });

  return (
    <>
      {/* PAGE HEADER */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Why Choose Keerthi Enterprises</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Since 2017, Keerthi Enterprises has been India's trusted insurance broking partner,
            helping thousands of families and businesses across the nation protect what matters most.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-white" aria-labelledby="stats-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="stats-heading" className="text-3xl font-bold text-center mb-12">Our Track Record</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <article className="p-8 rounded-2xl border shadow-soft">
              <div className="text-5xl font-bold text-primary">2017</div>
              <div className="mt-2 text-slate-600 font-medium">Established</div>
              <p className="mt-2 text-sm text-slate-500">
                Years of trusted service across India
              </p>
            </article>

            <article className="p-8 rounded-2xl border shadow-soft">
              <div className="text-5xl font-bold text-primary">30+</div>
              <div className="mt-2 text-slate-600 font-medium">Expert Team Members</div>
              <p className="mt-2 text-sm text-slate-500">
                Dedicated insurance professionals
              </p>
            </article>

            <article className="p-8 rounded-2xl border shadow-soft">
              <div className="text-5xl font-bold text-primary">2</div>
              <div className="mt-2 text-slate-600 font-medium">Branches in India</div>
              <p className="mt-2 text-sm text-slate-500">
                ECIL & Gajularamaram
              </p>
            </article>

            <article className="p-8 rounded-2xl border shadow-soft">
              <div className="text-5xl font-bold text-primary">1000+</div>
              <div className="mt-2 text-slate-600 font-medium">Happy Customers</div>
              <p className="mt-2 text-sm text-slate-500">
                Families & businesses protected
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-slate-50" aria-labelledby="features-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="features-heading" className="text-3xl font-bold">What Sets Us Apart in India</h2>
            <p className="text-slate-600 mt-2">Our commitment to excellence in insurance broking across the nation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-white p-8 rounded-2xl shadow-soft">
              <div className="text-4xl mb-4" aria-hidden="true">🎯</div>
              <h3 className="text-xl font-semibold mb-3">Personalized Service</h3>
              <p className="text-slate-600">
                We take time to understand your unique needs and recommend the best coverage options tailored specifically for you and your family.
              </p>
            </article>

            <article className="bg-white p-8 rounded-2xl shadow-soft">
              <div className="text-4xl mb-4" aria-hidden="true">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Fast Claim Support</h3>
              <p className="text-slate-600">
                Our dedicated team assists you throughout the claim process, ensuring quick settlements and minimal hassle for all types of insurance claims.
              </p>
            </article>

            <article className="bg-white p-8 rounded-2xl shadow-soft">
              <div className="text-4xl mb-4" aria-hidden="true">🤝</div>
              <h3 className="text-xl font-semibold mb-3">Strong Partnerships</h3>
              <p className="text-slate-600">
                We work with leading insurers like LIC, Star Health, ICICI, TATA AIG to bring you the best policies at competitive prices.
              </p>
            </article>

            <article className="bg-white p-8 rounded-2xl shadow-soft">
              <div className="text-4xl mb-4" aria-hidden="true">📋</div>
              <h3 className="text-xl font-semibold mb-3">Expert Guidance</h3>
              <p className="text-slate-600">
                Our experienced team of 30+ advisors helps you navigate complex insurance terms and make informed decisions for your protection.
              </p>
            </article>

            <article className="bg-white p-8 rounded-2xl shadow-soft">
              <div className="text-4xl mb-4" aria-hidden="true">🏢</div>
              <h3 className="text-xl font-semibold mb-3">Pan-India Presence</h3>
              <p className="text-slate-600">
                With headquarters in Hyderabad and service across India, we're always accessible when you need us for consultation or claim support.
              </p>
            </article>

            <article className="bg-white p-8 rounded-2xl shadow-soft">
              <div className="text-4xl mb-4" aria-hidden="true">✅</div>
              <h3 className="text-xl font-semibold mb-3">Trusted & Verified</h3>
              <p className="text-slate-600">
                GSTIN (36AMZPL3954H1ZC) and MSME (UDYAM-TS-02-0029886) registered business with transparent and ethical practices.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* INSURANCE PARTNERS */}
      <section className="py-16 bg-white" aria-labelledby="partners-heading">
        <div className="container mx-auto px-4 text-center">
          <h2 id="partners-heading" className="text-2xl font-bold mb-2">Our Insurance Partners</h2>
          <p className="text-slate-600 mb-8">Partnered with 20+ of India's most trusted insurance companies</p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-base font-semibold text-primary">
            <span className="px-4 py-2 bg-primary/10 rounded-lg">LIC</span>
            <span className="px-4 py-2 bg-primary/10 rounded-lg">Star Health</span>
            <span className="px-4 py-2 bg-primary/10 rounded-lg">Care Health</span>
            <span className="px-4 py-2 bg-primary/10 rounded-lg">ICICI Prudential</span>
            <span className="px-4 py-2 bg-primary/10 rounded-lg">TATA AIG</span>
            <span className="px-4 py-2 bg-primary/10 rounded-lg">Royal Sundaram</span>
            <span className="px-4 py-2 bg-primary/10 rounded-lg">HDFC ERGO</span>
            <span className="px-4 py-2 bg-primary/10 rounded-lg">Bajaj Allianz</span>
            <span className="px-4 py-2 bg-primary/10 rounded-lg">Reliance General</span>
            <span className="px-4 py-2 bg-primary/10 rounded-lg">Shriram General</span>
            <span className="px-4 py-2 bg-primary/10 rounded-lg">SBI General</span>
            <span className="px-4 py-2 bg-primary/10 rounded-lg">Magma HDI</span>
            <span className="px-4 py-2 bg-primary/10 rounded-lg">Zuno General</span>
            <span className="px-4 py-2 bg-primary/10 rounded-lg">Liberty General</span>
            <span className="px-4 py-2 bg-primary/10 rounded-lg">National Insurance</span>
            <span className="px-4 py-2 bg-primary/10 rounded-lg">Oriental Insurance</span>
            <span className="px-4 py-2 bg-primary/10 rounded-lg">United India</span>
            <span className="px-4 py-2 bg-primary/10 rounded-lg">New India Assurance</span>
            <span className="px-4 py-2 bg-primary/10 rounded-lg">Cholamandalam MS</span>
            <span className="px-4 py-2 bg-primary/10 rounded-lg">Future General</span>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="py-16 bg-slate-50" aria-labelledby="credentials-heading">
        <div className="container mx-auto px-4">
          <h2 id="credentials-heading" className="text-2xl font-bold text-center mb-8">Business Credentials</h2>
          <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-soft text-center">
              <div className="text-sm text-slate-500 mb-1">GSTIN</div>
              <div className="text-xl font-bold text-primary">36AMZPL3954H1ZC</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-soft text-center">
              <div className="text-sm text-slate-500 mb-1">MSME Registration</div>
              <div className="text-xl font-bold text-primary">UDYAM-TS-02-0029886</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the Keerthi Enterprises Difference</h2>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">
            Join thousands of satisfied customers across India who trust us for their insurance needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
            >
              Contact Us Today
            </Link>
            <Link
              to="/testimonials"
              className="inline-block border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Read Customer Reviews
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
