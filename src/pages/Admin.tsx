
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, BookOpen, Calendar, Settings, Plus, Search, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Admin = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const students = [
    { id: 1, name: "John Doe", class: "12th", board: "CBSE", grade: "A", attendance: "94%" },
    { id: 2, name: "Jane Smith", class: "11th", board: "State Board", grade: "A+", attendance: "98%" },
    { id: 3, name: "Mike Johnson", class: "10th", board: "CBSE", grade: "B+", attendance: "89%" },
    { id: 4, name: "Sarah Wilson", class: "12th", board: "State Board", grade: "A", attendance: "96%" },
    { id: 5, name: "David Brown", class: "9th", board: "CBSE", grade: "B", attendance: "87%" }
  ];

  const teachers = [
    { id: 1, name: "Dr. Rajesh Kumar", subject: "Mathematics", classes: "10th-12th", experience: "15 years" },
    { id: 2, name: "Mrs. Priya Sharma", subject: "Physics", classes: "11th-12th", experience: "12 years" },
    { id: 3, name: "Mr. Suresh Nair", subject: "Chemistry", classes: "10th-12th", experience: "18 years" },
    { id: 4, name: "Ms. Kavitha Reddy", subject: "Biology", classes: "11th-12th", experience: "10 years" }
  ];

  const stats = {
    totalStudents: 156,
    totalTeachers: 12,
    totalClasses: 7,
    avgAttendance: 92
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage RASI INSTITUTIONS effectively</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Total Students</p>
                  <p className="text-3xl font-bold">{stats.totalStudents}</p>
                </div>
                <Users className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Total Teachers</p>
                  <p className="text-3xl font-bold">{stats.totalTeachers}</p>
                </div>
                <BookOpen className="h-8 w-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Total Classes</p>
                  <p className="text-3xl font-bold">{stats.totalClasses}</p>
                </div>
                <Calendar className="h-8 w-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100">Avg Attendance</p>
                  <p className="text-3xl font-bold">{stats.avgAttendance}%</p>
                </div>
                <Settings className="h-8 w-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="students" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="teachers">Teachers</TabsTrigger>
            <TabsTrigger value="classes">Classes</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Students Tab */}
          <TabsContent value="students">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Student Management</CardTitle>
                    <CardDescription>Manage all student records and information</CardDescription>
                  </div>
                  <Button className="bg-gradient-to-r from-blue-600 to-green-600">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Student
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search students..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Name</th>
                        <th className="text-left py-3 px-4">Class</th>
                        <th className="text-left py-3 px-4">Board</th>
                        <th className="text-left py-3 px-4">Grade</th>
                        <th className="text-left py-3 px-4">Attendance</th>
                        <th className="text-left py-3 px-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map((student) => (
                        <tr key={student.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium">{student.name}</td>
                          <td className="py-3 px-4">{student.class}</td>
                          <td className="py-3 px-4">{student.board}</td>
                          <td className="py-3 px-4">
                            <Badge variant={student.grade.includes('A') ? 'default' : 'secondary'}>
                              {student.grade}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">{student.attendance}</td>
                          <td className="py-3 px-4">
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">Edit</Button>
                              <Button size="sm" variant="outline">View</Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Teachers Tab */}
          <TabsContent value="teachers">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Teacher Management</CardTitle>
                    <CardDescription>Manage teaching staff and their assignments</CardDescription>
                  </div>
                  <Button className="bg-gradient-to-r from-blue-600 to-green-600">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Teacher
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Name</th>
                        <th className="text-left py-3 px-4">Subject</th>
                        <th className="text-left py-3 px-4">Classes</th>
                        <th className="text-left py-3 px-4">Experience</th>
                        <th className="text-left py-3 px-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teachers.map((teacher) => (
                        <tr key={teacher.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium">{teacher.name}</td>
                          <td className="py-3 px-4">{teacher.subject}</td>
                          <td className="py-3 px-4">{teacher.classes}</td>
                          <td className="py-3 px-4">{teacher.experience}</td>
                          <td className="py-3 px-4">
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">Edit</Button>
                              <Button size="sm" variant="outline">View</Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Classes Tab */}
          <TabsContent value="classes">
            <Card>
              <CardHeader>
                <CardTitle>Class Management</CardTitle>
                <CardDescription>Manage class schedules and assignments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Class Scheduling</h3>
                  <p className="text-gray-600 mb-4">Manage class timetables and schedules</p>
                  <Button className="bg-gradient-to-r from-blue-600 to-green-600">
                    Create Schedule
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
                <CardDescription>Configure system preferences and settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Institution Settings</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Institution Name</label>
                        <Input defaultValue="RASI INSTITUTIONS" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Contact Email</label>
                        <Input defaultValue="info@rasiinstitutions.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone Number</label>
                        <Input defaultValue="+91 XXXXX XXXXX" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Address</label>
                        <Input defaultValue="Police Line 3rd Street, Panruti - 607106" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button className="bg-gradient-to-r from-blue-600 to-green-600">
                      Save Changes
                    </Button>
                    <Button variant="outline">
                      Reset Settings
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Admin;
