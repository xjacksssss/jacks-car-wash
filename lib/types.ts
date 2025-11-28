/**
 * Type definitions for Jacks Car Wash application
 */

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  price?: string
  duration?: string
}

export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  text: string
  image: string
  date?: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  service?: string
  message: string
}

export interface ContactFormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

export interface BusinessInfo {
  name: string
  tagline: string
  description: string
  phone: string
  email: string
  address: {
    street: string
    city: string
    postcode: string
    country: string
  }
  hours: {
    weekday: string
    saturday: string
    sunday: string
  }
  socialMedia?: {
    facebook?: string
    instagram?: string
    twitter?: string
  }
}

export interface NavigationItem {
  name: string
  href: string
  external?: boolean
}

export interface SEOMetadata {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
  canonical?: string
}

export type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}