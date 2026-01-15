import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";

export default function Services() {
  useSEO({
    title: "Insurance Services - Life, Health & Motor Insurance India",
    description:
      "Explore comprehensive insurance services at Keerthi Enterprises India. Life Insurance (Term, Whole Life, ULIP), Health Insurance (Family Floater, Critical Illness), Motor Insurance (Car, Bike). Best rates from LIC, Star Health, ICICI, TATA AIG across India.",
    keywords:
      "life insurance india, health insurance india, motor insurance india, term insurance india, family floater health insurance india, car insurance india, bike insurance india, LIC plans india, Star Health plans, critical illness insurance, best insurance services india",
    canonical: "/services",
  });

  const services = [
    {
      id: "life-insurance",
      title: "Life Insurance in India",
      img: "/assets/life insurance.png",
      desc: "Secure your family's future with comprehensive life insurance plans from top insurers. Our experts help you choose the right coverage including Term Life, Whole Life, ULIPs, and Child Education Plans.",
      points: [
        "Term Life Insurance",
        "Whole Life Plans",
        "ULIP Investment Plans",
        "Family Protection",
        "Child Education Plans",
        "Retirement Planning",
      ],
      insurers: ["LIC", "ICICI Prudential", "HDFC Life", "Max Life"],
    },
    {
      id: "health-insurance",
      title: "Health Insurance in India",
      img: "/assets/health insurance.png",
      desc: "Complete healthcare coverage with cashless hospitalization at 5000+ network hospitals. Get Family Floater Plans, Critical Illness Cover, and Senior Citizen Health Insurance.",
      points: [
        "Family Floater Plans",
        "Individual Health Insurance",
        "Critical Illness Cover",
        "Senior Citizen Plans",
        "Cashless Hospitalization",
        "Pre & Post Care Benefits",
      ],
      insurers: ["Star Health", "ICICI Lombard", "TATA AIG", "Care Health"],
    },
    {
      id: "motor-insurance",
      title: "Motor Insurance in India",
      img: "/assets/Motor insurance.png",
      desc: "Reliable coverage for your car and bike with quick claims and cashless repairs. Get Comprehensive Coverage, Zero Depreciation, and 24/7 Roadside Assistance.",
      points: [
        "Comprehensive Car Insurance",
        "Two Wheeler Insurance",
        "Third Party Coverage",
        "Zero Depreciation",
        "24/7 Roadside Assistance",
        "Cashless Garage Network",
      ],
      insurers: ["TATA AIG", "Royal Sundaram", "ICICI Lombard", "Bajaj Allianz"],
    },
  ];

  return (
    <>
      {/* PAGE HEADER */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Insurance Services Across India</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Comprehensive Life, Health & Motor Insurance solutions from India's trusted broking company.
            We partner with India's leading insurers to bring you the best coverage at competitive rates.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div
                  className={`grid md:grid-cols-2 gap-10 items-center ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* IMAGE */}
                  <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <img
                      src={service.img}
                      alt={`${service.title} - Keerthi Enterprises India`}
                      className="w-full max-w-md mx-auto"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>

                  {/* TEXT */}
                  <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-slate-600 mb-6 text-lg">{service.desc}</p>

                    <h3 className="font-semibold text-slate-800 mb-3">Coverage Options:</h3>
                    <ul className="grid grid-cols-2 gap-3 mb-6">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-center gap-2 text-slate-700">
                          <span className="text-primary">✓</span> {point}
                        </li>
                      ))}
                    </ul>

                    <h3 className="font-semibold text-slate-800 mb-3">Partner Insurers:</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.insurers.map((insurer) => (
                        <span key={insurer} className="px-3 py-1 bg-slate-100 rounded-full text-sm">
                          {insurer}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
                    >
                      Get {service.title.split(" ")[0]} Quote
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ALL PARTNERS */}
      <section className="py-16 bg-slate-50" aria-labelledby="partners-heading">
        <div className="container mx-auto px-4 text-center">
          <h2 id="partners-heading" className="text-2xl font-bold mb-6">
            Our Insurance Partners
          </h2>
          <p className="text-slate-600 mb-8">
            We work with 20+ of India's leading insurance companies to get you the best coverage
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-base font-semibold text-slate-700">
            <span className="px-4 py-2 bg-white rounded-lg shadow-soft">LIC</span>
            <span className="px-4 py-2 bg-white rounded-lg shadow-soft">Star Health</span>
            <span className="px-4 py-2 bg-white rounded-lg shadow-soft">Care Health</span>
            <span className="px-4 py-2 bg-white rounded-lg shadow-soft">ICICI Prudential</span>
            <span className="px-4 py-2 bg-white rounded-lg shadow-soft">TATA AIG</span>
            <span className="px-4 py-2 bg-white rounded-lg shadow-soft">Royal Sundaram</span>
            <span className="px-4 py-2 bg-white rounded-lg shadow-soft">HDFC ERGO</span>
            <span className="px-4 py-2 bg-white rounded-lg shadow-soft">Bajaj Allianz</span>
            <span className="px-4 py-2 bg-white rounded-lg shadow-soft">Reliance General</span>
            <span className="px-4 py-2 bg-white rounded-lg shadow-soft">Shriram General</span>
            <span className="px-4 py-2 bg-white rounded-lg shadow-soft">SBI General</span>
            <span className="px-4 py-2 bg-white rounded-lg shadow-soft">Magma HDI</span>
            <span className="px-4 py-2 bg-white rounded-lg shadow-soft">Zuno General</span>
            <span className="px-4 py-2 bg-white rounded-lg shadow-soft">Liberty General</span>
            <span className="px-4 py-2 bg-white rounded-lg shadow-soft">National Insurance</span>
            <span className="px-4 py-2 bg-white rounded-lg shadow-soft">Oriental Insurance</span>
            <span className="px-4 py-2 bg-white rounded-lg shadow-soft">United India</span>
            <span className="px-4 py-2 bg-white rounded-lg shadow-soft">New India Assurance</span>
            <span className="px-4 py-2 bg-white rounded-lg shadow-soft">Cholamandalam MS</span>
            <span className="px-4 py-2 bg-white rounded-lg shadow-soft">Future General</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing the Right Insurance?</h2>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">
            Our insurance experts across India will guide you to find the perfect coverage for your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
            >
              Get Free Expert Consultation
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
