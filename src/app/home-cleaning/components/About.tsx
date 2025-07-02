import { Shield, Users, Award, Clock, Leaf, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Fully Insured & Bonded",
    description: "Complete protection and peace of mind with comprehensive insurance coverage."
  },
  {
    icon: Users,
    title: "Background-Checked Cleaners",
    description: "All our team members undergo thorough background checks and professional training."
  },
  {
    icon: Award,
    title: "Satisfaction Guarantee",
    description: "Not happy with our service? We'll come back and make it right, free of charge."
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description: "We use only certified green cleaning products that are safe for your family and pets."
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book online 24/7 with same-day service available for urgent cleaning needs."
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Every cleaning is inspected to ensure it meets our high standards before we leave."
  }
];

export default function About() {
  return (
    <section className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Biks Bright Homes?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing exceptional cleaning services that prioritize 
            your family's health, your home's cleanliness, and our planet's wellbeing.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-emerald-100 p-3 rounded-lg w-fit mb-6">
                  <IconComponent className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Trusted by San Francisco Families Since 2018
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We started Biks Bright Homes with a simple mission: to provide reliable, 
                eco-friendly cleaning services that busy families can trust. Today, we're 
                proud to serve hundreds of homes across San Francisco with the same 
                commitment to quality and sustainability.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">500+</div>
                  <div className="text-sm text-gray-600 mt-1">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">5★</div>
                  <div className="text-sm text-gray-600 mt-1">Average Rating</div>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <img 
                src="https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Professional cleaning team with eco-friendly supplies"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}