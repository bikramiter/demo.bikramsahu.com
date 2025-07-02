import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const industries = [
  {
    name: "Home Cleaning",
    image:
      "https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description:
      "Automate client bookings, quote requests, and post-service follow-ups with intelligent scheduling and customer communication.",
    link: "/home-cleaning",
    gradient: "from-emerald-500 to-teal-600",
    stats: "500+ Cleanings/Month",
  },
  {
    name: "Restaurants",
    image:
      "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description:
      "Automate menu updates, customer inquiries, and reservation handling with seamless integration.",
    link: "#",
    gradient: "from-orange-500 to-red-600",
    stats: "Coming Soon",
  },
  {
    name: "Dental Clinics",
    image:
      "https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description:
      "Automate appointment reminders, FAQs, and new patient onboarding with smart scheduling.",
    link: "#",
    gradient: "from-blue-500 to-cyan-600",
    stats: "Coming Soon",
  },
  {
    name: "Real Estate",
    image:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description:
      "Generate and qualify leads, schedule viewings, and share listings with automated workflows.",
    link: "#",
    gradient: "from-purple-500 to-indigo-600",
    stats: "Coming Soon",
  },
  {
    name: "Fitness Trainers",
    image:
      "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description:
      "Manage client sessions, track progress, and automate intake forms with personalized coaching tools.",
    link: "#",
    gradient: "from-red-500 to-pink-600",
    stats: "Coming Soon",
  },
  {
    name: "Legal Services",
    image:
      "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description:
      "Handle intake, triage inquiries, and automate basic client communication with compliance-ready systems.",
    link: "#",
    gradient: "from-slate-600 to-gray-700",
    stats: "Coming Soon",
  },
];

const features = [
  {
    icon: "🤖",
    title: "AI-Powered Automation",
    description: "Smart algorithms that learn and adapt to your business needs",
  },
  {
    icon: "⚡",
    title: "Lightning Fast Setup",
    description: "Get up and running in minutes with our intuitive platform",
  },
  {
    icon: "🔒",
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance standards",
  },
  {
    icon: "📈",
    title: "Analytics & Insights",
    description: "Real-time data to optimize your business operations",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8">
              <span className="mr-2">🚀</span>
              Live Industry Demos Available
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Explore Industry-Specific
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                Automation Demos
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover how AI automation transforms businesses across different
              industries. Each demo showcases real-world solutions tailored to
              specific business challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <a href="#demos">Explore Demos</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-xl transition-all duration-300"
              >
                Watch Overview
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">10K+</div>
                <div className="text-sm text-gray-600 mt-1">
                  Businesses Automated
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">99.9%</div>
                <div className="text-sm text-gray-600 mt-1">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600 mt-1">AI Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600 mt-1">Industries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for modern businesses that demand efficiency, security, and
              scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl mb-4 group-hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Demos Section */}
      <section
        id="demos"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience tailored automation solutions designed for your
              industry's unique challenges and workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    width={600}
                    height={400}
                    className="object-cover h-48 w-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${industry.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                    {industry.stats}
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {industry.name}
                    </h3>
                    {industry.name === "Home Cleaning" && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                        Live Demo
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {industry.description}
                  </p>

                  <Button
                    className={`w-full ${
                      industry.name === "Home Cleaning"
                        ? "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-600"
                    } transition-all duration-300`}
                    asChild={industry.name === "Home Cleaning"}
                    disabled={industry.name !== "Home Cleaning"}
                  >
                    {industry.name === "Home Cleaning" ? (
                      <a
                        href="/home-cleaning"
                        className="flex items-center justify-center"
                      >
                        View Live Demo
                        <span className="ml-2">→</span>
                      </a>
                    ) : (
                      <span>Coming Soon</span>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our AI automation
            platform to streamline operations and delight customers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-xl transition-all duration-300"
            >
              Schedule Demo
            </Button>
          </div>

          <p className="text-blue-200 text-sm mt-6">
            🚀 Setup in 24 hours • 💰 No setup fees • 🔒 Enterprise security
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">
                Business Automation Platform
              </h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Empowering service businesses worldwide with cutting-edge AI
                automation. Transform your operations and delight your
                customers.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-colors"
                >
                  <span className="text-xl">📘</span>
                </a>
                <a
                  href="#"
                  className="bg-pink-600 hover:bg-pink-700 p-3 rounded-lg transition-colors"
                >
                  <span className="text-xl">📸</span>
                </a>
                <a
                  href="#"
                  className="bg-blue-400 hover:bg-blue-500 p-3 rounded-lg transition-colors"
                >
                  <span className="text-xl">🐦</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#demos"
                    className="text-gray-300 hover:text-blue-300 transition-colors"
                  >
                    Industry Demos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-300 transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-300 transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-300 transition-colors"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p>📧 info@businessautomation.com</p>
                <p>📞 (555) 123-4567</p>
                <p>🌍 Serving businesses worldwide</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Business Automation Platform.
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}