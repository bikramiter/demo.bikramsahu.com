import { Sparkles, Shield, Clock, Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-emerald-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Sparkling Clean Homes,
              <span className="text-emerald-500"> Eco-Friendly</span> Service
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Professional house cleaning services in San Francisco using only eco-friendly products. 
              Your home deserves the best care, and our planet does too.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
                Book a Cleaning
              </button>
              <button className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Get Free Quote
              </button>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-emerald-100 p-3 rounded-lg inline-block">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                <p className="mt-2 text-sm font-medium text-gray-900">Insured & Bonded</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 p-3 rounded-lg inline-block">
                  <Leaf className="h-6 w-6 text-emerald-600" />
                </div>
                <p className="mt-2 text-sm font-medium text-gray-900">Eco-Friendly</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 p-3 rounded-lg inline-block">
                  <Clock className="h-6 w-6 text-emerald-600" />
                </div>
                <p className="mt-2 text-sm font-medium text-gray-900">Same Day Service</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 p-3 rounded-lg inline-block">
                  <Sparkles className="h-6 w-6 text-emerald-600" />
                </div>
                <p className="mt-2 text-sm font-medium text-gray-900">Satisfaction Guaranteed</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4239144/pexels-photo-4239144.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Professional cleaner in eco-friendly uniform cleaning a modern home"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-500 p-2 rounded-lg">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">500+ Happy Homes</p>
                    <p className="text-sm text-gray-600">Cleaned This Month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}