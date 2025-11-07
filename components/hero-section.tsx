import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-gray-200">
              <span>🎯 ✨</span>
              <span>Trusted by 50,000+ clients</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-balance">
              <span className="bg-gradient-to-r from-pink-400 via-pink-300 to-purple-400 bg-clip-text text-transparent">
                Discover Your Future With Online Janam Kundli Report!
              </span>
            </h1>

            <p className="text-lg text-gray-300 text-pretty">
              Unveil your life path & resolve struggles – Love, Money, Health & more with Kundali by date & time of
              birth
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-gray-200">
                <span className="text-green-400">👥</span>
                <span className="text-sm">50,000+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2 text-gray-200">
                <span className="text-yellow-400">⭐</span>
                <span className="text-sm">Expert Predictions</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-6 text-lg">
                Get Your Kundli – ₹499/- →
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg bg-transparent"
              >
                Free Consultation
              </Button>
            </div>
          </div>

          <div className="relative">
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-white/10 p-8 backdrop-blur-sm">
              <div className="absolute top-4 right-4">
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Premium
                </span>
              </div>

              <div className="aspect-square bg-gradient-to-br from-slate-700/30 to-slate-800/30 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-600/20 flex items-center justify-center">
                    <span className="text-6xl">🔮</span>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-6">
                Personalized Kundli Report
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
