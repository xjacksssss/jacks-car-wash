'use client'

import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'Shepperton',
    rating: 5,
    text: 'Absolutely brilliant service! Jack did an amazing job on my car. It looks brand new. Very professional and reasonably priced. Highly recommend!',
    image: 'https://placehold.co/100x100/3B82F6/FFFFFF?text=SJ',
  },
  {
    name: 'Michael Thompson',
    location: 'Sunbury-on-Thames',
    rating: 5,
    text: 'I\'ve been using Jacks Car Wash for years. Always reliable, thorough, and friendly service. They really care about their customers and it shows in their work.',
    image: 'https://placehold.co/100x100/10B981/FFFFFF?text=MT',
  },
  {
    name: 'Emma Davies',
    location: 'Walton-on-Thames',
    rating: 5,
    text: 'Fantastic attention to detail! My car interior was in a terrible state with kids and pets, but Jack transformed it completely. Couldn\'t be happier with the results.',
    image: 'https://placehold.co/100x100/EF4444/FFFFFF?text=ED',
  },
  {
    name: 'David Wilson',
    location: 'Shepperton',
    rating: 5,
    text: 'Professional, efficient, and great value for money. Jack is friendly and always goes the extra mile. My go-to car wash service!',
    image: 'https://placehold.co/100x100/3B82F6/FFFFFF?text=DW',
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
    <section id="testimonials" className="section-padding bg-background-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />
            
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-xl md:text-2xl text-text-primary text-center mb-8 leading-relaxed">
                "{currentTestimonial.text}"
              </p>

              {/* Author */}
              <div className="flex flex-col items-center">
                <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
                  <Image
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-heading font-semibold text-lg text-text-primary">
                  {currentTestimonial.name}
                </h4>
                <p className="text-text-secondary">{currentTestimonial.location}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
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
                className="p-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* All Testimonials Grid (Hidden on mobile) */}
          <div className="hidden lg:grid grid-cols-4 gap-6 mt-12">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                  index === currentIndex
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-200 hover:border-primary/50'
                }`}
              >
                <div className="relative w-16 h-16 rounded-full overflow-hidden mx-auto mb-2">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="font-semibold text-sm text-center">{testimonial.name}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}