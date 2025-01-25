import React, { useEffect, useRef } from 'react';
import { X, UserRound, Brain, Clock, Activity, BookOpenCheck, Target, ArrowUpRight } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis,
  Tooltip, Legend, ResponsiveContainer,
  LineChart, Line
} from 'recharts';

interface StudentReportModalProps {
  open: boolean;
  onClose: () => void;
  sessionData: any;
  type: 'analysis' | 'report';
}

const StudentReportModal: React.FC<StudentReportModalProps> = ({
  open,
  onClose,
  sessionData,
  type
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, onClose]);

  if (!open) return null;

  // Sample data for visualizations
  const attendanceData = [
    { name: 'Present', value: 85 },
    { name: 'Late', value: 10 },
    { name: 'Absent', value: 5 }
  ];

  const engagementData = [
    { time: '0-15m', value: 90 },
    { time: '15-30m', value: 85 },
    { time: '30-45m', value: 75 },
    { time: '45-60m', value: 80 },
    { time: '60-75m', value: 70 },
    { time: '75-90m', value: 65 }
  ];

  const emotionData = [
    { name: 'Engaged', value: 45 },
    { name: 'Neutral', value: 30 },
    { name: 'Confused', value: 15 },
    { name: 'Distracted', value: 10 }
  ];

  const performanceData = [
    { category: 'Participation', value: 85 },
    { category: 'Understanding', value: 75 },
    { category: 'Task Completion', value: 90 },
    { category: 'Peer Interaction', value: 70 }
  ];

  const COLORS = ['#4CAF50', '#2196F3', '#FFC107', '#F44336'];

  const keyMetrics = [
    { title: "Total Students", value: "42", icon: UserRound, trend: "+2" },
    { title: "Avg. Attention", value: "78%", icon: Brain, trend: "+5%" },
    { title: "Duration", value: "90min", icon: Clock, trend: "" },
    { title: "Peak Engagement", value: "85%", icon: Activity, trend: "+3%" }
  ];

  const topPerformers = [
    { name: "Alice Smith", engagement: "95%", participation: "High" },
    { name: "Bob Johnson", engagement: "92%", participation: "High" },
    { name: "Carol White", engagement: "90%", participation: "Medium" }
  ];

  const interventionNeeded = [
    { name: "David Brown", engagement: "45%", issue: "Low Attention" },
    { name: "Eva Davis", engagement: "52%", issue: "Poor Participation" }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div ref={modalRef} className="relative w-11/12 max-w-7xl max-h-[90vh] bg-background rounded-lg shadow-lg">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>

        <ScrollArea className="h-[90vh] rounded-lg">
          <div className="p-6">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold">
                {type === 'analysis' ? 'Session Analysis' : 'Session Report'}: {sessionData?.topic}
              </h2>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="outline">{sessionData?.type}</Badge>
                <span className="text-muted-foreground">
                  {sessionData?.date} at {sessionData?.time}
                </span>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {keyMetrics.map((metric, index) => (
                <Card key={index}>
                  <CardContent className="flex items-center p-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mr-4">
                      <metric.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {metric.title}
                      </p>
                      <div className="flex items-center gap-2">
                        <h3 className="text-2xl font-bold">{metric.value}</h3>
                        {metric.trend && (
                          <span className="text-xs text-green-500 flex items-center">
                            {metric.trend}
                            <ArrowUpRight className="h-3 w-3 ml-0.5" />
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Attendance Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Attendance Overview</CardTitle>
                  <CardDescription>Distribution of student attendance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={attendanceData}
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {attendanceData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Engagement Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle>Engagement Timeline</CardTitle>
                  <CardDescription>Student engagement over session duration</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={engagementData}>
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#2196F3" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Emotion Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Emotion Distribution</CardTitle>
                  <CardDescription>Analysis of student emotional states</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={emotionData}
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {emotionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Performance Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                  <CardDescription>Key performance indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={performanceData}>
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#2196F3" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Student Lists */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Top Performers */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    <CardTitle>Top Performers</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topPerformers.map((student, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-card">
                        <div>
                          <p className="font-medium">{student.name}</p>
                          <p className="text-sm text-muted-foreground">Participation: {student.participation}</p>
                        </div>
                        <Badge variant="secondary">{student.engagement}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Needs Attention */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <BookOpenCheck className="h-5 w-5 text-primary" />
                    <CardTitle>Needs Attention</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {interventionNeeded.map((student, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-card">
                        <div>
                          <p className="font-medium">{student.name}</p>
                          <p className="text-sm text-muted-foreground">Issue: {student.issue}</p>
                        </div>
                        <Badge variant="destructive">{student.engagement}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default StudentReportModal;