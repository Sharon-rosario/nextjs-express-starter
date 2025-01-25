    "use client"
    import React, { useState } from 'react';
    import { Badge } from "@/components/ui/badge";
    import {
      Card,
      CardContent,
      CardDescription,
      CardHeader,
      CardTitle,
    } from "@/components/ui/card";
    import {
      Table,
      TableBody,
      TableCell,
      TableHead,
      TableHeader,
      TableRow,
    } from "@/components/ui/table";
    import { FiBarChart, FiFileText } from "react-icons/fi";
    import StudentReportModal from '../Reports/StudentReportModal'; // Import the modal component
import { useRouter } from 'next/navigation';

    export default function SessionsPage() {
      const [isAnalysisModalOpen, setIsAnalysisModalOpen] = useState(false);
      const [isReportModalOpen, setIsReportModalOpen] = useState(false);
      const [selectedSession, setSelectedSession] = useState(null);

      const router = useRouter();

      const sessions = [
        {
          id: 1,
          topic: "Mathematics 101",
          type: "Lecture",
          status: "Completed",
          date: "2023-12-20",
          time: "10:00 AM",
        },
        {
          id: 2,
          topic: "Physics 201",
          type: "Workshop",
          status: "Ongoing",
          date: "2023-12-22",
          time: "02:00 PM",
        },
        {
          id: 3,
          topic: "Chemistry Basics",
          type: "Seminar",
          status: "Pending",
          date: "2023-12-24",
          time: "11:00 AM",
        },
      ];

      const handleAnalysisClick = () => {
        router.push("/#"); // Navigate to the analysis page
      };

      const handleReportClick = (session) => {
        setSelectedSession(session);
        setIsReportModalOpen(true);
      };

      return (
        <>
          <Card>
            <CardHeader className="px-7">
              <CardTitle>Lecture Sessions</CardTitle>
              <CardDescription>Manage your lecture sessions here.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Topic</TableHead>
                    <TableHead className="hidden sm:table-cell">Type</TableHead>
                    <TableHead className="hidden sm:table-cell">Status</TableHead>
                    <TableHead className="hidden md:table-cell">Date</TableHead>
                    <TableHead className="hidden md:table-cell">Time</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sessions.map((session) => (
                    <TableRow key={session.id}>
                      <TableCell>
                        <div className="font-medium">{session.topic}</div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        {session.type}
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <Badge
                          className="text-xs"
                          variant={
                            session.status === "Completed"
                              ? "secondary"
                              : session.status === "Ongoing"
                              ? "outline"
                              : "default"
                          }
                        >
                          {session.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {session.date}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {session.time}
                      </TableCell>
                      <TableCell className="text-right flex justify-end gap-3">
                        <button
                          onClick={() => handleAnalysisClick(session)}
                          className="text-blue-600 hover:text-blue-800"
                          title="Analysis"
                        >
                          <FiBarChart size={20} />
                        </button>
                        <button
                          onClick={() => handleReportClick(session)}
                          className="text-green-600 hover:text-green-800"
                          title="Reports"
                        >
                          <FiFileText size={20} />
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Analysis Modal */}
          <StudentReportModal
            open={isAnalysisModalOpen}
            onClose={() => setIsAnalysisModalOpen(false)}
            sessionData={selectedSession}
            type="analysis"
          />

          {/* Report Modal */}
          <StudentReportModal
            open={isReportModalOpen}
            onClose={() => setIsReportModalOpen(false)}
            sessionData={selectedSession}
            type="report"
          />
        </>
      );
    }