/**
 * Type definitions for the application
 */

export interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export interface FormErrors {
  name?: string
  email?: string
  phone?: string
  service?: string
  message?: string
}

export interface Service {
  title: string
  description: string
  icon: string
  image: string
}

export interface Testimonial {
  name: string
  location: string
  rating: number
  text: string
  image: string
}

export interface NavigationItem {
  label: string
  link: string
}

export interface ContactInfo {
  phone: string
  email: string
  address: {
    street: string
    city: string
    postcode: string
    country: string
  }
}

export interface BusinessHours {
  day: string
  hours: string
  isOpen: boolean
}

export interface SocialMedia {
  platform: string
  url: string
  icon: string
}

export interface SEOMetadata {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
  twitterHandle?: string
}