'use client'

import { useState } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    location: 'Shepperton',
    rating: 5,
    text: 'Absolutely fantastic service! My car looks brand new. The attention to detail is incredible and the team is very professional. Highly recommend!',
    image: 'https://placehold.co/100x100/3B82F6/FFFFFF?text=SM',
  },
  {
    name: 'David Thompson',
    location: 'Walton-on-Thames',
    rating: 5,
    text: 'Been using Jacks Car Wash for over 3 years now. Always reliable, always professional. They treat your car like their own. Best in the area!',
    image: 'https://placehold.co/100x100/10B981/FFFFFF?text=DT',
  },
  {
    name: 'Emma Roberts',
    location: 'Sunbury',
    rating: 5,
    text: 'Outstanding work! The full valet service exceeded my expectations. My car interior looks and smells amazing. Will definitely be returning.',
    image: 'https://placehold.co/100x100/EF4444/FFFFFF?text=ER',
  },
  {
    name: 'Michael Brown',
    location: 'Shepperton',
    rating: 5,
    text: 'Professional, efficient, and great value for money. The team went above and beyond to ensure I was completely satisfied. Five stars!',
    image: 'https://placehold.co/100x100/3B82F6/FFFFFF?text=MB',
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="section bg-background-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-text-primary mb-4">What Our Customers Say</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-primary/20">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10 pt-12">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="relative w-20 h-20 mb-4 rounded-full overflow-hidden">
                  <Image
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-6 italic">
                  "{currentTestimonial.text}"
                </p>

                <div>
                  <h4 className="text-xl font-semibold text-text-primary">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-text-secondary">{currentTestimonial.location}</p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-primary w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-text-secondary mb-6">
            Join our hundreds of satisfied customers
          </p>
          <a href="#contact" className="btn-primary text-lg">
            Get Your Free Quote
          </a>
        </div>
      </div>
    </section>
  )
}