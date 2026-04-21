import { Target, Eye, Users, Award } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

export function About() {
  return (
    <div className="flex flex-col">
      {/* hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Your trusted partner in air conditioning solutions
          </p>
        </div>
      </section>

      {/* desc */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div>
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
              </div>

              <p className="text-lg text-gray-600 mb-6">
                KLiMASOUTH Aircon Services aim to be a trusted name in climate control solutions, delivering expert services for residential, commercial and industrial clients. With a team that blends strategic executive vision and deep technical expertise, we go beyond routine servicing - we help engineer comfort, efficiency and reliability.
              </p>

              <p className="text-lg text-gray-600 mb-8">
                At our core, we believe that air-conditioning is not just about cooling spaces, but about enhancing well-being, productivity and long term sustainability.
              </p>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1504297050568-910d24c426d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMG9mZmljZSUyMGludGVyaW9yfGVufDF8fHx8MTc3NDk3NTI5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern Office"
                className="rounded-lg shadow-lg w-full"
              />
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Image LEFT */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Leadership"
                className="rounded-lg shadow-lg w-full"
              />
            </div>

            {/* Text RIGHT */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Leadership Excellence
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                KLiMASOUTH was founded by a seasoned executive with proven experience in steering high performing teams and managed by an accomplished Architect who brings decades of hands on expertise as a Facilities Head in the Middle East. This rare combination of business acumen and technical mastery ensures every project is executed with precision, foresight and unmatched professionalism.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* mission vision */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-t-4 border-t-blue-600">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600">
                  “Our mission is to deliver best-in-class air conditioning solutions that blend technical expertise with high-level professionalism, ensuring long-term sustainability while providing our customers with comfort, efficiency, and lasting value.”
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-600">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600">
                  “To be the top of mind air-conditioning services company in our chosen area, recognized for customer centricity, value and reliability.”
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* values */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center max-w-sm mx-auto">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Provide tailored solutions that meet the unique needs of every customer
              </p>
            </div>

            <div className="text-center max-w-sm mx-auto">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Exceed expectations through service excellence and technical precision
              </p>
            </div>

            <div className="text-center max-w-sm mx-auto">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Deliver cutting-edge, energy-efficient cooling systems that combine performance with sustainability
              </p>
            </div>

            <div className="text-center max-w-sm mx-auto">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Promote environmentally responsible practices in every installation and service we offer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* team */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Team</h2>
            <p className="text-lg text-gray-600">
              Skilled technicians dedicated to your comfort
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1546079406-046e141edf3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXIlMjBjb25kaXRpb25pbmclMjB0ZWNobmljaWFuJTIwcmVwYWlyfGVufDF8fHx8MTc3NDk3NTI5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional Team"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
