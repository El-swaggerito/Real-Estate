"use client"

import Image from "next/image"
import Link from "next/link"
import { Bed, Bath, Square, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface PropertyCardProps {
  id: number
  image: string
  title: string
  location: string // This is the correct prop name from the properties data
  price: number
  beds: number
  baths: number
  sqft: number
}

export function PropertyCard({ id, image, title, location, price, beds, baths, sqft }: PropertyCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-lg"
      whileHover={{
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      <div className="relative h-48 sm:h-64 bg-amber-100">
        <Image
          src={image || "/placeholder.svg?height=600&width=800"}
          alt={title}
          fill
          className="object-cover rounded-t-xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            e.currentTarget.src = "/placeholder.svg?height=600&width=800"
          }}
        />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold mb-2 text-amber-900">{title}</h3>
        <p className="text-amber-700 mb-4 flex items-center text-sm sm:text-base">
          <MapPin className="w-4 h-4 mr-2" />
          {location}
        </p>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <span className="text-xl sm:text-2xl font-bold text-amber-500 mb-2 sm:mb-0">${price.toLocaleString()}</span>
          <div className="flex space-x-4 text-amber-700 text-sm">
            <span className="flex items-center">
              <Bed className="w-4 h-4 mr-1" /> {beds}
            </span>
            <span className="flex items-center">
              <Bath className="w-4 h-4 mr-1" /> {baths}
            </span>
            <span className="flex items-center">
              <Square className="w-4 h-4 mr-1" /> {sqft}
            </span>
          </div>
        </div>
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Button asChild className="w-full bg-amber-500 hover:bg-amber-600 transition-all duration-300">
            <Link href={`/property/${id}`}>View Details</Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}
