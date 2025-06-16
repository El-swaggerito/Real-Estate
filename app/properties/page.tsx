"use client"

import { Suspense, useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { LayoutGrid, List } from "lucide-react"
import { properties } from "@/lib/properties"
import { PropertyCard } from "@/components/property-card"
import { PropertyListItem } from "@/components/property-list-item"

export default function PropertyListings() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col lg:flex-row">
        <Suspense fallback={<div>Loading...</div>}>
          <PropertyListingsContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

function PropertyListingsContent() {
  const searchParams = useSearchParams()
  const initialSearch = searchParams.get("search") || ""

  const [filteredProperties, setFilteredProperties] = useState(properties)
  const [searchQuery, setSearchQuery] = useState(initialSearch)
  const [priceRange, setPriceRange] = useState([0, 6000000])
  const [propertyType, setPropertyType] = useState("")
  const [bedrooms, setBedrooms] = useState("")
  const [bathrooms, setBathrooms] = useState("")
  const [amenities, setAmenities] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  useEffect(() => {
    applyFilters()
  }, [searchQuery, priceRange, propertyType, bedrooms, bathrooms, amenities, sortBy])

  const applyFilters = () => {
    let filtered = [...properties]

    if (searchQuery) {
      filtered = filtered.filter(
        (property) =>
          property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    filtered = filtered.filter((property) => property.price >= priceRange[0] && property.price <= priceRange[1])

    if (propertyType) {
      filtered = filtered.filter((property) => property.type === propertyType)
    }

    if (bedrooms) {
      filtered = filtered.filter((property) => property.beds >= Number.parseInt(bedrooms))
    }

    if (bathrooms) {
      filtered = filtered.filter((property) => property.baths >= Number.parseInt(bathrooms))
    }

    if (amenities.length > 0) {
      filtered = filtered.filter((property) => amenities.every((amenity) => property.amenities.includes(amenity)))
    }

    if (sortBy) {
      switch (sortBy) {
        case "price-asc":
          filtered.sort((a, b) => a.price - b.price)
          break
        case "price-desc":
          filtered.sort((a, b) => b.price - a.price)
          break
        case "newest":
          filtered.sort((a, b) => b.id - a.id)
          break
      }
    }

    setFilteredProperties(filtered)
  }

  const toggleAmenity = (amenity: string) => {
    setAmenities((prev) => (prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]))
  }

  return (
    <>
      <aside className="w-full lg:w-64 bg-amber-50 p-4">
        <h2 className="text-xl font-bold mb-4 text-amber-900">Filters</h2>
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Search location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="w-full p-2 border rounded"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="">Property Type</option>
            <option value="House">House</option>
            <option value="Apartment">Apartment</option>
            <option value="Cabin">Cabin</option>
          </select>
          <div>
            <label className="block mb-2">Price Range</label>
            <div className="px-2">
              <Slider defaultValue={[0, 6000000]} max={6000000} step={100000} onValueChange={setPriceRange} />
              <div className="flex justify-between mt-2 text-sm">
                <span>${(priceRange[0] / 1000000).toFixed(1)}M</span>
                <span>${(priceRange[1] / 1000000).toFixed(1)}M</span>
              </div>
            </div>
          </div>
          <select className="w-full p-2 border rounded" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)}>
            <option value="">Bedrooms</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </select>
          <select
            className="w-full p-2 border rounded"
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
          >
            <option value="">Bathrooms</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
          <div>
            <h3 className="font-bold mb-2">Amenities</h3>
            <div className="space-y-2">
              {["Pool", "Gym", "Smart Home", "Garden", "Ocean View", "Mountain View"].map((amenity) => (
                <label key={amenity} className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={amenities.includes(amenity)}
                    onChange={() => toggleAmenity(amenity)}
                  />
                  {amenity}
                </label>
              ))}
            </div>
          </div>
          <select className="w-full p-2 border rounded" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="">Sort By</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </aside>
      <div className="flex-grow p-4 lg:p-8 bg-amber-50/50">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-amber-900 mb-2 sm:mb-0">
            {filteredProperties.length} Properties Found
          </h1>
          <div className="flex space-x-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("grid")}
              className={viewMode === "grid" ? "bg-amber-500 hover:bg-amber-600" : ""}
            >
              <LayoutGrid className="h-4 w-4" />
              <span className="sr-only">Grid view</span>
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("list")}
              className={viewMode === "list" ? "bg-amber-500 hover:bg-amber-600" : ""}
            >
              <List className="h-4 w-4" />
              <span className="sr-only">List view</span>
            </Button>
          </div>
        </div>
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredProperties.map((property) => (
              <PropertyListItem key={property.id} {...property} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}
