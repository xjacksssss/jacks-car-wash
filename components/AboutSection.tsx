import Image from 'next/image'
import { CheckCircle, Award, Users, Clock } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Quality Workmanship',
    description: 'Exceptional attention to detail in every service',
  },
  {
    icon: Users,
    title: 'Customer Satisfaction',
    description: 'Dedicated to exceeding your expectations',
  },
  {
    icon: Clock,
    title: '15+ Years Experience',
    description: 'Trusted expertise in car care services',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background-primary">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://placehold.co/800x1000/10B981/FFFFFF?text=About+Jacks+Car+Wash"
              alt="About Jacks Car Wash"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content Side */}
          <div>
            <h2 className="section-title text-left mb-6">
              About Jacks Car Wash
            </h2>
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Jacks Car Wash is a trusted name in the Shepperton community, offering a wide range of car wash and detailing services to both residential and commercial clients.
            </p>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              With over 15 years of experience in the industry, we take pride in our commitment to quality workmanship and customer satisfaction. Our team of skilled professionals is dedicated to providing reliable and efficient solutions to meet all your vehicle care needs.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-secondary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-text-secondary">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Key Points */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-text-primary">Competitive pricing and transparent quoting</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-text-primary">Eco-friendly cleaning products</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-text-primary">Fully insured and professional service</span>
              </div>
            </div>

            <a href="#contact" className="btn-primary">
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}