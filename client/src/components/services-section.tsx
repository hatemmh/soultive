import { Bot, RotateCcw, Laptop, Check } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive software solutions tailored to your business needs.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="animate-on-scroll card-hover bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl border border-primary/20">
            <div className="bg-primary w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <Bot className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Solutions</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Custom machine learning models, natural language processing, computer vision, and predictive analytics to automate decision-making and extract insights from your data.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <Check className="text-primary mr-2" size={16} />
                Machine Learning Models
              </li>
              <li className="flex items-center">
                <Check className="text-primary mr-2" size={16} />
                Predictive Analytics
              </li>
              <li className="flex items-center">
                <Check className="text-primary mr-2" size={16} />
                Computer Vision
              </li>
              <li className="flex items-center">
                <Check className="text-primary mr-2" size={16} />
                NLP Solutions
              </li>
            </ul>
          </div>
          
          <div className="animate-on-scroll card-hover bg-gradient-to-br from-pink-500/5 to-pink-500/10 p-8 rounded-2xl border border-pink-500/20">
            <div className="bg-pink-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <RotateCcw className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Process Automation</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Streamline workflows, eliminate manual tasks, and improve efficiency with intelligent automation solutions that integrate seamlessly with your existing systems.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <Check className="text-pink-600 mr-2" size={16} />
                Workflow Automation
              </li>
              <li className="flex items-center">
                <Check className="text-pink-600 mr-2" size={16} />
                API Integrations
              </li>
              <li className="flex items-center">
                <Check className="text-pink-600 mr-2" size={16} />
                Data Processing
              </li>
              <li className="flex items-center">
                <Check className="text-pink-600 mr-2" size={16} />
                Task Scheduling
              </li>
            </ul>
          </div>
          
          <div className="animate-on-scroll card-hover bg-gradient-to-br from-orange-500/5 to-orange-500/10 p-8 rounded-2xl border border-orange-500/20">
            <div className="bg-orange-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <Laptop className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Development</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Full-stack web applications, mobile apps, and enterprise software built with modern technologies and best practices to scale with your business growth.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <Check className="text-orange-600 mr-2" size={16} />
                Web Applications
              </li>
              <li className="flex items-center">
                <Check className="text-orange-600 mr-2" size={16} />
                Mobile Apps
              </li>
              <li className="flex items-center">
                <Check className="text-orange-600 mr-2" size={16} />
                Enterprise Software
              </li>
              <li className="flex items-center">
                <Check className="text-orange-600 mr-2" size={16} />
                Cloud Solutions
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
