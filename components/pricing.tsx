import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

const pricingPlans = [
  {
    name: "Basic",
    price: "₹999",
    duration: "per session",
    description: "Perfect for first-time consultations",
    features: [
      "30-minute consultation",
      "Birth chart analysis",
      "Basic predictions",
      "Email support",
      "Recorded session",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "₹2,499",
    duration: "per session",
    description: "Most popular choice for detailed guidance",
    features: [
      "60-minute consultation",
      "Detailed birth chart analysis",
      "Comprehensive predictions",
      "Priority support",
      "Recorded session",
      "Follow-up email",
      "Gemstone recommendations",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "₹4,999",
    duration: "per session",
    description: "Complete spiritual guidance package",
    features: [
      "90-minute consultation",
      "In-depth chart analysis",
      "Life path guidance",
      "24/7 priority support",
      "Recorded session",
      "2 follow-up sessions",
      "Personalized remedies",
      "Gemstone consultation",
      "Yearly predictions",
    ],
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#f5f0e8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Choose the perfect plan for your spiritual journey</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 ${
                plan.popular ? "border-2 border-purple-600 shadow-xl scale-105" : "border border-gray-200 bg-white"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                </div>
                <p className="text-gray-500 text-sm">{plan.duration}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                    : "bg-gray-900 hover:bg-gray-800 text-white"
                }`}
              >
                Book Now
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
