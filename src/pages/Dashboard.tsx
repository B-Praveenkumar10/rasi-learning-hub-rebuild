
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, User, Calendar, Clock, Award, TrendingUp, Bell, Settings, GraduationCap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const [student] = useState({
    name: "John Doe",
    class: "12th",
    board: "CBSE",
    rollNumber: "CB12001",
    email: "john.doe@email.com"
  });

  const subjects = [
    { name: "Mathematics", progress: 85, grade: "A", nextClass: "Today 2:00 PM" },
    { name: "Physics", progress: 78, grade: "B+", nextClass: "Tomorrow 10:00 AM" },
    { name: "Chemistry", progress: 92, grade: "A+", nextClass: "Today 4:00 PM" },
    { name: "Biology", progress: 88, grade: "A", nextClass: "Tomorrow 2:00 PM" },
    { name: "English", progress: 76, grade: "B+", nextClass: "Today 11:00 AM" },
    { name: "Computer Science", progress: 94, grade: "A+", nextClass: "Tomorrow 9:00 AM" }
  ];

  const recentAnnouncements = [
    { title: "Mid-term Exams Schedule Released", date: "2024-01-15", type: "exam" },
    { title: "New Study Materials Available", date: "2024-01-12", type: "material" },
    { title: "Parent-Teacher Meeting", date: "2024-01-20", type: "meeting" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome back, {student.name}!</h1>
          <p className="text-gray-600">Here's your learning progress and upcoming classes.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Current Class</p>
                  <p className="text-2xl font-bold">{student.class}</p>
                </div>
                <GraduationCap className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Board</p>
                  <p className="text-2xl font-bold">{student.board}</p>
                </div>
                <BookOpen className="h-8 w-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Overall Grade</p>
                  <p className="text-2xl font-bold">A</p>
                </div>
                <Award className="h-8 w-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100">Attendance</p>
                  <p className="text-2xl font-bold">94%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Subject Progress */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Subject Progress
                </CardTitle>
                <CardDescription>Your performance across all subjects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {subjects.map((subject, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">{subject.name}</h4>
                          <p className="text-sm text-gray-600">Next class: {subject.nextClass}</p>
                        </div>
                        <Badge variant={subject.grade.includes('A') ? 'default' : 'secondary'}>
                          {subject.grade}
                        </Badge>
                      </div>
                      <Progress value={subject.progress} className="h-2" />
                      <p className="text-sm text-gray-500">{subject.progress}% Complete</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {/* Profile Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Student Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Name</p>
                  <p className="font-medium">{student.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Roll Number</p>
                  <p className="font-medium">{student.rollNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium">{student.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Class & Board</p>
                  <p className="font-medium">{student.class} - {student.board}</p>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  <Settings className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            {/* Announcements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Recent Announcements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAnnouncements.map((announcement, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-medium text-sm">{announcement.title}</h4>
                      <p className="text-xs text-gray-600">{announcement.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  View Schedule
                </Button>
                <Button className="w-full" variant="outline">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Study Materials
                </Button>
                <Button className="w-full" variant="outline">
                  <Clock className="h-4 w-4 mr-2" />
                  Attendance
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
