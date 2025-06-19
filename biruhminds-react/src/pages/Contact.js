import React, { useState, useRef } from 'react';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const mailtoLink = `mailto:solgoodwill@gmail.com?subject=Contact%20Us%20Message&body=${encodeURIComponent(message)}`;
    const tempLink = document.createElement('a');
    tempLink.href = mailtoLink;
    tempLink.style.display = 'none';
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
    setTimeout(() => {
      setIsSubmitting(false);
      setMessage('');
      if (formRef.current) formRef.current.reset();
    }, 2000);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-[#F0FAFF] to-[#E8F9FC] min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 bg-gradient-to-r from-primary to-indigo-600 bg-clip-text ">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or want to discuss a project? We'd love to hear from you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:w-2/5 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-6 mb-8">
                <div className="bg-primary p-3 rounded-full">
                  <i className="fas fa-phone text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Call Us</h3>
                  <a href="tel:+251925546800" className="text-gray-600 hover:text-white transition">
                    +251 925 546 800
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 mb-8">
                <div className="bg-primary p-3 rounded-full">
                  <i className="fas fa-envelope text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Email Us</h3>
                  <a href="mailto:solgoodwill@gmail.com" className="text-gray-600 hover:text-white transition">
                    solgoodwill@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-primary p-3 rounded-full">
                  <i className="fas fa-map-marker-alt text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Visit Us</h3>
                  <address className="text-gray-600 not-italic">
                    kazanchis SA Building Office # 11-03<br />
                    Addis Ababa, Ethiopia
                  </address>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Business Hours</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-red-500">Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-3/5">
            <form ref={formRef} onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="mb-8">
                <label htmlFor="message" className="block text-lg font-semibold text-gray-800 mb-3">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder="Tell us about your project or inquiry..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all ${isSubmitting 
                  ? 'bg-primary cursor-not-allowed' 
                  : 'bg-primary  hover:from-primary hover:to-indigo-700 shadow-md hover:shadow-lg'}`}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i> Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
              <p className="mt-4 text-sm text-gray-500">
                We'll get back to you within 24 hours. Your information is secure and will never be shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;