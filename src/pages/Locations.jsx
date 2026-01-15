import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";

export default function Locations() {
  useSEO({
    title: "Office Locations - Headquarters in Hyderabad, Serving All India",
    description:
      "Visit Keerthi Enterprises insurance offices - India's trusted insurance broking company. Head Office: ECIL, Secunderabad 500062. Branch: Gajularamaram, Hyderabad 500055. Serving customers across all Indian states. Open Mon-Sat 9AM-6PM. Call +91 63098 32224.",
    keywords:
      "keerthi enterprises office india, insurance broking company india locations, best insurance agent india, insurance office hyderabad, insurance broking company serving all india, insurance company headquarters hyderabad, pan india insurance broking",
    canonical: "/locations",
  });

  return (
    <>
      {/* PAGE HEADER */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Offices - Serving All India</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Visit us at our headquarters in Hyderabad or connect with us from anywhere in India.
            We provide expert insurance advice and support to customers across all states.
          </p>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="py-20 bg-white" aria-labelledby="offices-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="offices-heading" className="sr-only">Our Office Locations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Head Office - ECIL */}
            <article className="rounded-2xl border shadow-soft p-8" itemScope itemType="https://schema.org/LocalBusiness">
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                Head Office
              </div>
              <h3 className="text-2xl font-bold mb-4" itemProp="name">Keerthi Enterprises - ECIL Branch</h3>

              <address className="space-y-3 text-slate-700 mb-6 not-italic" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <p className="flex items-start gap-2">
                  <span aria-hidden="true">📍</span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=H.NO:+1-7-12/1/1,+New+Municipal+Office+Line,+South+Kamala+Nagar,+M+J+Colony,+Moula+Ali,+Secunderabad+500062"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline"
                    itemProp="streetAddress"
                  >
                    H.NO: 1-7-12/1/1, New Municipal Office Line, South Kamala Nagar,
                    M J Colony, Moula Ali, <span itemProp="addressLocality">Secunderabad</span> – <span itemProp="postalCode">500062</span>
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span aria-hidden="true">📌</span> <strong>GSTIN:</strong> 36AMZPL3954H1ZC
                </p>
                <p className="flex items-center gap-2">
                  <span aria-hidden="true">🧾</span> <strong>MSME No:</strong> UDYAM-TS-02-0029886
                </p>
                <p className="flex items-center gap-2">
                  <span aria-hidden="true">📞</span>
                  <a href="tel:+916309832224" className="text-primary hover:underline" itemProp="telephone">+91 63098 32224</a>
                </p>
                <p className="flex items-center gap-2">
                  <span aria-hidden="true">✉️</span>
                  <a href="mailto:keerthienterpriseshyd1972@gmail.com" className="text-primary hover:underline" itemProp="email">
                    keerthienterpriseshyd1972@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span aria-hidden="true">🕘</span> <strong>Hours:</strong> Mon–Sat: 9:00 AM – 6:00 PM
                </p>
              </address>

              <a
                href="https://www.google.com/maps?q=17.4723056,78.5643889"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-lg bg-primary text-white text-sm font-semibold px-4 py-2 hover:bg-primary/90 transition mb-6"
              >
                📍 Get Directions on Google Maps
              </a>

              <div className="w-full h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?hl=en&q=17.4723056,78.5643889&t=m&z=17&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  title="Keerthi Enterprises ECIL Office Location Map"
                  allowFullScreen
                ></iframe>
              </div>
            </article>

            {/* Branch Office - Gajularamaram */}
            <article className="rounded-2xl border shadow-soft p-8" itemScope itemType="https://schema.org/LocalBusiness">
              <div className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                Branch Office
              </div>
              <h3 className="text-2xl font-bold mb-4" itemProp="name">Keerthi Enterprises - Gajularamaram Branch</h3>

              <address className="space-y-3 text-slate-700 mb-6 not-italic" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <p className="flex items-start gap-2">
                  <span aria-hidden="true">📍</span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=H.No.+266,+1st+Floor,+Gajularamaram+Road,+Near+UMCC+Hospital,+Hyderabad+500055"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline"
                    itemProp="streetAddress"
                  >
                    H.No. 266, 1st Floor, Gajularamaram Road, Near UMCC Hospital,
                    <span itemProp="addressLocality">Hyderabad</span> – <span itemProp="postalCode">500055</span>
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span aria-hidden="true">📞</span>
                  <a href="tel:+916309832224" className="text-primary hover:underline" itemProp="telephone">+91 63098 32224</a>
                </p>
                <p className="flex items-center gap-2">
                  <span aria-hidden="true">✉️</span>
                  <a href="mailto:keerthienterpriseshyd1972@gmail.com" className="text-primary hover:underline" itemProp="email">
                    keerthienterpriseshyd1972@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span aria-hidden="true">🕘</span> <strong>Hours:</strong> Mon–Sat: 9:00 AM – 6:00 PM
                </p>
              </address>

              <a
                href="https://www.google.com/maps?q=17.5193611,78.42775"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-lg bg-primary text-white text-sm font-semibold px-4 py-2 hover:bg-primary/90 transition mb-6"
              >
                📍 Get Directions on Google Maps
              </a>

              <div className="w-full h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=17.5193611,78.42775&z=17&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  title="Keerthi Enterprises Gajularamaram Office Location Map"
                  allowFullScreen
                ></iframe>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* BUSINESS HOURS */}
      <section className="py-16 bg-slate-50" aria-labelledby="hours-heading">
        <div className="container mx-auto px-4 text-center">
          <h2 id="hours-heading" className="text-2xl font-bold mb-6">Business Hours</h2>
          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-soft p-6">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-600">Monday - Saturday</span>
                <span className="font-semibold text-primary">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Sunday</span>
                <span className="font-semibold text-red-500">Closed</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              * We also offer phone consultations and online support
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-16 bg-white" aria-labelledby="areas-heading">
        <div className="container mx-auto px-4 text-center">
          <h2 id="areas-heading" className="text-2xl font-bold mb-6">We Serve All of India</h2>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            {[
              "Telangana", "Andhra Pradesh", "Karnataka", "Tamil Nadu", "Maharashtra",
              "Gujarat", "Rajasthan", "Delhi NCR", "Uttar Pradesh", "West Bengal",
              "Kerala", "Punjab", "Haryana", "Madhya Pradesh", "Bihar"
            ].map((area) => (
              <span key={area} className="px-4 py-2 bg-slate-100 rounded-full">
                {area}
              </span>
            ))}
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">
              + All Indian States
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Visit? Contact Us Online!</h2>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">
            Get insurance consultation from the comfort of your home. We serve customers across all of India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
            >
              Contact Us Online
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
