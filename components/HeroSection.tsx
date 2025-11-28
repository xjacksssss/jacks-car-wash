import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1920x1080/3B82F6/FFFFFF?text=Professional+Car+Wash"
          alt="Car wash background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-text-primary/90 via-text-primary/70 to-text-primary/50" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 section-padding">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 animate-fade-in-up">
            Reliable Car Wash Services for Shepperton and Beyond
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Over 15 years of experience delivering quality workmanship and exceptional customer service
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Link
              href="#contact"
              className="btn-primary inline-flex items-center justify-center space-x-2 group"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:07729662000"
              className="btn-outline bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary inline-flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Us Today</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">500+</div>
              <div className="text-sm text-gray-300">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-sm text-gray-300">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <Link href="#services" className="flex flex-col items-center text-white hover:text-primary transition-colors group">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2 group-hover:border-primary transition-colors">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce group-hover:bg-primary" />
          </div>
        </Link>
      </div>
    </section>
  )
}