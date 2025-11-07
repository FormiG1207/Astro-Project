import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: "💕",
    title: "Love & Relationship",
    description: "Find your perfect match and resolve relationship issues",
    features: ["Marriage compatibility analysis", "Love problem solutions", "Relationship guidance"],
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: "💼",
    title: "Career & Business",
    description: "Unlock your professional potential and success",
    features: ["Career path guidance", "Business growth solutions", "Job change predictions"],
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: "💚",
    title: "Health & Wellness",
    description: "Maintain good health through astrological remedies",
    features: ["Health predictions", "Remedial solutions", "Wellness guidance"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: "💰",
    title: "Financial Growth",
    description: "Achieve financial stability and prosperity",
    features: ["Money problem solutions", "Investment guidance", "Wealth predictions"],
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: "🎓",
    title: "Education & Studies",
    description: "Excel in academics and competitive exams",
    features: ["Study guidance", "Exam success remedies", "Career selection"],
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: "✨",
    title: "Spiritual Growth",
    description: "Connect with your inner self and divine energy",
    features: ["Spiritual guidance", "Meditation techniques", "Moksha path"],
    color: "from-fuchsia-500 to-pink-500",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-gray-200 mb-4">
            <span>✨</span>
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Make Your Dreams Come True
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Discover Solutions through Expert Online Janam Kundli Analysis Report! Get insights into your past, present,
            and future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl mb-4`}
                >
                  {service.icon}
                </div>
                <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-300">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                      <span className="text-green-400">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
