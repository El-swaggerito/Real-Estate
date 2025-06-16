"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import gsap from "gsap"

export default function SplashScreen() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home")
    }, 3000)

    // Create a GSAP timeline for the splash animation
    const tl = gsap.timeline()

    tl.from(".logo-container", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "elastic.out(1, 0.75)",
    })
      .from(
        ".title",
        {
          opacity: 0,
          y: 20,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.5",
      )
      .from(
        ".subtitle",
        {
          opacity: 0,
          y: 20,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.5",
      )
      .from(
        ".loader",
        {
          opacity: 0,
          scale: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=0.3",
      )

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-amber-50">
      <div className="text-center">
        <div className="logo-container">
          <Image src="/logo.png" alt="RealEstate Pro Logo" width={200} height={200} className="mb-8" />
        </div>
        <h1 className="text-4xl font-bold text-amber-900 mb-4 title">RealEstate Pro</h1>
        <p className="text-amber-700 text-xl mb-8 subtitle">Find your dream property</p>
        <motion.div
          className="loader w-16 h-16 border-t-4 border-amber-500 border-solid rounded-full mx-auto"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            borderWidth: ["4px", "2px", "4px"],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
          }}
        ></motion.div>
      </div>
    </div>
  )
}
