import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Martinez",
    location: "Mission District",
    rating: 5,
    text: "Biks Bright Homes has been cleaning our home for over a year now. Their eco-friendly approach gives me peace of mind with my two young children, and the quality is consistently outstanding. They're reliable, professional, and truly care about their work.",
    service: "Recurring Bi-Weekly Cleaning"
  },
  {
    name: "David Chen",
    location: "SOMA",
    rating: 5,
    text: "I hired them for a deep cleaning before moving into my new apartment. The team was punctual, thorough, and left the place absolutely spotless. The fact that they use only green products was a huge bonus. Highly recommend!",
    service: "Move-In Deep Cleaning"
  },
  {
    name: "Jennifer Wong",
    location: "Pacific Heights",
    rating: 5,
    text: "After our kitchen renovation, Biks Bright Homes did an amazing post-construction cleanup. They removed all the dust and debris, and made our home feel fresh and clean again. Their attention to detail is impressive.",
    service: "Post-Construction Cleaning"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what San Francisco families 
            are saying about our cleaning services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <Quote className="h-8 w-8 text-emerald-500 mr-3" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-gray-100 pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-emerald-600">{testimonial.service}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 px-6 py-3 rounded-full">
            <Star className="h-5 w-5 text-emerald-600 fill-current" />
            <span className="text-emerald-800 font-semibold">4.9/5 Average Rating</span>
            <span className="text-emerald-600">•</span>
            <span className="text-emerald-800">500+ Happy Customers</span>
          </div>
        </div>
      </div>
    </section>
  );
}