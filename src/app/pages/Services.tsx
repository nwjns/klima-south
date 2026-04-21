import {
  Paintbrush,
  ArrowDown,
  Hand,
  Zap,
  TruckIcon,
  AirVent,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router";

export function Services() {
  const services = [
    {
      icon: Paintbrush,
      title: "Cleaning Services",
      description: "Professional cleaning for optimal performance.",
    },
    {
      icon: ArrowDown,
      title: "Pull Down",
      description: "For restoring cooling efficiency.",
    },
    {
      icon: TruckIcon,
      title: "AC Relocation",
      description: "Safe unit transfer and removal.",
    },
    {
      icon: Hand,
      title: "Inspection and Repair",
      description: "Scheduled servicing for longevity.",
    },
    {
      icon: Zap,
      title: "Refrigerant Charging",
      description: "For faster and optimal cooling.",
    },
    {
      icon: AirVent,
      title: "ACUs",
      description: "Expert installation for all services.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Comprehensive air conditioning solutions for every need
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Need Our Services?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get in touch with us today. Our team is ready <br/>
            to help you with all your air conditioning needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>

          </div>
        </div>
      </section>
    </div>
  );
}