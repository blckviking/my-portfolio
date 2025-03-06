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
    <li>The app creates a personalized narrative for each journey. Features are designed to offer trip analytics tailored to modern drivers, enhancing their awareness and safety.</li>
    <li>Users receive a daily recap of their driving habits, encouraging self-improvement. The app focuses on highlighting key areas for improvement and providing actionable suggestions, helping users track their progress over time.</li>
    <li>The app provides real-time damage graphs and predictive analysis to help users stay ahead of vehicle maintenance needs. It converts lagging data into actionable insights, alerting users to potential issues before they become critical.</li>
    <li>The home screen is designed to condense vast amounts of data into key insights and scores. It displays important information such as driving scores, trip details, leaderboard status and weather alerts, ensuring users are informed without being overwhelmed.</li>
    My Role for the Project - Lead Product manager
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
    <li>The application aims to simplify workflow management by providing a robust yet user-friendly platform. By offering advanced template creation tools and AI-driven assistance, users can efficiently manage their tasks and maintain high productivity levels. The app is designed to handle complexity behind the scenes, allowing users to focus on what truly matters.</li>
    <li>Multi-Step Template Creation simplifies the process of creating complex templates through a step-by-step interface. The form building Capabilities allow our clients to add various elements like forms, managers, navigation menus and workflows to their templates. Clients can add questions, manage evidence and set compliance options to ensure adherence to standards.</li>
    <li>I have designed the app to act as a central hub for every task, module and actionable item, ensuring users stay on top of their workflow. The idea is to convert chaotic workflows into clear, manageable tasks.</li>
    <li>For users who find the process too complex, the app offers a Copilot feature. Users can upload their documents, ask questions and let the AI handle the intricate details, providing a seamless experience.</li>
    My Role for the Project - Lead Product manager
`,
    category: "PRODUCTIVITY, AUTOMATION",
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
    <li>The app creates a personalized narrative for each journey. Features are designed to offer trip analytics tailored to modern drivers, enhancing their awareness and safety.</li>
    <li>Users receive a daily recap of their driving habits, encouraging self-improvement. The app focuses on highlighting key areas for improvement and providing actionable suggestions, helping users track their progress over time.</li>
    <li>The app provides real-time damage graphs and predictive analysis to help users stay ahead of vehicle maintenance needs. It converts lagging data into actionable insights, alerting users to potential issues before they become critical.</li>
    <li>The home screen is designed to condense vast amounts of data into key insights and scores. It displays important information such as driving scores, trip details, leaderboard status and weather alerts, ensuring users are informed without being overwhelmed.</li>
    My Role for the Project - Lead Product manager
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
    <li>The app creates a personalized narrative for each journey. Features are designed to offer trip analytics tailored to modern drivers, enhancing their awareness and safety.</li>
    <li>Users receive a daily recap of their driving habits, encouraging self-improvement. The app focuses on highlighting key areas for improvement and providing actionable suggestions, helping users track their progress over time.</li>
    <li>The app provides real-time damage graphs and predictive analysis to help users stay ahead of vehicle maintenance needs. It converts lagging data into actionable insights, alerting users to potential issues before they become critical.</li>
    <li>The home screen is designed to condense vast amounts of data into key insights and scores. It displays important information such as driving scores, trip details, leaderboard status and weather alerts, ensuring users are informed without being overwhelmed.</li>
    My Role for the Project - Lead Product manager
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
                      <p className="Cinzel text-white text-sm font-light">{artwork.title}</p>
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
          <div className="mt-4 md:mt-0 text-lg font-light leading-relaxed text-right max-w-md pr-[0px]">
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

