"use client"

import { useState, useEffect, useRef } from "react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { globalStyles } from "@/styles/globals"
import { ArrowLeft } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { set } from "date-fns"

globalStyles()

const artworks = [
  {
    id: 1,
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thumbnail4.jpg-f5kWtP0sEDJx5IxtXXUvFhZAYBI7pp.jpeg",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Main%201.jpg-G3NPoA7OQfq2X7ogdpG0NmrRh5ScM2.jpeg",
    title: "Road Safety",
    description: `
    
    <h3 class="text-xl font-semibold mb-2">Illustration of the functional design of Safety Connect driver safety application. The app is designed to enhance vehicle safety and maintenance through innovative data-driven features.</h3>
    <ul class="list-disc list-inside">
    <li>User Engagement - 30% increase in daily active users within the first six months</li>
    <liSafety Improvement - 85% reduction in accident rates among their fleets</li>
    <li>Feature Adoption - 80% of users actively engage with the app</li>
    <li>User Engagement - 30% increase in daily active users within the first six months</li>
    <li>Net Promoter Score (NPS) of 85 from corporate users</li>
    <li>My Role for the Project - Lead Product manager</li>
    <li>Teams Involved - Tech, Design, QA and Customer Success</li>
    <li>Project Timeline - 4 years</li>
    
`,
    category: "PUBLIC SAFETY, TRANSPORTATION",
    pdf: "PRD1.pdf"
  },
  {
    id: 2,
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thumbnail3.jpg-QFAgiJhvN74aCjU9MHMHouZTNDdMpm.jpeg",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Main%202.jpg-tu09BbbarZYVsOHNPwS5WExvCuUI4k.jpeg",
    title: "Process Connect",
    description: `
    
    <h3 class="text-xl font-semibold mb-2">Illustration of the functional design of the Process Safety application. The app is designed to streamline workflow management and enhance productivity through a user-friendly interface and powerful template creation tools.</h3>
    <ul class="list-disc list-inside">
    <li>User Engagement - 25% increase in overall productivity</li>
    <liSafety Improvement - user satisfaction score of 90%, with users</li>
    <li>Feature Adoption - 30% reduction in workflow errors</li>
    <li>User Engagement - 60% of tasks completed has been assisted by the app's AI capabilities</li>
    <li>My Role for the Project - Lead Product manager</li>
    <li>Teams Involved - Tech, Design, QA and Customer Success</li>
    <li>Project Timeline - 1 year</li>
`,
    category: "PRODUCTIVITY, INDUSTRIAL SAFETY",
    pdf: "PRD2.pdf"
  },
  {
    id: 3,
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thumbnail1.jpg-etaAMUhQTtZ9dfFFLqeYhjZpWwmOMW.jpeg",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Main%203.jpg-Wytvt2wed3E5dD39WKFM5VBvR3p6Ns.jpeg",
    title: "Nuclear Propulsion",
    description: `
    
    <h3 class="text-xl font-semibold mb-2">Illustration of the functional design of Safety Connect driver safety application. The app is designed to enhance vehicle safety and maintenance through innovative data-driven features.</h3>
    <ul class="list-disc list-inside">
    <li>Thermal efficiency of 45%, surpassing traditional turbofan designs by 15%</li>
    <li>20 dB reduction in noise levels compared to conventional turbofans</li>
    <li>The turbo fan generated 30% more power per unit of thorium compared to existing nuclear propulsion systems</li>
    <li>I was Awarded National Prize under NDRF India for my work on Nuclear Propulsion</li>
    <li>Please note that all the above values are theoretical estimates, as I couldn't build a nuclear engine to prove them. Don't ask me why.</li>
    <li>Project Timeline - 1 year</li>
`,
    category: "AEROSPACE, ENERGY",
    pdf: "PRD3.pdf"
  },
  {
    id: 4,
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thumbnail2a-01.jpg-zuCI50PMpa3x7WEKVJQwnBm9yLO36e.jpeg",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Main%204-01.jpg-7ylsnA0gDuFfDQlfgi1iZrFN5D7wIu.jpeg",
    title: "CFD Analysis",
    description: `
    
    <h3 class="text-xl font-semibold mb-2">Illustration of the functional design of Safety Connect driver safety application. The app is designed to enhance vehicle safety and maintenance through innovative data-driven features.</h3>
    <ul class="list-disc list-inside">
    <li>The CFD simulations achieved a 95% accuracy rate when compared to empirical data</li>
    <li>The study demonstrated a 15% reduction in noise levels through the strategic use of unequally spaced blades</li>
    <li>The research was published under Cranfield University as part of my Masters Thesis</li>
    <li>I was awarded Propulsion Centre Scholarship from Cranfield as part of my previous work</li>
    <li>Project Timeline - 1 year</li>
`,
    category: "ENGINEERING, ACOUSTICS",
    pdf: "PRD4.pdf"
  },
]

