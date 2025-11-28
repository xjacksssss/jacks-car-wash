import ContactForm from './ContactForm'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-background-primary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to give your car the care it deserves? Contact us today for a free quote
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-h2 font-heading mb-6">Contact Information</h3>
            <p className="text-text-secondary mb-8">
              Get in touch with us today. We're here to answer any questions and provide you with the best car wash service in Shepperton.
            </p>

            <div className="space-y-6 mb-8">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-1">Phone</h4>
                  <a
                    href="tel:07729662000"
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    07729 662000
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-1">Email</h4>
                  <a
                    href="mailto:jack.sapsford@hotmail.co.uk"
                    className="text-text-secondary hover:text-primary transition-colors break-all"
                  >
                    jack.sapsford@hotmail.co.uk
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-1">Address</h4>
                  <p className="text-text-secondary">
                    5 St. Andrews Close<br />
                    SHEPPERTON, England<br />
                    TW17 8QJ
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-1">Business Hours</h4>
                  <div className="text-text-secondary space-y-1">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 5:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.0!2d-0.4563!3d51.3955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDIzJzQzLjgiTiAwwrAyNycyMi43Ilc!5e0!3m2!1sen!2suk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Jacks Car Wash Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-background-secondary rounded-2xl p-8 shadow-lg">
              <h3 className="text-h2 font-heading mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}