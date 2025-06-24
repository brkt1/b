

const PartnersSection = () => {

  <section className="partners-section">
    <img
      src="/image/partner/image.png"
      alt="Partners"
      className="w-full h-auto object-cover mb-8"
      style={{ maxHeight: '400px', minHeight: '400px' }}
      onError={e => { e.target.onerror = null; e.target.src = '/image/Biruhminds_logo.png'; }}
    />
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-dark mb-4">Our Partners</h2>
      <p className="text-gray-600">We collaborate with various organizations to enhance our impact.</p>
    </div>
  </section>
};

export default PartnersSection;