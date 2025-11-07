import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-24 bg-[#f5f0e8]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Moksharth</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With over 15 years of experience in Vedic astrology and spiritual guidance, Moksharth has helped
                thousands of individuals find clarity, purpose, and peace in their lives.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our approach combines ancient wisdom with modern understanding, providing personalized consultations
                that address your unique life circumstances and spiritual needs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're seeking answers about your career, relationships, health, or spiritual growth, we're here
                to guide you with compassion and expertise.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-purple-100 to-pink-100 border-purple-300 p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To empower individuals with spiritual wisdom and astrological insights that illuminate their path and
                  help them make informed decisions.
                </p>
              </Card>

              <Card className="bg-gradient-to-br from-pink-100 to-purple-100 border-pink-300 p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Approach</h3>
                <p className="text-gray-700 leading-relaxed">
                  We blend traditional Vedic astrology with intuitive guidance, creating a holistic experience that
                  honors both ancient traditions and contemporary needs.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
