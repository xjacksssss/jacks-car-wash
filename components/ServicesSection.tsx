import { Droplets, Sparkles, Car, Wrench, Wind, Shield } from 'lucide-react'

const services = [
  {
    icon: Droplets,
    title: 'Exterior Wash',
    description: 'Complete exterior cleaning with premium soap and hand drying for a spotless shine.',
  },
  {
    icon: Sparkles,
    title: 'Interior Detailing',
    description: 'Deep cleaning of interior surfaces, vacuuming, and conditioning for a fresh look.',
  },
  {
    icon: Car,
    title: 'Full Service Wash',
    description: 'Comprehensive inside and out cleaning package for complete vehicle care.',
  },
  {
    icon: Shield,
    title: 'Wax & Polish',
    description: 'Professional waxing and polishing to protect your paint and enhance shine.',
  },
  {
    icon: Wrench,
    title: 'Engine Cleaning',
    description: 'Safe and thorough engine bay cleaning to maintain your vehicle\'s performance.',
  },
  {
    icon: Wind,
    title: 'Express Wash',
    description: 'Quick and efficient wash service for customers on the go.',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-background-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Professional car wash services tailored to keep your vehicle looking its best
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="card group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-h3 font-heading mb-3">{service.title}</h3>
                  <p className="text-text-secondary">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="btn-primary">
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  )
}