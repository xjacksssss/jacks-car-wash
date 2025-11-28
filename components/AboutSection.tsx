import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="about" className="section bg-background-primary">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://placehold.co/800x1000/3B82F6/FFFFFF?text=Professional+Team"
              alt="Jacks Car Wash Team"
              fill
              className="object-cover"
            />
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div>
              <h2 className="text-text-primary mb-4">About Us</h2>
              <div className="w-20 h-1 bg-primary mb-6"></div>
            </div>

            <p className="text-lg text-text-secondary leading-relaxed">
              Jacks Car Wash has been providing high-quality trade services to the Shepperton area for over 15 years. Our team of licensed and insured professionals is committed to delivering exceptional workmanship and customer satisfaction on every project.
            </p>

            <p className="text-lg text-text-secondary leading-relaxed">
              With a focus on reliability, efficiency, and attention to detail, we strive to be the trusted choice for all your trade needs. Our commitment to excellence has made us a preferred service provider in the local community.
            </p>

            {/* Key Features */}
            <div className="space-y-4 mt-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-text-primary mb-2">
                    Over 15 Years of Experience
                  </h4>
                  <p className="text-text-secondary">
                    Serving the Shepperton community with dedication and expertise
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-text-primary mb-2">
                    Fully Licensed and Insured
                  </h4>
                  <p className="text-text-secondary">
                    Professional service with complete peace of mind
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-text-primary mb-2">
                    Customer Satisfaction Guaranteed
                  </h4>
                  <p className="text-text-secondary">
                    Quality workmanship and exceptional service on every project
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a href="#contact" className="btn-primary text-lg">
                Work With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}