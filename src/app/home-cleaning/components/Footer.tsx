import { Sparkles, Phone, Mail, MapPin, Clock, MessageCircle, Bot } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-emerald-500 p-2 rounded-lg">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Biks Bright Homes</h3>
                <p className="text-emerald-400 text-sm">Cleaning SF</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Professional eco-friendly cleaning services in San Francisco. 
              We make your home sparkle while protecting our planet.
            </p>
            <div className="flex items-center space-x-2 text-emerald-400">
              <Clock className="h-4 w-4" />
              <span className="text-sm">Available 7 days a week</span>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors">Standard Cleaning</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors">Deep Cleaning</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors">Move-In/Move-Out</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors">Post-Construction</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors">Eco-Friendly Cleaning</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors">Recurring Service</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <div>
                  <p className="font-medium">(415) 555-0123</p>
                  <p className="text-sm text-gray-400">Call or text anytime</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <div>
                  <p className="font-medium">hello@biksbrighthomes.com</p>
                  <p className="text-sm text-gray-400">Email support</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400" />
                <div>
                  <p className="font-medium">San Francisco, CA</p>
                  <p className="text-sm text-gray-400">All neighborhoods</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Service Area & Quick Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Service Areas</h4>
            <p className="text-gray-300 mb-4">We proudly serve all of San Francisco including:</p>
            <ul className="text-sm text-gray-400 space-y-1 mb-6">
              <li>• Mission District</li>
              <li>• SOMA & Financial District</li>
              <li>• Pacific Heights & Marina</li>
              <li>• Castro & Noe Valley</li>
              <li>• Richmond & Sunset</li>
              <li>• And more!</li>
            </ul>
            
            <div className="space-y-3">
              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors">
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
        
        {/* Chat Placeholders */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-6 rounded-xl border-2 border-dashed border-gray-700">
              <div className="flex items-center space-x-3 mb-3">
                <MessageCircle className="h-6 w-6 text-emerald-400" />
                <h5 className="font-semibold">[ WhatsApp Chat Placeholder ]</h5>
              </div>
              <p className="text-gray-400 text-sm">
                WhatsApp Business integration will be embedded here for instant customer communication
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl border-2 border-dashed border-gray-700">
              <div className="flex items-center space-x-3 mb-3">
                <Bot className="h-6 w-6 text-emerald-400" />
                <h5 className="font-semibold">[ Website Chatbot Placeholder ]</h5>
              </div>
              <p className="text-gray-400 text-sm">
                RAG-enabled AI chatbot will be integrated here for 24/7 customer support
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Biks Bright Homes Cleaning SF. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Service Agreement</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}