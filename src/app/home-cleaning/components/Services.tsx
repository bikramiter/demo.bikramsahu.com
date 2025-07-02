import { Home, Sparkles, Truck, HardHat, Leaf, Calendar } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: "Standard Cleaning",
    description: "Regular maintenance cleaning for your home including dusting, vacuuming, mopping, and bathroom cleaning.",
    price: "Starting at $120",
    features: ["Kitchen & bathroom cleaning", "Dusting all surfaces", "Vacuum & mop floors", "Trash removal"]
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Comprehensive top-to-bottom cleaning perfect for seasonal cleaning or first-time service.",
    price: "Starting at $200",
    features: ["Inside appliances", "Baseboards & window sills", "Light fixtures", "Cabinet fronts"]
  },
  {
    icon: Truck,
    title: "Move-In/Move-Out Cleaning",
    description: "Thorough cleaning service for tenants and homeowners during relocation.",
    price: "Starting at $250",
    features: ["Empty home cleaning", "Inside all cabinets", "Deep appliance cleaning", "Floor treatment"]
  },
  {
    icon: HardHat,
    title: "Post-Construction Cleaning",
    description: "Specialized cleaning to remove construction dust, debris, and prepare your space.",
    price: "Starting at $300",
    features: ["Dust removal", "Window cleaning", "Floor restoration", "Safety cleanup"]
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Cleaning",
    description: "Premium green cleaning using only certified eco-friendly and non-toxic products.",
    price: "Starting at $140",
    features: ["100% eco products", "Safe for pets & children", "Biodegradable supplies", "Chemical-free"]
  },
  {
    icon: Calendar,
    title: "Recurring Cleaning",
    description: "Regular scheduled cleaning service with discounted rates for weekly, bi-weekly, or monthly visits.",
    price: "Save up to 20%",
    features: ["Flexible scheduling", "Same cleaner", "Loyalty discounts", "Priority booking"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Cleaning Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From regular maintenance to deep cleaning, we offer comprehensive services 
            tailored to keep your home spotless and healthy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="bg-emerald-100 group-hover:bg-emerald-500 p-3 rounded-lg w-fit transition-colors">
                  <IconComponent className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <p className="text-emerald-600 font-bold text-lg">{service.price}</p>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="bg-emerald-100 p-1 rounded-full mr-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gray-100 hover:bg-emerald-500 hover:text-white text-gray-900 py-3 px-4 rounded-lg font-medium transition-all">
                  Book This Service
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}