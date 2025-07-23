import Image from "next/image"
import Link from "next/link"
import { Globe } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d111a]">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-white text-sm font-light">TETIANA JAPONCHIK'S</div>
          <div className="flex items-center space-x-6">
            <Link href="#" className="text-white text-xs uppercase hover:text-[#ff3a8c]">
              Services
            </Link>
            <Link href="#" className="text-white text-xs uppercase hover:text-[#ff3a8c]">
              Technology
            </Link>
            <Link href="#" className="text-white text-xs uppercase hover:text-[#ff3a8c]">
              Portfolio
            </Link>
            <Link href="#" className="text-white text-xs uppercase hover:text-[#ff3a8c]">
              Contact
            </Link>
            <div className="flex items-center ml-4">
              <Globe className="h-4 w-4 text-white" />
              <span className="text-white text-xs ml-1">EN</span>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-[#ff3a8c] text-5xl md:text-6xl font-bold tracking-tight">
            FRONTEND
            <br />
            DEVELOPER
          </h1>
          <p className="text-white text-sm max-w-md">
            I am Tetiana - <span className="text-[#ff3a8c]">web developer</span> with a passion for creating beautiful
            and responsive websites.
          </p>
          <button className="bg-transparent hover:bg-[#ff3a8c] text-[#ff3a8c] hover:text-white border border-[#ff3a8c] text-xs px-6 py-2 rounded-full transition duration-300">
            VIEW MY WORK
          </button>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
          
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-[#ff3a8c] text-2xl font-medium mb-10">MY SERVICES</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#131b2e] rounded-lg p-6 border border-[#1e2a45]">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-[#ff3a8c] flex items-center justify-center mr-3">
                <span className="text-white text-xs">01</span>
              </div>
              <h3 className="text-white text-lg">Website Development</h3>
            </div>
            <p className="text-gray-400 text-sm">Creating responsive and modern websites tailored to your needs.</p>
          </div>
          {/* Additional service cards would go here */}
        </div>
      </section>
    </div>
  )
}
