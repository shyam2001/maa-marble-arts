export default function MaaMarbleArtsWebsite() {
  const services = [
    {
      title: "Stone Etching",
      desc: "Custom engraving on marble and granite stones with names, photos, quotes, and unique designs.",
      icon: "🪨",
    },
    {
      title: "Marble Art",
      desc: "Premium marble craftsmanship for decorative pieces, temples, and custom marble work.",
      icon: "✨",
    },
    {
      title: "Name Stickers",
      desc: "Durable custom name stickers for homes, offices, bikes, and personal use.",
      icon: "🏷️",
    },
    {
      title: "Car Plate Stickers",
      desc: "Stylish and long-lasting car number plate stickers with clean finishing.",
      icon: "🚗",
    },
    {
      title: "PVC & POP Work",
      desc: "Modern ceiling and interior solutions with quality finishing and attractive designs.",
      icon: "🏠",
    },
    {
      title: "Carpentry Work",
      desc: "Woodwork and custom furniture solutions with professional craftsmanship.",
      icon: "🪵",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 to-white text-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-yellow-500/20 border border-yellow-400 text-yellow-300 text-sm mb-6">
            Crafted with Quality & Trust
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Maa Marble Arts
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
            Professional Marble & Granite Etching, Custom Name Stickers,
            Car Plate Stickers, PVC & POP Work, and Carpentry Services.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917300846986"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg"
            >
              Chat on WhatsApp
            </a>

            <a
              href="tel:7300846986"
              className="border border-white/30 hover:bg-white hover:text-black transition px-8 py-4 rounded-2xl text-lg font-semibold"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Maa Marble Arts provides premium marble engraving and custom
              design services with precision craftsmanship. We specialize in
              stone etching on marble and granite, stylish name stickers,
              number plate stickers, PVC & POP interior work, and carpentry
              services.
            </p>

            <p className="text-lg leading-relaxed text-gray-600 mt-4">
              Our goal is to deliver quality work, affordable pricing, and
              customer satisfaction with every project.
            </p>
          </div>

          <div className="bg-stone-200 rounded-3xl p-8 shadow-xl">
            <div className="space-y-4 text-lg">
              <div className="flex items-center justify-between border-b pb-3">
                <span className="font-semibold">Business Name</span>
                <span>Maa Marble Arts</span>
              </div>

              <div className="flex items-center justify-between border-b pb-3">
                <span className="font-semibold">WhatsApp</span>
                <span>7300846986</span>
              </div>

              <div className="flex items-center justify-between border-b pb-3">
                <span className="font-semibold">Services</span>
                <span>Marble • Stickers • Interior</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-semibold">Availability</span>
                <span>Contact Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-stone-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">
              Quality craftsmanship with modern and customized solutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300 border border-stone-100"
              >
                <div className="text-5xl mb-5">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600 text-lg">
            Trusted service with quality workmanship and customer satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <div className="text-5xl mb-4">⭐</div>
            <h3 className="text-2xl font-bold mb-2">Quality Work</h3>
            <p className="text-gray-600">
              Premium materials and professional finishing in every project.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-2">Fast Service</h3>
            <p className="text-gray-600">
              Timely delivery and quick response for all customer needs.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold mb-2">Trusted Support</h3>
            <p className="text-gray-600">
              Customer-focused service with honest pricing and support.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Start Your Project?
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-10">
          Contact Maa Marble Arts today for custom marble engraving,
          interior work, stickers, and carpentry services.
        </p>

        <a
          href="https://wa.me/917300846986"
          target="_blank"
          className="inline-block bg-green-500 hover:bg-green-600 transition px-10 py-5 rounded-2xl text-xl font-semibold shadow-lg"
        >
          WhatsApp Us: 7300846986
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-gray-300 py-8 text-center text-sm">
        <p>© 2026 Maa Marble Arts. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
