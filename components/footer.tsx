import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-xl">✨</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Moksharth</h3>
                <p className="text-xs text-gray-400">Spiritual Guidance</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner in spiritual growth and astrological wisdom.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Vedic Astrology</li>
              <li className="text-gray-400 text-sm">Tarot Reading</li>
              <li className="text-gray-400 text-sm">Spiritual Healing</li>
              <li className="text-gray-400 text-sm">Numerology</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 hover:bg-purple-500/30 transition-colors"
              >
                <span className="sr-only">Facebook</span>📘
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 hover:bg-purple-500/30 transition-colors"
              >
                <span className="sr-only">Instagram</span>📷
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 hover:bg-purple-500/30 transition-colors"
              >
                <span className="sr-only">Twitter</span>🐦
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Moksharth. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}
