import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#f5f0e8] via-[#faf7f2] to-[#f5f0e8]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-purple-100 border border-purple-200 rounded-full">
            <span className="text-purple-700 text-sm font-medium">✨ Ancient Wisdom Meets Modern Life</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Discover Your Path to{" "}
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Spiritual Enlightenment
            </span>
          </h1>

          <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
            Expert astrology readings, spiritual guidance, and personalized consultations to help you navigate life's
            journey with clarity and purpose.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-6 text-lg"
            >
              Book Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-600 text-purple-700 hover:bg-purple-50 px-8 py-6 text-lg bg-transparent"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">10K+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
