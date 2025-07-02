import { Calendar, Phone, MessageCircle } from 'lucide-react';

export default function BookingSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-500 to-emerald-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for a Sparkling Clean Home?
          </h2>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Get your free quote in under 60 seconds or book your cleaning service instantly online.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center hover:bg-white/20 transition-all">
            <div className="bg-white p-4 rounded-full w-fit mx-auto mb-6">
              <Calendar className="h-8 w-8 text-emerald-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Book Online</h3>
            <p className="text-emerald-100 mb-6">Schedule your cleaning service 24/7 through our easy online booking system.</p>
            <button className="bg-white text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-lg font-semibold transition-colors">
              Book Now
            </button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center hover:bg-white/20 transition-all">
            <div className="bg-white p-4 rounded-full w-fit mx-auto mb-6">
              <Phone className="h-8 w-8 text-emerald-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Call for Quote</h3>
            <p className="text-emerald-100 mb-6">Speak with our friendly team to get a personalized quote for your home.</p>
            <button className="bg-white text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-lg font-semibold transition-colors">
              (415) 555-0123
            </button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center hover:bg-white/20 transition-all">
            <div className="bg-white p-4 rounded-full w-fit mx-auto mb-6">
              <MessageCircle className="h-8 w-8 text-emerald-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Text Us</h3>
            <p className="text-emerald-100 mb-6">Quick questions? Send us a text message for instant support and quotes.</p>
            <button className="bg-white text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-lg font-semibold transition-colors">
              Text Now
            </button>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            [ Online Booking Widget Placeholder ]
          </h3>
          <p className="text-emerald-100 mb-6">
            This section will be replaced with your preferred booking system integration
            (Calendly, Acuity Scheduling, custom booking form, etc.)
          </p>
          <div className="bg-white/20 rounded-lg p-12 border-2 border-dashed border-white/40">
            <p className="text-white text-lg">Booking Widget Integration Area</p>
            <p className="text-emerald-100 text-sm mt-2">Dimensions: Full-width, responsive</p>
          </div>
        </div>
      </div>
    </section>
  );
}