export default function VerticalStripCarousel() {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedArtwork, setSelectedArtwork] = useState<(typeof artworks)[0] | null>(null)
  const [sendingMessage, setSendingMessage] = useState<boolean>(false)
  const contactRef = useRef<HTMLDivElement>(null)
  // In your form component (e.g. inside VerticalStripCarousel component)
  const handleSubmit = async (e: React.FormEvent) => {
    setSendingMessage(true)
    e.preventDefault()

    const formData = new FormData(e.currentTarget as HTMLFormElement)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      const result = await res.json()
      if (result.success) {
        setSendingMessage(false)
        alert("Message sent successfully!")
      }
      else{
        setSendingMessage(false)
        alert("Failed to send message.")
      }
    } catch (error) {
      setSendingMessage(false)
      console.error(error)
      alert("Failed to send message.")
    }
  }

  const aboutRef = useRef<HTMLDivElement>(null)
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div
      className="min-h-screen overflow-x-hidden flex flex-col items-center justify-between p-4 relative bg-cover"
      style={{
        backgroundImage: "url('/Background Saturn.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
      }}
    >


      <div className="absolute top-4 left-4 z-10 flex flex-col">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-auto" style={{ height: "20px", width: "20px" }} />
          <h1 className="Cinzel text-xl font-medium text-black">Vikas Vasudevan</h1>
        </div>
        <hr
          className="mt-3 border-t border-white w-screen"
          style={{ borderTopWidth: "0.1px" }}
        />
      </div>
      <nav className="absolute top-4 right-10 z-10 Cinzel" >
        <ul className="flex justify-center space-x-5">
          <li>
            <a href="#" className="text-white font-light text-[20px]"
              onClick={(e) => {
                e.preventDefault()
                aboutRef.current?.scrollIntoView({ behavior: "smooth" })
              }}
              >
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
                    "h-[500px] relative overflow-hidden transition-all ease-in-out duration-200 transform cursor-pointer",
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
                      <p className="Cinzel text-white text-sm font-light">{artwork.title}</p>
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      
      <div ref={aboutRef} className="relative z-10 mt-4 max-w-4xl mx-auto Cinzel">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="space-y-2 text-left pl-[-50px]">
            <h2 className="text-6xl font-light tracking-wider">ENGINEER</h2>
            <h2 className="text-2xl font-light tracking-wider">&</h2>
            <h2 className="text-6xl font-light tracking-wider">PROJECT MANAGER</h2>
          </div>
          <div className="mt-8 md:mt-0 text-lg font-light leading-relaxed text-right max-w-md pr-[0px] transform translate-y-4">
            <p>
              I am a Product Manager/Engineer based in India. I have many years of experience in consulting across all domains. My work is driven by a passion for creating intuitive and impactful user experiences.
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
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Input
              name="name"
              type="text"
              placeholder="Name"
              className="w-full p-2 border-b border-gray-200 focus:outline-none bg-transparent"
            />
          </div>
          <div>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full p-2 border-b border-gray-200 focus:outline-none bg-transparent"
            />
          </div>
          <div>
            <Textarea
              name="message"
              placeholder="Message"
              className="w-full p-2 border-b border-gray-200 focus:outline-none bg-transparent h-24"
            />
          </div>
          <Button type="submit" className="w-full p-2 mt-4">
          <span className={sendingMessage ? 'fas fa-spinner fa-pulse' : ''}>{!sendingMessage ? "Send" : ""}</span>
          </Button>
        </form>
      </div>
      {selectedArtwork && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-8 h-screen"
          onClick={() => setSelectedArtwork(null)}
        >
          <div
            className="w-full max-w-6xl flex flex-col md:flex-row gap-8 text-white transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="md:w-1/2 space-y-6 pl-4 pb-4">
              <button
                onClick={() => setSelectedArtwork(null)}
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-6 h-6 ml-[-10rem]" />
                <span className="font-light ml-[2 rem]">Back</span>
              </button>

              <h2 className="Cinzel text-base font-light ml-[-10rem]">{selectedArtwork.title}</h2>
              <div
                className="Cinzel text-sm font-light  leading-relaxed ml-[-10rem]"
                dangerouslySetInnerHTML={{ __html: selectedArtwork.description }}
              />

              <div className="flex items-center justify-between pt-8 mt-auto">
                <span className="Cinzel text-sm font-light ml-[-10rem]">{selectedArtwork.category}</span>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (selectedArtwork?.pdf) {
                      window.open(selectedArtwork.pdf, "_blank");
                    }
                  }}
                  className="Cinzel text-sm font-light flex items-center gap-2 hover:opacity-70 transition-opacity"
                >
                  For Nerds
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </a>
              </div>
            </div>

            <div className="md:w-3/4 ml-auto">
              <img
                src={selectedArtwork.image || "/placeholder.svg"}
                alt={selectedArtwork.title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

