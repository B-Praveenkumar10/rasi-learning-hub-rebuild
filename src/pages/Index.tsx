
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, MapPin, Phone, Mail, Star, GraduationCap, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

console.log("Index component is loading");

const Index = () => {
  console.log("Index component is rendering");

  const subjects = [
    { name: "English", icon: "📚", description: "Comprehensive English literature and grammar" },
    { name: "Tamil", icon: "🇮🇳", description: "Tamil language and literature" },
    { name: "Mathematics", icon: "🔢", description: "Advanced mathematical concepts and problem solving" },
    { name: "Physics", icon: "⚛️", description: "Theoretical and practical physics" },
    { name: "Chemistry", icon: "🧪", description: "Organic, inorganic and physical chemistry" },
    { name: "Biology", icon: "🧬", description: "Life sciences and biological studies" },
    { name: "Computer Science", icon: "💻", description: "Programming and computer applications" }
  ];

  const features = [
    { icon: <GraduationCap className="h-8 w-8" />, title: "Expert Faculty", description: "Highly qualified and experienced teachers" },
    { icon: <Award className="h-8 w-8" />, title: "Proven Results", description: "Excellent academic performance track record" },
    { icon: <Clock className="h-8 w-8" />, title: "Flexible Timings", description: "Multiple batch options to suit your schedule" },
    { icon: <Users className="h-8 w-8" />, title: "Small Batches", description: "Personalized attention with limited students per batch" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            RASI INSTITUTIONS
          </h1>
          <p className="text-xl mb-4 opacity-90">
            Excellence in Education • Shaping Future Leaders
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-lg py-2 px-4 bg-white/20 text-white border-white/30">
              State Board
            </Badge>
            <Badge variant="secondary" className="text-lg py-2 px-4 bg-white/20 text-white border-white/30">
              CBSE
            </Badge>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/login">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                Student Login
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold">
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Classes Offered</h2>
            <p className="text-gray-600 text-lg">Comprehensive education from 6th to 12th standard</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[6, 7, 8, 9, 10, 11, 12].map((cls) => (
              <Card key={cls} className="text-center hover:shadow-lg transition-shadow cursor-pointer bg-gradient-to-br from-blue-50 to-green-50 border-2 hover:border-blue-300">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{cls}th</div>
                  <div className="text-sm text-gray-600">Standard</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Subjects We Teach</h2>
            <p className="text-gray-600 text-lg">Comprehensive curriculum covering all major subjects</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {subjects.map((subject, index) => (
              <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-2 hover:border-blue-300">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{subject.icon}</div>
                  <CardTitle className="text-xl text-blue-600">{subject.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {subject.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose RASI INSTITUTIONS?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Eligibility Criteria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Current Students</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">Students currently studying in Class 6th to 12th</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-2xl">New Admissions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">Students who have passed Class 5th and above</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Visit Our Campus</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-gray-300">Police Line 3rd Street<br />Panruti - 607106<br />Cuddalore District</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-blue-400" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-300">+91 XXXXX XXXXX</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-blue-400" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-300">info@rasiinstitutions.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4">
                <Link to="/login" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Student Login
                </Link>
                <Link to="/register" className="text-blue-400 hover:text-blue-300 transition-colors">
                  New Registration
                </Link>
                <Link to="/admin" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Admin Portal
                </Link>
                <Link to="/dashboard" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
