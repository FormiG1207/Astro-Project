import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-gray-200 mb-4">
            <span>⭐</span>
            <span>Pricing Plans</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Get Your Personalized Kundli Report
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Choose the perfect plan for your spiritual journey and unlock the secrets of your destiny
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Basic</CardTitle>
              <CardDescription className="text-gray-300">Essential insights for beginners</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">₹299</span>
                <span className="text-gray-400">/report</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="text-green-400">✓</span>
                  <span>Basic Kundli Chart</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="text-green-400">✓</span>
                  <span>Planetary Positions</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="text-green-400">✓</span>
                  <span>Life Predictions</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent">
                Get Started
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-pink-500/20 to-purple-600/20 border-pink-500/50 backdrop-blur-sm relative scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                Most Popular
              </span>
            </div>
            <CardHeader>
              <CardTitle className="text-white text-2xl">Premium</CardTitle>
              <CardDescription className="text-gray-200">Complete astrological analysis</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">₹499</span>
                <span className="text-gray-300">/report</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-200">
                  <span className="text-green-400">✓</span>
                  <span>Detailed Kundli Analysis</span>
                </li>
                <li className="flex items-center gap-2 text-gray-200">
                  <span className="text-green-400">✓</span>
                  <span>Dasha Predictions</span>
                </li>
                <li className="flex items-center gap-2 text-gray-200">
                  <span className="text-green-400">✓</span>
                  <span>Remedial Solutions</span>
                </li>
                <li className="flex items-center gap-2 text-gray-200">
                  <span className="text-green-400">✓</span>
                  <span>Career & Marriage Report</span>
                </li>
                <li className="flex items-center gap-2 text-gray-200">
                  <span className="text-green-400">✓</span>
                  <span>Free Consultation</span>
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
                Get Premium
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Elite</CardTitle>
              <CardDescription className="text-gray-300">Comprehensive spiritual guidance</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">₹999</span>
                <span className="text-gray-400">/report</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="text-green-400">✓</span>
                  <span>Everything in Premium</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="text-green-400">✓</span>
                  <span>Personal Astrologer</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="text-green-400">✓</span>
                  <span>Yearly Predictions</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="text-green-400">✓</span>
                  <span>Priority Support</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent">
                Get Elite
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
