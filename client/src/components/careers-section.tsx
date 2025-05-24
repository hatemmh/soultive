import { Rocket, Users, Scale } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function CareersSection() {
  const openings = [
    { title: "Senior Full-Stack Developer", location: "Remote • Full-time" },
    { title: "ML Engineer", location: "San Francisco • Full-time" },
    { title: "DevOps Engineer", location: "Remote • Contract" }
  ];

  return (
    <section id="careers" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're always looking for talented individuals who share our passion for innovative technology.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <img 
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern tech office workspace" 
              className="rounded-xl shadow-lg w-full"
            />
          </div>
          
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Work at Soultive?
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Rocket className="text-primary mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">Cutting-Edge Projects</h4>
                  <p className="text-gray-600 text-sm">Work on the latest AI and automation technologies.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="text-primary mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">Collaborative Culture</h4>
                  <p className="text-gray-600 text-sm">Join a team that values innovation and growth.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Scale className="text-primary mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">Work-Life Balance</h4>
                  <p className="text-gray-600 text-sm">Flexible schedules and remote work options.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Current Openings:</h4>
              {openings.map((opening, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardContent className="p-4">
                    <h5 className="font-medium text-gray-900">{opening.title}</h5>
                    <p className="text-sm text-gray-600">{opening.location}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
