import { Truck, TrendingUp, Heart, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Industry Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized expertise across key industries and use cases.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="animate-on-scroll hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Truck className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Logistics</h3>
              <p className="text-sm text-gray-600">Supply chain optimization, route planning, and inventory management systems.</p>
            </CardContent>
          </Card>
          
          <Card className="animate-on-scroll hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-green-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">FinTech</h3>
              <p className="text-sm text-gray-600">Risk assessment, fraud detection, and automated trading solutions.</p>
            </CardContent>
          </Card>
          
          <Card className="animate-on-scroll hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Heart className="text-red-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">HealthTech</h3>
              <p className="text-sm text-gray-600">Patient management, diagnostic tools, and healthcare analytics platforms.</p>
            </CardContent>
          </Card>
          
          <Card className="animate-on-scroll hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <ShoppingCart className="text-purple-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">E-Commerce</h3>
              <p className="text-sm text-gray-600">Recommendation engines, inventory optimization, and customer analytics.</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Case Study: Logistics Optimization
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We helped a mid-size logistics company reduce delivery times by 35% and cut operational costs by 28% through our AI-powered route optimization and predictive maintenance system.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary">35%</div>
                  <div className="text-sm text-gray-600">Faster Delivery</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-600">28%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">99.2%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <img 
              src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Abstract technology visualization" 
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
