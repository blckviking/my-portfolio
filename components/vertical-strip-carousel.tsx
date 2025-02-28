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
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedArtwork, setSelectedArtwork] = useState<(typeof artworks)[0] | null>(null)

  const contactRef = useRef<HTMLDivElement>(null)

  

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between p-4 relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/Background Saturn.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
    >
      

      <div className="absolute top-4 left-4 z-10">
        <h1 className="Cinzel text-xl font-medium text-black">Vikas Vasudevan</h1>
        <hr
          className="mt-3 border-t border-white w-screen"
          style={{ borderTopWidth: "0.1px" }}
        />
      </div>
      <nav className="absolute top-4 right-10 z-10 Cinzel" >
        <ul className="flex justify-center space-x-5">
          <li>
            <a href="#" className="text-white font-light text-[20px]">
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white font-light text-[20px]"
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

      <div className="relative w-full max-w-2xl mx-auto z-10 Cinzel mt-[50px]">
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-full"
          onSelect={(index) => setActiveIndex(Number(index))}
        >
          <CarouselContent className="flex items-center justify-center">
            {artworks.map((artwork, index) => (
              <CarouselItem
                key={artwork.id}
                className={cn(
                  "basis-[80px] transition-all ease-in-out duration-500 pl-0",
                  hoveredIndex === index && "basis-[400px] z-50"
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedArtwork(artwork)}
              >
                <div
                  className={cn(
                    "h-[500px] relative overflow-hidden rounded-sm transition-all ease-in-out duration-500 transform cursor-pointer",
                    activeIndex === index ? "opacity-100 scale-90" : "opacity-100 scale-90"
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
                    <div className="absolute bottom-0 left-0 right-0 bg-grat p-4">
                      <p className="text-black text-sm font-light">{artwork.title}</p>
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="relative z-10 mt-16 max-w-4xl mx-auto Cinzel">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="space-y-2 text-left pl-[-50px]">
            <h2 className="text-6xl font-light tracking-wider">ENGINEER</h2>
            <h2 className="text-2xl font-light tracking-wider">&</h2>
            <h2 className="text-6xl font-light tracking-wider">PROJECT MANAGER</h2>
          </div>
          <div className="mt-4 md:mt-0 text-lg font-light leading-relaxed text-right max-w-md pr-[30px]">
            <p>
              Product Manager with 3 years of experience leading cross-functional teams 
              to deliver innovative customer-centric products
            </p>
          </div>
        </div>
      </div>

      <div
        ref={contactRef}
        className="w-full max-w-sm mx-auto mt-16 p-4 rounded relative z-10 Cinzel"
      >
        <h2 className="text-2xl font-light mb-4 text-center text-white">
          Let's Get In Touch
        </h2>
        <form className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Name"
              className="w-full p-2 border border-gray-200 rounded focus:outline-none"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-200 rounded"
            />
          </div>
          <div>
            <Textarea
              placeholder="Message"
              className="w-full p-2 border border-gray-200 rounded h-24"
            />
          </div>
          <Button type="submit" className="w-full p-2 border border-gray-200 rounded">
            Send
          </Button>
        </form>
      </div>
      {selectedArtwork && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-8"
          onClick={() => setSelectedArtwork(null)}
        >
          <div
            className="w-full max-w-7xl flex flex-col md:flex-row gap-8 text-white transition-transform duration-300"
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

