"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ArrowRight, HomeIcon, DollarSign, MapPin } from "lucide-react"
import { PropertyCard } from "@/components/property-card"
import { properties } from "@/lib/properties"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

// Only register ScrollTrigger on the client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const featuredProperties = properties.slice(0, 3) // Gets the first 3 properties

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  useEffect(() => {
    // GSAP animation for the hero section
    gsap.from(".hero-content", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    })

    // Animate the featured properties section
    gsap.from(".featured-property", {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".featured-properties",
        start: "top 80%",
      },
    })

    // Animate the features section
    gsap.from(".feature-card", {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".features-section",
        start: "top 80%",
      },
    })

    // Animate the CTA section
    gsap.from(".cta-section", {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "elastic.out(1, 0.75)",
      scrollTrigger: {
        trigger: ".cta-section",
        start: "top 80%",
      },
    })
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/properties?search=${encodeURIComponent(searchQuery)}`)
    }
  }

  console.log("Featured Properties:", featuredProperties)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-01-31%2012.47.38%20-%20A%20stunning%20aerial%20view%20of%20a%20modern%20neighbourhood%20with%20contemporary%20houses,%20green%20trees,%20and%20a%20bright,%20welcoming%20atmosphere.%20The%20houses%20have%20large%20wind-AGMdZAT93BPr0gILywA5Xac3uxPSie.webp')] bg-cover bg-center py-40 text-white">
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative z-10">
            <div className="max-w-3xl hero-content">
              <motion.h1
                className="text-5xl font-bold mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Find Your Dream Home in Our Modern Communities
              </motion.h1>
              <motion.p
                className="text-xl mb-8 text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Discover thoughtfully designed properties in prime locations
              </motion.p>
              <motion.form
                onSubmit={handleSearch}
                className="flex flex-col sm:flex-row gap-4 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Input
                  type="text"
                  placeholder="Enter a location"
                  className="bg-white/90 text-black placeholder:text-gray-500 text-lg py-6"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit" size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                  Search Now
                </Button>
              </motion.form>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-amber-50 to-white featured-properties">
          <div className="container">
            <div className="flex items-center justify-between mb-12">
              <motion.h2
                className="text-3xl font-bold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Featured Properties
              </motion.h2>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                <Button variant="ghost" asChild className="text-amber-600 hover:text-amber-700">
                  <Link href="/properties" className="flex items-center">
                    View All Properties <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[400px] relative z-10">
              {featuredProperties && featuredProperties.length > 0 ? (
                featuredProperties.map((property, index) => (
                  <div key={property.id} className="featured-property bg-white rounded-xl overflow-hidden shadow-lg">
                    <PropertyCard
                      id={property.id}
                      image={property.image}
                      title={property.title}
                      location={property.location}
                      price={property.price}
                      beds={property.beds}
                      baths={property.baths}
                      sqft={property.sqft}
                    />
                  </div>
                ))
              ) : (
                <div className="col-span-3 text-center py-10">
                  <p className="text-amber-700">Loading properties...</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="py-20 features-section">
          <div className="container">
            <motion.h2
              className="text-3xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Why Choose Our Properties
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <FeatureCard
                icon={HomeIcon}
                title="Modern Design"
                description="Contemporary architecture with thoughtful layouts and premium finishes."
              />
              <FeatureCard
                icon={MapPin}
                title="Prime Locations"
                description="Carefully selected neighborhoods with excellent amenities and connectivity."
              />
              <FeatureCard
                icon={DollarSign}
                title="Smart Investment"
                description="Properties designed to appreciate in value while providing modern comfort."
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-amber-50 cta-section">
          <div className="container">
            <motion.div
              className="bg-white rounded-2xl p-12 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
                <p className="text-gray-600 mb-8">
                  Use our mortgage calculator to plan your investment and make your dream home a reality.
                </p>
                <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600">
                  <Link href="/mortgage-calculator">Try Our Mortgage Calculator</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      className="text-center feature-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-600 mb-6">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  )
}
