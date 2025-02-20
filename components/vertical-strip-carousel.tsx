"use client"

import { useState, useEffect, useRef } from "react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { globalStyles } from "@/styles/globals"
import { ArrowLeft } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

globalStyles()

const artworks = [
  {
    id: 1,
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thumbnail4.jpg-f5kWtP0sEDJx5IxtXXUvFhZAYBI7pp.jpeg",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Main%201.jpg-G3NPoA7OQfq2X7ogdpG0NmrRh5ScM2.jpeg",
    title: "Road Safety",
    description: "A COMPREHENSIVE OVERVIEW OF ROAD SAFETY MEASURES AND EMERGENCY RESPONSE PROTOCOLS",
    category: "PUBLIC SAFETY, TRANSPORTATION",
  },
  {
    id: 2,
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thumbnail3.jpg-QFAgiJhvN74aCjU9MHMHouZTNDdMpm.jpeg",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Main%202.jpg-tu09BbbarZYVsOHNPwS5WExvCuUI4k.jpeg",
    title: "Process Connect",
    description: "STREAMLINED TEMPLATE CREATION SYSTEM WITH INTEGRATED WORKFLOW MANAGEMENT AND COPILOT ASSISTANCE",
    category: "PRODUCTIVITY, AUTOMATION",
  },
  {
    id: 3,
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thumbnail1.jpg-etaAMUhQTtZ9dfFFLqeYhjZpWwmOMW.jpeg",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Main%203.jpg-Wytvt2wed3E5dD39WKFM5VBvR3p6Ns.jpeg",
    title: "Nuclear Propulsion",
    description: "INNOVATIVE THORIUM-BASED NUCLEAR TURBO FAN DESIGN FOR NEXT-GENERATION AVIATION SYSTEMS",
    category: "AEROSPACE, ENERGY",
  },
  {
    id: 4,
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thumbnail2a-01.jpg-zuCI50PMpa3x7WEKVJQwnBm9yLO36e.jpeg",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Main%204-01.jpg-7ylsnA0gDuFfDQlfgi1iZrFN5D7wIu.jpeg",
    title: "CFD Analysis",
    description: "COMPUTATIONAL FLUID DYNAMICS STUDY OF UNEQUALLY-SPACED AXIAL FLOW FANS FOR NOISE REDUCTION",
    category: "ENGINEERING, ACOUSTICS",
  },
]

export default function VerticalStripCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedArtwork, setSelectedArtwork] = useState<(typeof artworks)[0] | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (selectedArtwork) {
      setIsAnimating(true)
      const timer = setTimeout(() => setIsAnimating(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [selectedArtwork])

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between p-4 relative font-migra bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vangoghmuseum-d0105V1962-800.jpg-STGA2RJnOU08j7BcLGEEflRnb0INcq.jpeg')",
        backgroundColor: "#ccab7e",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="absolute inset-0 bg-[#ccab7e]/30 backdrop-blur-[2px]" />

      <div className="absolute top-4 left-4 z-10">
        <h1 className="text-black text-xl font-medium">Vikas Vasudevan</h1>
      </div>
      <nav className="w-full max-w-md mx-auto px-4 py-2 mb-8 relative z-10">
        <ul className="flex justify-center space-x-8">
          <li>
            <a href="#" className="text-black hover:text-gray-700 transition-colors font-medium">
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black hover:text-gray-700 transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault()
                scrollToContact()
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="relative w-full max-w-2xl mx-auto z-10">
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-full"
          onSelect={(index) => setActiveIndex(index)}
        >
          <CarouselContent className="flex items-center justify-center">
            {artworks.map((artwork, index) => (
              <CarouselItem
                key={artwork.id}
                className={cn(
                  "basis-[80px] transition-all duration-300 pl-0",
                  hoveredIndex === index && "basis-[400px] z-50",
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedArtwork(artwork)}
              >
                <div
                  className={cn(
                    "h-[500px] relative overflow-hidden rounded-sm transition-all duration-300 transform cursor-pointer",
                    activeIndex === index ? "opacity-100 scale-110" : "opacity-70 scale-90",
                    hoveredIndex === index && "scale-125 opacity-100 shadow-2xl",
                  )}
                >
                  <div className="h-full w-full flex items-center justify-center overflow-hidden">
                    <img
                      src={artwork.thumbnail || "/placeholder.svg"}
                      alt={artwork.title}
                      className={cn(
                        "h-full w-auto max-w-none transition-all duration-300 transform",
                        index === 0 && "translate-x-[10%]",
                        hoveredIndex === index && "scale-110",
                      )}
                    />
                  </div>
                  {hoveredIndex === index && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white text-sm font-light">{artwork.title}</p>
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="relative z-10 mt-16 text-black text-center max-w-4xl mx-auto">
        <div className="space-y-2 mb-8">
          <h2 className="text-6xl font-light tracking-wider">ENGINEER</h2>
          <h2 className="text-6xl font-light tracking-wider">&</h2>
          <h2 className="text-6xl font-light tracking-wider">PROJECT MANAGER</h2>
        </div>

        <p className="text-lg font-light mb-8 max-w-3xl mx-auto leading-relaxed">
          PRODUCT MANAGER WITH 3 YEARS OF EXPERIENCE LEADING CROSS-FUNCTIONAL TEAMS TO DELIVER, INNOVATIVE
          CUSTOMER-CENTRIC PRODUCTS
        </p>
      </div>

      <div
        ref={contactRef}
        className="w-full max-w-md mx-auto mt-16 p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg relative z-10"
      >
        <h2 className="text-3xl font-light mb-6 text-center">Contact Me</h2>
        <form className="space-y-4">
          <div>
            <Input type="text" placeholder="Name" className="w-full" />
          </div>
          <div>
            <Input type="email" placeholder="Email" className="w-full" />
          </div>
          <div>
            <Textarea placeholder="Message" className="w-full h-32" />
          </div>
          <Button type="submit" className="w-full">
            Send
          </Button>
        </form>
      </div>

      {selectedArtwork && (
        <div
          className={cn(
            "fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-8 transition-opacity duration-2000",
            isAnimating ? "opacity-0" : "opacity-100",
          )}
          onClick={() => setSelectedArtwork(null)}
        >
          <div
            className={cn(
              "w-full max-w-7xl flex flex-col md:flex-row gap-8 text-white transition-transform duration-2000",
              isAnimating ? "translate-x-full" : "translate-x-0",
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="md:w-1/2 space-y-6">
              <button
                onClick={() => setSelectedArtwork(null)}
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
                <span className="font-light">Back</span>
              </button>

              <h2 className="text-6xl font-light tracking-wider">{selectedArtwork.title}</h2>
              <p className="text-lg font-light leading-relaxed">{selectedArtwork.description}</p>

              <div className="flex items-center justify-between pt-8 mt-auto">
                <span className="text-sm font-light opacity-70">{selectedArtwork.category}</span>
                <a href="#" className="text-sm font-light flex items-center gap-2 hover:opacity-70 transition-opacity">
                  see case
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </a>
              </div>
            </div>

            <div className="md:w-1/2">
              <img
                src={selectedArtwork.image || "/placeholder.svg"}
                alt={selectedArtwork.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

