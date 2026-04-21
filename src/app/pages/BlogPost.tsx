import { useParams, Link, Navigate } from "react-router";
import { Calendar, User, ArrowLeft, ArrowRight, Tag } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

interface BlogPostData {
  id: string;
  title: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: {
    introduction: string;
    sections: {
      heading?: string;
      text?: string;
      list?: string[];
    }[];
    conclusion: string;
  };
}

const blogPosts: BlogPostData[] = [
  {
    id: "energy-saving-tips",
    title: "10 Energy Saving Tips to Lower Your Electricity Bill",
    author: "KlimaSouth Team",
    date: "March 28, 2026",
    category: "Energy Saving",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1770075370139-1277d3a37b89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodmFjJTIwY29vbGluZyUyMHN5c3RlbSUyMHJlc2lkZW50aWFsfGVufDF8fHx8MTc3NDk3NTI5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    excerpt: "With rising electricity costs, maximizing your aircon's energy efficiency is more important than ever. Discover practical tips that can significantly reduce your monthly bills.",
    content: {
      introduction: "Air conditioning typically accounts for 40-60% of household electricity consumption in the Philippines. With energy costs rising, implementing energy-saving strategies can result in significant savings without sacrificing comfort. Here are 10 proven ways to reduce your aircon-related electricity bills.",
      sections: [
        {
          heading: "1. Optimize Your Thermostat Setting",
          text: "The temperature you set has a major impact on energy consumption. Every degree lower can increase electricity usage by 3-5%.",
          list: [
            "Set thermostat to 24-26°C for optimal comfort and efficiency",
            "Avoid setting it below 22°C—it won't cool faster and wastes energy",
            "Use 'eco' or 'energy-saving' mode if available",
            "Consider a smart thermostat for automatic optimization"
          ]
        },
        {
          heading: "2. Use Timer Functions Strategically",
          text: "Running your aircon only when needed can dramatically reduce consumption.",
          list: [
            "Set timers to turn off after you fall asleep",
            "Program the unit to turn on 30 minutes before you arrive home",
            "Avoid running the aircon in unoccupied rooms",
            "Use sleep mode for gradual temperature adjustment overnight"
          ]
        },
        {
          heading: "3. Seal Your Space",
          text: "Cool air escaping through gaps and openings forces your aircon to work harder.",
          list: [
            "Keep doors and windows closed while the aircon is running",
            "Seal gaps around windows and doors with weather stripping",
            "Close off unused rooms to concentrate cooling",
            "Ensure proper insulation in walls and ceilings"
          ]
        },
        {
          heading: "4. Enhance Air Circulation",
          text: "Using ceiling fans in conjunction with your aircon allows you to raise the temperature setting while maintaining comfort.",
          list: [
            "Run ceiling fans to distribute cool air more evenly",
            "Set fans to rotate counterclockwise in summer",
            "You can raise the thermostat by 2-3°C with good air circulation",
            "Turn off fans when leaving the room—they cool people, not air"
          ]
        },
        {
          heading: "5. Block Direct Sunlight",
          text: "Solar heat gain through windows can significantly increase cooling requirements.",
          list: [
            "Install curtains, blinds, or solar shades on sun-facing windows",
            "Close curtains during the hottest part of the day",
            "Consider reflective window film for west-facing windows",
            "Plant shade trees (long-term investment)"
          ]
        },
        {
          heading: "6. Upgrade to Inverter Technology",
          text: "If you have an old aircon, upgrading to an inverter model can reduce energy consumption by 30-50%.",
          list: [
            "Inverter aircons adjust compressor speed based on cooling needs",
            "More expensive upfront but save money long-term",
            "Quieter operation and more consistent temperature",
            "Look for high EER (Energy Efficiency Ratio) ratings"
          ]
        },
        {
          heading: "7. Practice Smart Usage Habits",
          text: "Small behavioral changes can add up to significant savings.",
          list: [
            "Turn off the aircon when leaving for more than 30 minutes",
            "Avoid opening and closing doors frequently",
            "Don't use heat-generating appliances during peak cooling hours",
            "Dress appropriately—light clothing allows higher thermostat settings"
          ]
        },
        {
          heading: "8. Maintain Your Unit Regularly",
          text: "A well-maintained aircon runs more efficiently and uses less energy.",
          list: [
            "Clean filters every 2-3 weeks",
            "Schedule professional maintenance twice yearly",
            "Keep outdoor unit free from debris",
            "Address minor issues before they become major problems"
          ]
        },
        {
          heading: "9. Right-Size Your Aircon",
          text: "Using the correct capacity for your space ensures efficient operation.",
          list: [
            "Oversized units cycle on/off frequently, wasting energy",
            "Undersized units run constantly, also wasting energy",
            "Consult professionals for proper capacity calculation",
            "Consider room usage patterns when selecting capacity"
          ]
        },
        {
          heading: "10. Monitor Your Electricity Usage",
          text: "Awareness of consumption patterns helps identify opportunities for savings.",
          list: [
            "Check your monthly electricity bills for trends",
            "Use smart meters or energy monitors if available",
            "Compare usage before and after implementing changes",
            "Set monthly energy-saving goals"
          ]
        }
      ],
      conclusion: "Implementing these energy-saving strategies can reduce your air conditioning costs by 20-40% without compromising comfort. Start with the easiest changes like adjusting your thermostat and using timers, then gradually implement other strategies. Remember, the most efficient aircon is one that's properly maintained—contact KlimaSouth today for professional maintenance that keeps your system running at peak efficiency."
    }
  },
  {
    id: "common-aircon-problems",
    title: "Common Aircon Problems and How to Fix Them",
    author: "KlimaSouth Team",
    date: "March 25, 2026",
    category: "Troubleshooting",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1546079406-046e141edf3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXIlMjBjb25kaXRpb25pbmclMjB0ZWNobmljaWFuJTIwcmVwYWlyfGVufDF8fHx8MTc3NDk3NTI5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    excerpt: "Is your air conditioner acting up? Before calling a technician, check out these common problems and simple solutions you can try yourself.",
    content: {
      introduction: "Air conditioner problems can be frustrating, especially during hot weather. While some issues require professional attention, many common problems have simple solutions you can try yourself. This guide will help you diagnose and potentially fix common aircon issues, saving you time and money.",
      sections: [
        {
          heading: "Problem 1: Water Leaking from Indoor Unit",
          text: "Water leaks are one of the most common aircon problems in the Philippines. The issue is usually related to drainage.",
          list: [
            "Cause: Clogged drain pipe or condensate pan",
            "DIY Fix: Check if the drain pipe is blocked and clear it with a wire or by flushing with water",
            "Prevention: Regular cleaning and maintenance",
            "Call a pro if: Leak persists after clearing the drain or if there's a refrigerant leak"
          ]
        },
        {
          heading: "Problem 2: Aircon Not Cooling or Weak Cooling",
          text: "If your aircon is running but not cooling effectively, several factors could be responsible.",
          list: [
            "Cause 1: Dirty air filter restricting airflow",
            "Cause 2: Low refrigerant (freon) levels",
            "Cause 3: Dirty evaporator or condenser coils",
            "DIY Fix: Clean or replace air filters first",
            "Call a pro: For refrigerant charging or coil cleaning"
          ]
        },
        {
          heading: "Problem 3: Strange Odors",
          text: "Unpleasant smells from your aircon usually indicate organic growth or electrical issues.",
          list: [
            "Musty smell: Mold or mildew buildup in the unit or ducts",
            "Burning smell: Electrical problem or overheating—turn off immediately",
            "DIY Fix: Clean filters and spray with antibacterial solution for musty odors",
            "Professional help needed: For persistent odors or burning smells"
          ]
        },
        {
          heading: "Problem 4: Unusual Noises",
          text: "Different sounds indicate different problems. Here's how to decode them.",
          list: [
            "Rattling: Loose parts or debris in the unit",
            "Squealing: Belt or bearing issues",
            "Clicking: Normal during startup, but persistent clicking may indicate electrical problems",
            "Grinding: Motor or compressor problems—requires professional attention",
            "DIY Fix: Check for and remove any visible debris; tighten loose panels"
          ]
        },
        {
          heading: "Problem 5: Aircon Won't Turn On",
          text: "If your unit is completely unresponsive, check these common causes first.",
          list: [
            "Check 1: Ensure the unit is plugged in and power switch is on",
            "Check 2: Verify circuit breaker hasn't tripped",
            "Check 3: Replace remote control batteries",
            "Check 4: Ensure temperature setting is lower than room temperature",
            "Call a pro if: All checks pass but unit still won't start"
          ]
        },
        {
          heading: "Problem 6: Ice Formation on Indoor Unit",
          text: "Ice buildup on the evaporator coils or refrigerant lines indicates an airflow or refrigerant problem.",
          list: [
            "Cause: Restricted airflow from dirty filters or low refrigerant",
            "DIY Fix: Turn off the unit, let ice melt, then clean filters",
            "Warning: Never chip away ice—you could damage the coils",
            "Professional help: Needed if problem persists or for refrigerant issues"
          ]
        },
        {
          heading: "Problem 7: Short Cycling (Frequent On/Off)",
          text: "When your aircon turns on and off too frequently, it wastes energy and puts stress on components.",
          list: [
            "Cause 1: Oversized unit for the space",
            "Cause 2: Dirty filters or coils",
            "Cause 3: Thermostat issues or placement",
            "Cause 4: Low refrigerant levels",
            "Solution: Clean filters first, then call a professional if it continues"
          ]
        },
        {
          heading: "When to Call a Professional",
          text: "Some problems require expert attention. Contact KlimaSouth if you experience:",
          list: [
            "Refrigerant leaks or low refrigerant levels",
            "Electrical issues or burning smells",
            "Compressor or motor problems",
            "Persistent problems after trying DIY fixes",
            "Any issue you're uncomfortable handling yourself"
          ]
        }
      ],
      conclusion: "While many aircon problems can be prevented with regular maintenance, issues will occasionally arise. Knowing how to troubleshoot common problems can save you time and money, but don't hesitate to call professionals when needed. KlimaSouth's experienced technicians can quickly diagnose and fix any aircon issue, ensuring your comfort is restored as quickly as possible. Remember: regular preventive maintenance is the best way to avoid these problems in the first place."
    }
  },
  {
    id: "replace-vs-repair",
    title: "When to Replace vs. Repair Your Air Conditioner",
    author: "KlimaSouth Team",
    date: "March 20, 2026",
    category: "Buying Guide",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1696774275614-8af905e80d57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21mb3J0YWJsZSUyMGhvbWUlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc3NDk3NTI5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    excerpt: "Deciding whether to repair or replace your aircon can be challenging. Learn the key factors to consider when making this important decision.",
    content: {
      introduction: "When your air conditioner breaks down, you face an important decision: repair or replace? This choice can significantly impact your comfort, budget, and long-term costs. Understanding the key factors will help you make an informed decision that's right for your situation.",
      sections: [
        {
          heading: "The Age Factor",
          text: "The age of your air conditioner is one of the most important considerations in the repair vs. replace decision.",
          list: [
            "Average lifespan: 10-15 years with proper maintenance",
            "Units under 5 years: Usually worth repairing",
            "Units 5-10 years: Evaluate repair costs and efficiency",
            "Units over 10 years: Consider replacement, especially for major repairs",
            "Older units use outdated, less efficient technology"
          ]
        },
        {
          heading: "Repair Frequency and Costs",
          text: "Multiple repairs in a short period indicate declining reliability and mounting costs.",
          list: [
            "More than 2-3 repairs per year: Strong signal to replace",
            "The 50% rule: If repair costs exceed 50% of replacement cost, replace",
            "Track total repair costs over the past 2-3 years",
            "Consider future repair likelihood, not just current issues",
            "Emergency repairs are typically more expensive"
          ]
        },
        {
          heading: "Energy Efficiency Comparison",
          text: "Modern air conditioners are significantly more efficient than models from even 5-10 years ago.",
          list: [
            "New inverter models use 30-50% less electricity",
            "Calculate potential monthly savings on electricity bills",
            "Payback period often 3-5 years through energy savings",
            "Look for high EER ratings (Energy Efficiency Ratio)",
            "Government rebates may be available for energy-efficient upgrades"
          ]
        },
        {
          heading: "Type of Problem",
          text: "The nature of the malfunction matters. Some problems are worth fixing, others signal it's time to replace.",
          list: [
            "Minor issues (filters, sensors, fans): Definitely repair",
            "Moderate issues (freon leaks, electrical problems): Depends on age",
            "Major issues (compressor failure, refrigerant leaks in old units): Consider replacement",
            "Compressor replacement alone can cost 50-70% of a new unit"
          ]
        },
        {
          heading: "Refrigerant Type Considerations",
          text: "Environmental regulations are phasing out older refrigerants, making this an important factor.",
          list: [
            "R-22 (Freon) being phased out—increasingly expensive and hard to find",
            "Units using R-22 should be replaced when major repairs are needed",
            "Modern R-410A refrigerant is more environmentally friendly",
            "Future-proof your home with current-standard refrigerants"
          ]
        },
        {
          heading: "Comfort and Performance Issues",
          text: "Consistent temperature control problems may indicate your system can no longer meet your needs.",
          list: [
            "Uneven cooling or hot spots in your home",
            "Humidity control problems",
            "Excessive noise levels",
            "Unit running constantly but not achieving desired temperature",
            "These often indicate systemic issues better solved by replacement"
          ]
        },
        {
          heading: "Financial Considerations",
          text: "Look beyond the immediate repair cost to understand the total financial picture.",
          list: [
            "Compare: Repair cost + increased energy bills vs. new unit cost - energy savings",
            "Consider financing options for new units",
            "Factor in warranty coverage (new units typically have 5-year warranties)",
            "Account for potential property value increase with new, efficient system",
            "Tax credits or rebates may offset replacement costs"
          ]
        },
        {
          heading: "Making the Decision",
          text: "Use this simple decision framework to guide your choice.",
          list: [
            "Age under 7 years + reasonable repair cost = Repair",
            "Age over 10 years + major repair needed = Replace",
            "Frequent repairs regardless of age = Replace",
            "High energy bills + old unit = Replace",
            "When in doubt, get a professional assessment from KlimaSouth"
          ]
        }
      ],
      conclusion: "The decision to repair or replace your air conditioner depends on multiple factors working together. While repair might seem cheaper initially, replacement often provides better long-term value through energy savings, reliability, and peace of mind. KlimaSouth's experienced team can provide honest assessments and recommendations tailored to your specific situation. Contact us today for a free evaluation and quote—we'll help you make the decision that's right for your home and budget."
    }
  },
];

