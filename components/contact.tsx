import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Ready to begin your spiritual journey? Book a consultation today</p>
          </div>

          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                >
                  <option value="">Select a service</option>
                  <option value="vedic">Vedic Astrology</option>
                  <option value="tarot">Tarot Reading</option>
                  <option value="healing">Spiritual Healing</option>
                  <option value="numerology">Numerology</option>
                  <option value="horoscope">Horoscope Matching</option>
                  <option value="gemstone">Gemstone Consultation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                  placeholder="Tell us about your needs..."
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-6 text-lg">
                Submit Consultation Request
              </Button>
            </form>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 p-6 text-center">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="text-gray-900 font-semibold mb-2">Email</h3>
              <p className="text-gray-600 text-sm">contact@moksharth.com</p>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 p-6 text-center">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="text-gray-900 font-semibold mb-2">Phone</h3>
              <p className="text-gray-600 text-sm">+91 98765 43210</p>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 p-6 text-center">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="text-gray-900 font-semibold mb-2">Hours</h3>
              <p className="text-gray-600 text-sm">Mon-Sat: 9AM - 8PM</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
