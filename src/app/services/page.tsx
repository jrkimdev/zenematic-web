export default function Services() {
  const services = [
    {
      title: "Commercial & Brand Videos",
      description: "High-quality promotional videos for businesses and brands."
    },
    {
      title: "Event Videography",
      description: "Weddings, corporate events, concerts, and social gatherings."
    },
    {
      title: "Social Media Content",
      description: "Short-form content designed for Instagram, TikTok, and YouTube."
    },
    {
      title: "Choreography & Dance Videos",
      description: "Creative, visually striking dance projects."
    },
    {
      title: "Post-Production & Editing",
      description: "Advanced editing, color grading, and motion graphics."
    }
  ];

  return (
    <main className="pt-20 min-h-screen">
      <section className="container-padding mx-auto py-12">
        <h1 className="text-5xl font-bold mb-8 text-left">Our Services</h1>
        <p className="text-xl mb-12">
          Every project has a story. Whether it's a brand film, a wedding, or a promotional video, 
          we tailor our services to fit your needs.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-zen-dark/50 rounded-lg hover:bg-zen-dark/70 transition-colors">
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
} 