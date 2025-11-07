import { Card } from "@/components/ui/card"

const services = [
  {
    icon: "🌟",
    title: "Vedic Astrology",
    description: "Comprehensive birth chart analysis and planetary insights based on ancient Vedic wisdom.",
  },
  {
    icon: "🔮",
    title: "Tarot Reading",
    description: "Intuitive tarot card readings to gain clarity on your past, present, and future.",
  },
  {
    icon: "🧘",
    title: "Spiritual Healing",
    description: "Energy healing sessions to restore balance and harmony in your life.",
  },
  {
    icon: "💫",
    title: "Numerology",
    description: "Discover the hidden meanings in numbers and their influence on your destiny.",
  },
  {
    icon: "🌙",
    title: "Horoscope Matching",
    description: "Compatibility analysis for relationships and marriage based on astrological charts.",
  },
  {
    icon: "✨",
    title: "Gemstone Consultation",
    description: "Personalized gemstone recommendations to enhance positive planetary influences.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services and Options</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our range of spiritual and astrological services designed to guide you on your journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 p-6 hover:border-purple-400 transition-all hover:transform hover:scale-105 hover:shadow-lg"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-700 leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
