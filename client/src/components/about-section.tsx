import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Team of professionals collaborating" 
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
          
          <div className="animate-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              About Soultive
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded with a mission to bridge the gap between cutting-edge technology and practical business solutions, Soultive empowers organizations to harness the full potential of intelligent software.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of experienced developers, data scientists, and business analysts work together to create solutions that don't just solve today's problems, but anticipate tomorrow's opportunities.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Our Mission</h4>
                  <p className="text-gray-600 text-sm">To democratize intelligent technology and make it accessible to businesses of all sizes.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Our Vision</h4>
                  <p className="text-gray-600 text-sm">A world where every business can leverage AI and automation to achieve extraordinary results.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
