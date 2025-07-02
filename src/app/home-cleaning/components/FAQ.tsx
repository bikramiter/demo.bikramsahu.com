import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Do I need to be home during the cleaning?",
    answer: "No, you don't need to be home during the cleaning. Many of our clients provide us with access and go about their day. We're fully insured and bonded, and all our cleaners undergo thorough background checks for your peace of mind."
  },
  {
    question: "Are your cleaners background-checked and insured?",
    answer: "Absolutely! All our cleaning professionals undergo comprehensive background checks and are fully bonded and insured. We prioritize your safety and security, and we're happy to provide proof of insurance upon request."
  },
  {
    question: "What cleaning products do you use?",
    answer: "We use only certified eco-friendly, non-toxic cleaning products that are safe for your family, pets, and the environment. All our products are biodegradable and free from harsh chemicals like ammonia, bleach, and phosphates."
  },
  {
    question: "How much does a cleaning service cost?",
    answer: "Our pricing depends on the size of your home, type of cleaning, and frequency. Standard cleanings start at $120, deep cleanings at $200, and we offer up to 20% discounts for recurring services. Contact us for a free, personalized quote."
  },
  {
    question: "What's included in a standard cleaning?",
    answer: "Our standard cleaning includes dusting all surfaces, vacuuming carpets and rugs, mopping hard floors, cleaning bathrooms (toilets, sinks, showers, mirrors), kitchen cleaning (countertops, stovetop, outside of appliances), and trash removal."
  },
  {
    question: "Can I request specific cleaning tasks?",
    answer: "Yes! We're happy to accommodate special requests and customize our service to your needs. Just let us know your preferences when booking, and we'll make sure to address your specific cleaning priorities."
  },
  {
    question: "What if I'm not satisfied with the cleaning?",
    answer: "We stand behind our work with a 100% satisfaction guarantee. If you're not completely happy with our service, we'll come back within 24 hours to make it right at no additional charge."
  },
  {
    question: "How far in advance do I need to book?",
    answer: "We recommend booking at least 48 hours in advance to ensure availability. However, we do offer same-day service when possible for urgent cleaning needs. Contact us to check availability for your preferred date and time."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers. Here are the most common questions 
            about our cleaning services.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-emerald-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our friendly customer service team is here to help with any questions 
              about our cleaning services or to provide a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Call (415) 555-0123
              </button>
              <button className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-lg font-semibold transition-colors">
                Send a Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}