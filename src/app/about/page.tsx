export default function About() {
  return (
    <main className="pt-20 min-h-screen">
      <section className="container-padding mx-auto py-12">
        <h1 className="text-5xl font-bold mb-8 text-left">About Zenematic</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
            <p className="mb-6">
              At Zenematic, we believe every story deserves to be told with emotion and creativity. 
              Founded by Zen Nguyen, our passion for storytelling is reflected in every project we take on.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Mission Statement</h3>
            <p className="mb-6">
              We craft compelling, emotionally engaging films that connect people and brands 
              through breathtaking visuals and dynamic storytelling.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">What Sets Us Apart</h2>
            <ul className="space-y-4">
              <li>• Cinematic storytelling approach</li>
              <li>• High production value</li>
              <li>• Artistic vision and detail</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
} 