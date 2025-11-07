import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
            <span className="text-white text-xl">✨</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Moksharth</h1>
            <p className="text-xs text-gray-600">Astrology & Spiritual Guidance</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">
            Services
          </Link>
          <Link href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">
            About
          </Link>
          <Link href="#pricing" className="text-gray-700 hover:text-purple-600 transition-colors">
            Pricing
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">
            Contact
          </Link>
        </nav>

        <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
          Get Consultation
        </Button>
      </div>
    </header>
  )
}
