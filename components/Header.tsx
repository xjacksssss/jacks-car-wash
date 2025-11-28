'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const navigation = [
  { label: 'Home', link: '#home' },
  { label: 'Services', link: '#services' },
  { label: 'About', link: '#about' },
  { label: 'Testimonials', link: '#testimonials' },
  { label: 'Contact', link: '#contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    
    const element = document.querySelector(link)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-lg py-4'
          : 'bg-transparent py-6'
      )}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-2"
          >
            <div className={cn(
              'text-2xl font-heading font-bold transition-colors duration-300',
              isScrolled ? 'text-primary' : 'text-white'
            )}>
              Jacks Car Wash
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.link}
                onClick={(e) => handleNavClick(e, item.link)}
                className={cn(
                  'font-medium transition-colors duration-200 hover:text-primary',
                  isScrolled ? 'text-text-primary' : 'text-white hover:text-white/90'
                )}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:07729662000"
              className="btn-primary"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              'md:hidden p-2 rounded-lg transition-colors',
              isScrolled ? 'text-text-primary' : 'text-white'
            )}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-xl animate-slide-down">
            <div className="flex flex-col space-y-4 px-4">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.link}
                  onClick={(e) => handleNavClick(e, item.link)}
                  className="text-text-primary font-medium hover:text-primary transition-colors py-2"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:07729662000"
                className="btn-primary text-center"
              >
                Call Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}