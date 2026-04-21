import { MapPin, CheckCircle } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router";

export function ServiceAreas() {
  const areas = [
    {
      region: "Metro Manila",
      cities: [
        "Taguig",
        "Makati",
        "Parañaque",
        "Pasay",
        "Las Piñas",
        "Manila",
        "Mandaluyong",
        "Pasig",
      ],
    },
    {
      region: "Cavite",
      cities: [
        "Bacoor",
        "Imus",
        "Dasmariñas",
        "Kawit",
        "General Trias",
        "Rosario",
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <MapPin className="w-10 h-10 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">Service Areas</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-2xl">
            Bringing reliable air conditioning services to your neighborhood
          </p>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Where We Serve</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              KlimaSouth proudly serves multiple areas across Metro Manila and Cavite, providing top-quality air conditioning services to homes and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {areas.map((area, index) => (
              <Card key={index} className="border-t-4 border-t-blue-600">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{area.region}</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {area.cities.map((city, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{city}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Don't see your area listed?
              </h3>
              <p className="text-gray-600 mb-6">
                We also serve nearby locations! Contact us to confirm service availability in your area.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Coverage Area
            </h2>
            <p className="text-lg text-gray-600">
              Fast and reliable service throughout the region
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d786.4229550752766!2d120.99903611952517!3d14.473716522028118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ce65545c11dd%3A0x21a17bfe663877bd!2sd%2C%202605%20B%20Angelina%20Canaynay%20Ave.%2C%20Para%C3%B1aque%2C%201700%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1775632585097!5m2!1sen!2sph"
              className="w-full h-96 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Book?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience professional air conditioning service in your area today
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Schedule Service</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
