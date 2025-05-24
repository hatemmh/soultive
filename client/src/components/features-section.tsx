import { Brain, Settings, Code } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Soultive?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise with business insight to deliver solutions that drive real results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center animate-on-scroll card-hover bg-slate-50 p-8 rounded-xl">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered Solutions</h3>
            <p className="text-gray-600">
              Leverage machine learning and artificial intelligence to automate complex processes and gain competitive advantages.
            </p>
          </div>
          
          <div className="text-center animate-on-scroll card-hover bg-slate-50 p-8 rounded-xl">
            <div className="bg-emerald-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Settings className="text-emerald-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Process Automation</h3>
            <p className="text-gray-600">
              Streamline operations and reduce manual work with intelligent automation that scales with your business.
            </p>
          </div>
          
          <div className="text-center animate-on-scroll card-hover bg-slate-50 p-8 rounded-xl">
            <div className="bg-purple-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Code className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Development</h3>
            <p className="text-gray-600">
              Build tailored software solutions that perfectly fit your unique business requirements and workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
