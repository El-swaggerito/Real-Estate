"use client"

import { useState, useEffect, useRef } from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { MapPin, Bed, Bath, Square } from "lucide-react"
import { properties } from "@/lib/properties"
import { motion } from "framer-motion"
import Image from "next/image"
import { MapSkeleton } from "@/components/map-skeleton"
import { gsap } from "gsap"

// Simplified function that only returns the main property image
const getPropertyImages = (property) => {
  if (!property) return []

  // Return only the property's main image
  return [property.image || "/placeholder.svg?height=600&width=800"]
}

// Use the specific API key provided
const GOOGLE_MAPS_API_KEY = "AIzaSyD-xIdP9Rwjq3Qw5Ph2HZ6RmaF2NAboszM"

export default function PropertyDetails({ params }: { params: { id: string } }) {
  const { id } = params
  const [property, setProperty] = useState(null)
  const [mapLoading, setMapLoading] = useState(true)
  const [mapError, setMapError] = useState(false)
  const [propertyImages, setPropertyImages] = useState([])
  const detailsRef = useRef(null)
  const amenitiesRef = useRef(null)
  const locationRef = useRef(null)
  const mapRef = useRef(null)

  useEffect(() => {
    const propertyId = Number.parseInt(id)
    const foundProperty = properties.find((p) => p.id === propertyId)
    setProperty(foundProperty)

    if (foundProperty) {
      setPropertyImages(getPropertyImages(foundProperty))
    }

    // GSAP animations for content sections
    if (detailsRef.current && amenitiesRef.current && locationRef.current) {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } })

      timeline
        .from(detailsRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          delay: 0.3,
        })
        .from(
          amenitiesRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
          },
          "-=0.5",
        )
        .from(
          locationRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
          },
          "-=0.5",
        )
    }
  }, [id])

  // Alternative map display using static image
  const getStaticMapUrl = (location) => {
    return `https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(
      location,
    )}&zoom=14&size=800x400&maptype=roadmap&markers=color:red%7C${encodeURIComponent(
      location,
    )}&key=${GOOGLE_MAPS_API_KEY}`
  }

  const handleMapError = () => {
    console.error("Google Maps iframe failed to load")
    setMapError(true)
    setMapLoading(false)
  }

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
          className="w-16 h-16 border-t-4 border-amber-500 border-solid rounded-full"
        ></motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8"
          >
            <div className="relative h-96 w-full bg-amber-50 rounded-lg overflow-hidden">
              <Image
                src={property.image || "/placeholder.svg?height=600&width=800"}
                alt={property.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                className="object-cover"
                priority
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg?height=600&width=800&text=Image+Not+Found"
                }}
              />
            </div>
          </motion.div>

          <div ref={detailsRef} className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
            <p className="text-xl text-green-600 font-bold mb-4">${property.price.toLocaleString()}</p>
            <p className="flex items-center text-gray-600 mb-4">
              <MapPin className="mr-2" /> {property.location}
            </p>
            <div className="flex space-x-4 mb-6">
              <span className="flex items-center">
                <Bed className="mr-2" /> {property.beds} beds
              </span>
              <span className="flex items-center">
                <Bath className="mr-2" /> {property.baths} baths
              </span>
              <span className="flex items-center">
                <Square className="mr-2" /> {property.sqft} sqft
              </span>
            </div>
            <p className="mb-6">{property.description}</p>
            <div className="flex space-x-4 mb-8">
              <Button className="bg-amber-500 hover:bg-amber-600 transition-all duration-300 transform hover:scale-105">
                Contact Agent
              </Button>
              <Button
                variant="outline"
                className="border-amber-500 text-amber-700 hover:bg-amber-50 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Viewing
              </Button>
            </div>
          </div>

          <div ref={amenitiesRef} className="bg-amber-50 p-6 rounded-lg mb-8 shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-amber-900">Amenities</h2>
            <ul className="grid grid-cols-2 gap-3">
              {property.amenities.map((amenity, index) => (
                <motion.li
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                  {amenity}
                </motion.li>
              ))}
            </ul>
          </div>

          <div ref={locationRef}>
            <h2 className="text-xl font-bold mb-4 text-amber-900">Location</h2>
            <div className="aspect-video w-full bg-amber-50 rounded-lg overflow-hidden">
              {mapLoading && <MapSkeleton />}

              {/* Static Map Image as Fallback */}
              {mapError && (
                <div className="w-full h-full relative">
                  <Image
                    src={getStaticMapUrl(property.location) || "/placeholder.svg"}
                    alt={`Map of ${property.location}`}
                    fill
                    className="object-cover"
                    onError={() => {
                      console.error("Static map also failed to load")
                    }}
                  />
                </div>
              )}

              {/* Primary Google Maps Embed */}
              {!mapError && (
                <iframe
                  ref={mapRef}
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: mapLoading ? "none" : "block" }}
                  loading="lazy"
                  allowFullScreen
                  src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(
                    property.location,
                  )}`}
                  onLoad={() => setMapLoading(false)}
                  onError={handleMapError}
                  className="rounded-lg shadow-md"
                />
              )}
            </div>

            {/* Fallback text location */}
            <p className="mt-4 text-amber-700">
              <MapPin className="inline-block mr-2" />
              {property.location}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
