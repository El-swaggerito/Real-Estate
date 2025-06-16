"use client"

import Image from "next/image"
import Link from "next/link"
import { Bed, Bath, Square } from "lucide-react"
import { Button } from "@/components/ui/button"
// Import motion from framer-motion
import { motion } from "framer-motion"

interface PropertyListItemProps {
  id: number
  image: string
  title: string
  location: string
  price: number
  beds: number
  baths: number
  sqft: number
  amenities: string[]
}

// Update the component to use motion
export function PropertyListItem({
  id,
  image,
  title,
  location,
  price,
  beds,
  baths,
  sqft,
  amenities,
}: PropertyListItemProps) {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-lg"
      whileHover={{
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      <div className="flex flex-col sm:flex-row">
        <div className="relative w-full sm:w-48 h-48">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <div className="flex-1 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-amber-900">{title}</h3>
              <p className="text-amber-700 mb-2 text-sm sm:text-base">{location}</p>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-amber-500 mt-2 sm:mt-0">${price.toLocaleString()}</span>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4">
            <div className="flex space-x-4 text-amber-700 text-sm mb-4 sm:mb-0">
              <span className="flex items-center">
                <Bed className="w-4 h-4 mr-1" /> {beds}
              </span>
              <span className="flex items-center">
                <Bath className="w-4 h-4 mr-1" /> {baths}
              </span>
              <span className="flex items-center">
                <Square className="w-4 h-4 mr-1" /> {sqft} sqft
              </span>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className="bg-amber-500 hover:bg-amber-600 w-full sm:w-auto transition-all duration-300">
                <Link href={`/property/${id}`}>View Details</Link>
              </Button>
            </motion.div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {amenities.map((amenity, index) => (
              <motion.span
                key={amenity}
                className="px-2 py-1 bg-amber-100 text-amber-700 rounded-full text-xs sm:text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgb(251, 191, 36)",
                  color: "rgb(120, 53, 15)",
                }}
              >
                {amenity}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
