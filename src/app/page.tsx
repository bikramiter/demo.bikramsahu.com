import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const industries = [
  {
    name: "House Cleaning",
    image: "/images/cleaning.jpg",
    description:
      "Automate client bookings, quote requests, and post-service follow-ups.",
  },
  {
    name: "Restaurants",
    image: "/images/restaurant.jpg",
    description:
      "Automate menu updates, customer inquiries, and reservation handling.",
  },
  {
    name: "Dental Clinics",
    image: "/images/dentist.jpg",
    description:
      "Automate appointment reminders, FAQs, and new patient onboarding.",
  },
  {
    name: "Real Estate",
    image: "/images/realestate.jpg",
    description:
      "Generate and qualify leads, schedule viewings, and share listings.",
  },
  {
    name: "Fitness Trainers",
    image: "/images/fitness.jpg",
    description:
      "Manage client sessions, track progress, and automate intake forms.",
  },
  {
    name: "Legal Services",
    image: "/images/legal.jpg",
    description:
      "Handle intake, triage inquiries, and automate basic client communication.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">
          Explore Industry-Specific Automation Demos
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="rounded-2xl shadow hover:shadow-lg transition"
            >
              <Image
                src={industry.image}
                alt={industry.name}
                width={600}
                height={400}
                className="rounded-t-2xl object-cover h-48 w-full"
              />
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2">{industry.name}</h2>
                <p className="text-gray-600 text-sm mb-4">
                  {industry.description}
                </p>
                <Button className="w-full" variant="default">
                  View Demo
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
