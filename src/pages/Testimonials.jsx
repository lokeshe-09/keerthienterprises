import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";

export default function Testimonials() {
  useSEO({
    title: "Customer Reviews & Testimonials - India's Trusted Insurance Broking Company",
    description:
      "Read what 1000+ happy customers say about Keerthi Enterprises - India's trusted insurance broking company. 4.9/5 rating, 98% customer satisfaction. Real reviews from families and businesses across India for life, health & motor insurance services.",
    keywords:
      "keerthi enterprises reviews, insurance broking company reviews india, best insurance agent reviews india, customer testimonials insurance, trusted insurance company india, insurance service reviews, health insurance reviews india",
    canonical: "/testimonials",
  });

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Business Owner, Secunderabad",
      text: "Keerthi Enterprises provided excellent guidance for my company's group health insurance. The onboarding was smooth and the claim process was fast. Their team went above and beyond to ensure we got the best coverage at competitive rates. Highly recommend for business insurance needs!",
      rating: 5,
      service: "Group Health Insurance",
    },
    {
      name: "Priya Sharma",
      role: "Software Engineer, ECIL",
      text: "I've been with Keerthi Enterprises for 3 years now. Their team is responsive and always helps me understand the best options for my family. The personalized service makes all the difference. They helped me choose the perfect family floater plan.",
      rating: 5,
      service: "Family Health Insurance",
    },
    {
      name: "Joshua",
      role: "Entrepreneur, Gajularamaram",
      text: "Professional and reliable! They handled my motor insurance claim quickly and kept me updated at every step. I highly recommend their services to anyone looking for hassle-free car insurance in India.",
      rating: 5,
      service: "Car Insurance",
    },
    {
      name: "Sunitha Reddy",
      role: "Teacher, Moula Ali",
      text: "The team at Keerthi Enterprises helped me choose the perfect health insurance plan for my elderly parents. Their patience in explaining all the terms and conditions was remarkable. Senior citizen health insurance made simple!",
      rating: 5,
      service: "Senior Citizen Health Insurance",
    },
    {
      name: "Mohammed Irfan",
      role: "IT Professional, Kukatpally",
      text: "Excellent service! Got my car insurance renewed within hours. The cashless claim process was seamless when I had a minor accident. Truly a trustworthy partner for all motor insurance needs.",
      rating: 5,
      service: "Motor Insurance",
    },
    {
      name: "Lakshmi Devi",
      role: "Homemaker, Kompally",
      text: "Very happy with their life insurance advice. They took time to understand our family's financial goals and recommended the most suitable LIC plan. Professional team with genuine care for customers.",
      rating: 5,
      service: "Life Insurance",
    },
    {
      name: "Venkat Rao",
      role: "Shop Owner, Uppal",
      text: "Best insurance broking company in India! They helped me with both my shop insurance and family health coverage. One-stop solution for all insurance needs. The team is knowledgeable and trustworthy.",
      rating: 5,
      service: "Commercial & Health Insurance",
    },
    {
      name: "Anjali Mehta",
      role: "Doctor, Malkajgiri",
      text: "As a medical professional, I understand the importance of good health insurance. Keerthi Enterprises helped me find comprehensive coverage with excellent hospital networks. Their expertise in health insurance is commendable.",
      rating: 5,
      service: "Health Insurance",
    },
  ];

  return (
    <>
      {/* PAGE HEADER */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Customer Reviews & Testimonials</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from 1000+ satisfied customers
            who trust Keerthi Enterprises for their insurance needs across India.
          </p>
        </div>
      </section>

      {/* TRUST INDICATORS */}
      <section className="py-12 bg-white" aria-labelledby="trust-heading">
        <div className="container mx-auto px-4">
          <h2 id="trust-heading" className="sr-only">Trust Indicators</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary">4.9/5</div>
              <div className="text-slate-600 mt-2">Average Customer Rating</div>
              <div className="text-yellow-400 mt-1">★★★★★</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary">1000+</div>
              <div className="text-slate-600 mt-2">Happy Customers</div>
              <div className="text-sm text-slate-500 mt-1">Families & Businesses</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary">98%</div>
              <div className="text-slate-600 mt-2">Customer Satisfaction</div>
              <div className="text-sm text-slate-500 mt-1">Would Recommend Us</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS GRID */}
      <section className="py-16 bg-slate-50" aria-labelledby="reviews-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="reviews-heading" className="text-2xl font-bold text-center mb-10">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="rounded-2xl border shadow-soft bg-white p-6 flex flex-col"
                itemScope
                itemType="https://schema.org/Review"
              >
                <div className="flex gap-1 mb-2 text-yellow-400" aria-label={`${t.rating} out of 5 stars`}>
                  {"★".repeat(t.rating)}
                </div>
                <span className="inline-block text-xs bg-primary/10 text-primary px-2 py-1 rounded mb-3 self-start">
                  {t.service}
                </span>
                <p className="text-slate-700 flex-grow" itemProp="reviewBody">"{t.text}"</p>
                <div className="border-t mt-4 pt-4" itemProp="author" itemScope itemType="https://schema.org/Person">
                  <p className="font-semibold" itemProp="name">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
                <meta itemProp="itemReviewed" content="Keerthi Enterprises Insurance Broking Company" />
                <span itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                  <meta itemProp="ratingValue" content={t.rating} />
                  <meta itemProp="bestRating" content="5" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES REVIEWED */}
      <section className="py-12 bg-white" aria-labelledby="services-reviewed">
        <div className="container mx-auto px-4 text-center">
          <h2 id="services-reviewed" className="text-xl font-semibold mb-6">Services Our Customers Love</h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              "Life Insurance",
              "Health Insurance",
              "Motor Insurance",
              "Family Floater Plans",
              "Term Insurance",
              "Car Insurance",
              "Bike Insurance",
              "Senior Citizen Insurance",
              "Group Insurance",
            ].map((service) => (
              <span key={service} className="px-4 py-2 bg-slate-100 rounded-full text-sm">
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Happy Customers Across India</h2>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">
            Experience the trusted service that 1000+ families rely on. Get personalized insurance solutions today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
            >
              Get Your Free Quote
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
