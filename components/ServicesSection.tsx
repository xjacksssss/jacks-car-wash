import Image from 'next/image'

const services = [
  {
    title: 'Exterior Wash',
    description: 'Professional hand wash with premium products to restore your vehicle\'s shine and protect the paint.',
    icon: '🚗',
    image: 'https://placehold.co/400x300/3B82F6/FFFFFF?text=Exterior+Wash',
  },
  {
    title: 'Interior Detailing',
    description: 'Deep cleaning of all interior surfaces including vacuuming, upholstery cleaning, and dashboard treatment.',
    icon: '✨',
    image: 'https://placehold.co/400x300/10B981/FFFFFF?text=Interior+Detail',
  },
  {
    title: 'Full Valet Service',
    description: 'Complete inside and outside cleaning service for a showroom-quality finish.',
    icon: '🌟',
    image: 'https://placehold.co/400x300/EF4444/FFFFFF?text=Full+Valet',
  },
  {
    title: 'Wax & Polish',
    description: 'Professional waxing and polishing to protect your paintwork and enhance the gloss.',
    icon: '💎',
    image: 'https://placehold.co/400x300/3B82F6/FFFFFF?text=Wax+Polish',
  },
  {
    title: 'Wheel Cleaning',
    description: 'Specialized wheel and tire cleaning to remove brake dust and restore original appearance.',
    icon: '⚙️',
    image: 'https://placehold.co/400x300/10B981/FFFFFF?text=Wheel+Clean',
  },
  {
    title: 'Engine Bay Cleaning',
    description: 'Safe and effective engine bay cleaning to maintain your vehicle\'s mechanical appearance.',
    icon: '🔧',
    image: 'https://placehold.co/400x300/EF4444/FFFFFF?text=Engine+Bay',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="section bg-background-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-text-primary mb-4">Our Services</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Comprehensive car care services tailored to keep your vehicle looking its best
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card group hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="text-4xl mb-4">{service.icon}</div>
              
              <h3 className="text-2xl text-text-primary mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-text-secondary leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary text-lg">
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  )
}