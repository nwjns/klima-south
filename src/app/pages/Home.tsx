import { Link } from "react-router";
import { 
  ArrowDown, 
  Hand, 
  Paintbrush, 
  Zap, 
  TruckIcon, 
  AirVent,
  CheckCircle,
  Phone,
  Mail,
  ArrowRight
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export function Home() {
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

  const reasons = [
    "Reliable technicians",
    "Fast response time",
    "Affordable pricing",
    "Residential & commercial expertise",
    "Quality service guaranteed",
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1546079406-046e141edf3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXIlMjBjb25kaXRpb25pbmclMjB0ZWNobmljaWFuJTIwcmVwYWlyfGVufDF8fHx8MTc3NDk3NTI5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Stay Cool. <br/>
              Stay Comfortable. <br/>
              Stay Reliable.
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              Delivering efficient and reliable air conditioning solutions for residential and commercial spaces.
            </p>
            <p className="text-lg mb-8 text-blue-50">
              From installation to maintenance, KlimaSouth ensures your cooling systems run at peak performance—so you can enjoy comfort all year round.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1761642119720-1ce47b16d09b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhaXIlMjBjb25kaXRpb25lciUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NzQ5NzUyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Air Conditioning Service"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">About KlimaSouth</h2>
              <p className="text-lg text-gray-600 mb-6">
                KlimaSouth is a trusted HVAC service provider specializing in air conditioning solutions. With skilled technicians and a commitment to quality, we deliver reliable services you can feel.
              </p>
              <Button asChild variant="default">
                <Link to="/about">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive air conditioning solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-xl mb-2 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Choose KlimaSouth</h2>
              <ul className="space-y-4">
                {reasons.map((reason, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1735875530804-d661ca2001da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWNobmljaWFuJTIwdG9vbHN8ZW58MXx8fHwxNzc0OTczMTA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional Tools"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <a href="tel:09175401688" className="text-lg font-medium hover:underline">
                0917 540 1688
              </a>
            </div>
            <div className="hidden sm:block text-blue-300">|</div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <a href="tel:09681721688" className="text-lg font-medium hover:underline">
                0968 172 1688
              </a>
            </div>
            <div className="hidden sm:block text-blue-300">|</div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <a href="mailto:inquiry@klimasouth.com" className="text-lg font-medium hover:underline">
                inquiry@klimasouth.com
              </a>
            </div>
          </div>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link to="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}