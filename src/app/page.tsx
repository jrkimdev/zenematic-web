import { Metadata } from 'next';
import HomeHero from '@/components/HomeHero';

export const metadata: Metadata = {
  title: 'Zenematic | Home',
  description: 'Transforming ideas into stunning visuals that connect and inspire.',
};

const featuredWork = [
  {
    id: 1,
    title: "Aerial Cinematography",
    category: "Landscape",
    image: "/images/aerial-landscape.jpg",
    imageUrl: "https://images.unsplash.com/photo-1469122312224-c5846569feb1?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Commercial Production",
    category: "Brand Story",
    image: "/images/commercial-set.jpg",
    imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Event Coverage",
    category: "Documentary",
    image: "/images/event-documentary.jpg",
    imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeHero />
      
      {/* Featured Work Section */}
      <section className="py-24 bg-zen-olive">
        <div className="container-padding mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Featured Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWork.map((project) => (
              <div 
                key={project.id} 
                className="group relative overflow-hidden rounded-lg aspect-video cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-zen-olive-dark/90 via-zen-olive-dark/20 to-transparent z-10"></div>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-transform duration-500 group-hover:translate-y-0">
                  <h3 className="text-xl font-semibold mb-2 text-zen-cream">{project.title}</h3>
                  <p className="text-zen-cream/80">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}