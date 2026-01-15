import { useState } from "react";
import useSEO from "../hooks/useSEO";

export default function Contact() {
  useSEO({
    title: "Contact Us - Get Free Insurance Quote in India",
    description:
      "Contact Keerthi Enterprises - India's trusted insurance broking company. Call +91 63098 32224, Email: keerthienterpriseshyd1972@gmail.com. Headquartered in Hyderabad, serving all of India. Get quotes for Life, Health & Motor Insurance. Mon-Sat 9AM-6PM.",
    keywords:
      "contact keerthi enterprises, insurance quote india, free insurance consultation india, insurance enquiry, call insurance agent india, insurance broking company contact, get insurance quote online india, best insurance helpline india",
    canonical: "/contact",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Keerthi Enterprises email
    const toEmail = "keerthienterpriseshyd1972@gmail.com";

    // Create email subject
    const subject = `Insurance Quote Request - ${formData.service || "General Enquiry"} | ${formData.name}`;

    // Create email body with form details
    const body = `
Dear Keerthi Enterprises Team,

I am interested in getting an insurance quote. Please find my details below:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CUSTOMER DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Full Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Insurance Type: ${formData.service || "Not specified"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REQUIREMENTS / MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${formData.message || "No additional message provided."}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Please contact me at your earliest convenience with the best insurance options.

Thank you!

Best regards,
${formData.name}
${formData.phone}
    `.trim();

    // Create mailto link and open in new tab (works with Gmail)
    const mailtoLink = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the mailto link
    window.location.href = mailtoLink;

    // Show success message
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* PAGE HEADER */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us - Get Free Insurance Quote</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Ready to protect what matters most? Get in touch with India's trusted insurance broking company
            for a free consultation on Life, Health & Motor Insurance.
          </p>
        </div>
      </section>

      {/* QUICK CONTACT BAR */}
      <section className="bg-slate-50 py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-center">
            <a href="tel:+916309832224" className="flex items-center gap-2 text-primary font-semibold hover:underline">
              <span className="text-2xl">📞</span>
              <span>+91 63098 32224</span>
            </a>
            <a href="mailto:keerthienterpriseshyd1972@gmail.com" className="flex items-center gap-2 text-primary font-semibold hover:underline">
              <span className="text-2xl">✉️</span>
              <span>keerthienterpriseshyd1972@gmail.com</span>
            </a>
            <span className="flex items-center gap-2 text-slate-600">
              <span className="text-2xl">🕘</span>
              <span>Mon-Sat: 9AM - 6PM</span>
            </span>
          </div>
        </div>
      </section>

      {/* CONTACT FORM & INFO */}
      <section className="py-16 bg-white" aria-labelledby="contact-form-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* FORM */}
            <div>
              <h2 id="contact-form-heading" className="text-2xl font-bold mb-6">
                Get Your Free Insurance Quote
              </h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="text-4xl mb-4" aria-hidden="true">📧</div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Your Email is Ready to Send!
                  </h3>
                  <p className="text-green-700 mb-4">
                    Your email client should have opened with all your details pre-filled.
                    Simply click <strong>Send</strong> in your email to submit your enquiry.
                  </p>
                  <p className="text-sm text-green-600 mb-4">
                    If your email didn't open, you can directly email us at:<br />
                    <a href="mailto:keerthienterpriseshyd1972@gmail.com" className="text-primary font-semibold underline">
                      keerthienterpriseshyd1972@gmail.com
                    </a>
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">
                      Insurance Type *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                    >
                      <option value="">Select insurance type</option>
                      <option value="life">Life Insurance</option>
                      <option value="health">Health Insurance</option>
                      <option value="motor-car">Car Insurance</option>
                      <option value="motor-bike">Bike Insurance</option>
                      <option value="family-floater">Family Floater Health Plan</option>
                      <option value="term">Term Life Insurance</option>
                      <option value="senior-citizen">Senior Citizen Health Insurance</option>
                      <option value="group">Group/Corporate Insurance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                      Your Requirements (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition resize-none"
                      placeholder="Tell us about your insurance needs, budget, or any specific requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
                  >
                    Submit & Get Free Quote
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    By submitting, you agree to be contacted by our team. We respect your privacy.
                  </p>
                </form>
              )}
            </div>

            {/* CONTACT INFO */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg" aria-hidden="true">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone / WhatsApp</h3>
                    <a href="tel:+916309832224" className="text-primary hover:underline text-lg">
                      +91 63098 32224
                    </a>
                    <p className="text-sm text-slate-500">Call or WhatsApp anytime</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg" aria-hidden="true">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:keerthienterpriseshyd1972@gmail.com" className="text-primary hover:underline">
                      keerthienterpriseshyd1972@gmail.com
                    </a>
                    <p className="text-sm text-slate-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg" aria-hidden="true">
                    <span className="text-2xl">🕘</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-slate-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-slate-600">Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg" aria-hidden="true">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Head Office - ECIL, Secunderabad</h3>
                    <p className="text-slate-600">
                      H.NO: 1-7-12/1/1, New Municipal Office Line,<br />
                      South Kamala Nagar, M J Colony,<br />
                      Moula Ali, Secunderabad – 500062
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-lg" aria-hidden="true">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Branch Office - Gajularamaram</h3>
                    <p className="text-slate-600">
                      H.No. 266, 1st Floor,<br />
                      Gajularamaram Road, Near UMCC Hospital,<br />
                      Hyderabad – 500055
                    </p>
                  </div>
                </div>
              </div>

              {/* CREDENTIALS */}
              <div className="mt-8 p-6 bg-slate-50 rounded-2xl">
                <h3 className="font-semibold mb-3">Verified Business Credentials</h3>
                <div className="space-y-2 text-sm text-slate-600">
                  <p><span className="font-medium">GSTIN:</span> 36AMZPL3954H1ZC</p>
                  <p><span className="font-medium">MSME No:</span> UDYAM-TS-02-0029886</p>
                  <p><span className="font-medium">Established:</span> 2017</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAPS */}
      <section className="py-12 bg-slate-50" aria-labelledby="maps-heading">
        <div className="container mx-auto px-4">
          <h2 id="maps-heading" className="text-2xl font-bold text-center mb-8">Find Us on Map</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-soft">
              <div className="bg-primary text-white p-4 text-center font-semibold">
                Head Office - ECIL, Secunderabad
              </div>
              <iframe
                src="https://maps.google.com/maps?hl=en&q=17.4723056,78.5643889&t=m&z=17&output=embed"
                className="w-full h-64 border-0"
                loading="lazy"
                title="Keerthi Enterprises ECIL Office - Insurance Broking Company Hyderabad"
                allowFullScreen
              ></iframe>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-soft">
              <div className="bg-secondary text-white p-4 text-center font-semibold">
                Branch Office - Gajularamaram
              </div>
              <iframe
                src="https://www.google.com/maps?q=17.5193611,78.42775&z=17&output=embed"
                className="w-full h-64 border-0"
                loading="lazy"
                title="Keerthi Enterprises Gajularamaram Office - Insurance Broking Company Hyderabad"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