export function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.id === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== slug && p.category === post.category)
    .slice(0, 2);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-16">
        <div className="absolute inset-0 opacity-40">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="text-white hover:text-blue-300 mb-6">
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
          
          <div className="mb-4">
            <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {post.date}
            </div>
            <div className="flex items-center">
              <Tag className="w-4 h-4 mr-2" />
              {post.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed">
              {post.content.introduction}
            </p>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto"
            />
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {post.content.sections.map((section, index) => (
              <div key={index}>
                {section.heading && (
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {section.heading}
                  </h2>
                )}
                {section.text && (
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    {section.text}
                  </p>
                )}
                {section.list && (
                  <ul className="space-y-3 ml-6">
                    {section.list.map((item, idx) => (
                      <li key={idx} className="text-gray-700 flex items-start">
                        <span className="text-blue-600 mr-3 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="mt-12 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Conclusion</h3>
            <p className="text-gray-700 leading-relaxed">
              {post.content.conclusion}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Need Professional Aircon Service?</h3>
            <p className="text-lg text-blue-100 mb-6">
              KlimaSouth provides expert air conditioning services across Metro Manila and Cavite
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link to="/contact">Book a Service</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="hover:shadow-lg transition-shadow">
                  <div className="aspect-[16/9] overflow-hidden rounded-t-lg">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                        {relatedPost.category}
                      </span>
                      <span>•</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2">{relatedPost.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                    <Button asChild variant="outline" className="group">
                      <Link to={`/blog/${relatedPost.id}`}>
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
