"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Search, User, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/properties?search=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      <div className="container flex flex-wrap h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <motion.div
            className="relative h-8 w-8 md:h-10 md:w-10"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img src="/logo.png" alt="RealEstate Pro Logo" className="h-full w-full object-contain" />
          </motion.div>
          <motion.span
            className="text-xl md:text-2xl font-bold text-primary"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            RealEstate Pro
          </motion.span>
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:cursor-pointer">Buy</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/properties"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">Find Your Dream Home</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Explore our curated selection of properties for sale.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/properties"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">All Properties</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Browse our complete listing of available properties
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/new-developments"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">New Developments</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Discover newly built and upcoming properties
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:cursor-pointer">Rent</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/rentals"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">All Rentals</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Explore all available rental properties
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/apartments"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Apartments</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Find the perfect apartment for rent
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/houses"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Houses</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Discover houses available for rent
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:cursor-pointer">Sell</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/list-property"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">List Your Property</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Put your property on the market with us
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/home-valuation"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Get Home Valuation</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Estimate the value of your property
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/agents" legacyBehavior passHref>
                <NavigationMenuLink className="hover:cursor-pointer">Agents</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/mortgage-calculator" legacyBehavior passHref>
                <NavigationMenuLink className="hover:cursor-pointer">Mortgage Calculator</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex">
            <form onSubmit={handleSearch} className="flex w-full items-center space-x-2">
              <Input
                type="search"
                placeholder="Search..."
                className="flex-1"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit" size="icon" className="hover:cursor-pointer bg-primary text-primary-foreground">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </form>
          </div>
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hover:cursor-pointer">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Favorites</span>
            </Button>
            <Button variant="ghost" size="icon" className="hover:cursor-pointer">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </nav>
        </div>
      </div>
      <div className="md:hidden w-full mt-2 pb-2">
        <div className="flex justify-between px-4">
          <Link href="/properties" className="text-sm font-medium">
            Buy
          </Link>
          <Link href="/rentals" className="text-sm font-medium">
            Rent
          </Link>
          <Link href="/list-property" className="text-sm font-medium">
            Sell
          </Link>
          <Link href="/agents" className="text-sm font-medium">
            Agents
          </Link>
        </div>
      </div>
    </motion.header>
  )
}
