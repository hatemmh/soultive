import { Card, CardContent } from "@/components/ui/card";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      description: "10+ years in AI and machine learning with expertise in scalable solutions.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      description: "Former Google engineer specializing in distributed systems and automation.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9f00bce?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Developer",
      description: "Full-stack expert with deep knowledge in cloud architecture and DevOps.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced professionals passionate about delivering innovative solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="animate-on-scroll text-center bg-slate-50">
              <CardContent className="p-6">
                <img 
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-600">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
