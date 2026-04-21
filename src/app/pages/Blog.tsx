import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router";

export function Blog() {
  const blogPosts = [
    {
      id: "energy-saving-tips",
      title: "10 Energy Saving Tips to Lower Your Electricity Bill",
      excerpt: "With rising electricity costs, maximizing your aircon's energy efficiency is more important than ever. Discover practical tips that can significantly reduce your monthly bills.",
      author: "KlimaSouth Team",
      date: "March 28, 2026",
      category: "Energy Saving",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1770075370139-1277d3a37b89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodmFjJTIwY29vbGluZyUyMHN5c3RlbSUyMHJlc2lkZW50aWFsfGVufDF8fHx8MTc3NDk3NTI5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "common-aircon-problems",
      title: "Common Aircon Problems and How to Fix Them",
      excerpt: "Is your air conditioner acting up? Before calling a technician, check out these common problems and simple solutions you can try yourself.",
      author: "KlimaSouth Team",
      date: "March 25, 2026",
      category: "Troubleshooting",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1546079406-046e141edf3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXIlMjBjb25kaXRpb25pbmclMjB0ZWNobmljaWFuJTIwcmVwYWlyfGVufDF8fHx8MTc3NDk3NTI5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "replace-vs-repair",
      title: "When to Replace vs. Repair Your Air Conditioner",
      excerpt: "Deciding whether to repair or replace your aircon can be challenging. Learn the key factors to consider when making this important decision.",
      author: "KlimaSouth Team",
      date: "March 20, 2026",
      category: "Buying Guide",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1696774275614-8af905e80d57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21mb3J0YWJsZSUyMGhvbWUlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc3NDk3NTI5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <BookOpen className="w-10 h-10 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">Blog</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-2xl">
            Tips, guides, and insights on air conditioning maintenance and efficiency
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow flex flex-col">
                <div className="aspect-[16/9] overflow-hidden rounded-t-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      {post.category}
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="mt-auto">
                    <div className="flex items-center text-sm text-gray-500 mb-4 pb-4 border-b">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{post.date}</span>
                    </div>
                    
                    <Button variant="outline" className="w-full group">
                      <Link to={`/blog/${post.id}`} className="flex items-center justify-center w-full">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Need Professional Help?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our expert technicians are ready to assist with all your air conditioning needs
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}