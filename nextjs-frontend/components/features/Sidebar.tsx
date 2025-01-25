"use client";
import Link from "next/link";
import { Bell, CircleUser, Home, LayoutList, LineChart, Package, Package2, ShoppingCart, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react"; // Import useState to manage sub-tab toggling
import { useTheme } from "next-themes"; // Import to handle light/dark mode theme
import { GiSheikahEye } from "react-icons/gi";

export default function Sidebar() {
  const [isClassManagementOpen, setIsClassManagementOpen] = useState(false); // State to toggle sub-tabs visibility
  const { theme } = useTheme(); // Get current theme (light or dark)

  // Function to toggle Class Management dropdown
  const toggleClassManagement = () => {
    setIsClassManagementOpen(!isClassManagementOpen);
  };

  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Package2 className="h-6 w-6" />
          <span> LEADS MANAGEMENT </span>
        </Link>
        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary"
          >
            <Home className="h-4 w-4" />
            Dashboard
          </Link>
           {/* Main tab: Class Management */}
           <div>
            <button
              onClick={toggleClassManagement}
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary"
            >
              <Package className="h-4 w-4" />
              Class Management
            </button>

            {/* Sub-tabs for Class Management with animation */}
            {isClassManagementOpen && (
              <div
                className={`pl-2 mt-2 ml-4 space-y-1 transition-all duration-300 ease-in-out transform opacity-100
                  ${theme === "dark" ? "bg-[#2a2a2a] backdrop-blur-md" : "bg-[#f0f0f0] backdrop-blur-md"}
                  p-2 rounded-lg`}
                style={{ animation: isClassManagementOpen ? 'fadeIn 0.3s ease-out' : 'none' }}
              >
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-muted-foreground transition-all hover:text-primary"
                >
                  <Home className="h-4 w-4" />
                  Class Master
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-muted-foreground transition-all hover:text-primary"
                >
                  <Users className="h-4 w-4" />
                  Student Master
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-muted-foreground transition-all hover:text-primary"
                >
                  <LineChart className="h-4 w-4" />
                  Attendance Management
                </Link>
              </div>
            )}
          </div>

          <Link
  href="/sessions"
  className="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary"
>
<LayoutList />
  Sessions
  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
    3
  </Badge>
</Link>


          {/* <Link
            href="/products"
            className="flex items-center gap-3 rounded-lg bg-muted px-3 py-3 text-primary transition-all hover:text-primary"
          >
            <Package className="h-4 w-4" />
            Products
          </Link>

          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary"
          >
            <Users className="h-4 w-4" />
            Customers
          </Link> */}

          <Link
            href="/#"
            className="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary"
          >
            {/* <LineChart className="h-4 w-4" /> */}
            <GiSheikahEye className="h-5 w-5" />
            Analysis
          </Link>
        </nav>
      </div>


      {/* <div className="mt-auto p-4">
        <Card>
          <CardHeader className="p-2 pt-0 md:p-4">
            <CardTitle>Upgrade to Pro</CardTitle>
            <CardDescription>
              Unlock all features and get unlimited access to our support team.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
            <Button size="sm" className="w-full">
              Upgrade
            </Button>
          </CardContent>
        </Card>
      </div> */}
      <div className="mt-auto p-4">
      <Card>
        <CardHeader className="p-2 pt-0 md:p-4">
          <CardTitle>Enhancing Classroom Monitoring with AI</CardTitle>
          <CardDescription>
            Discover how AI-powered CCTV analytics is reshaping classroom management.
          </CardDescription>
        </CardHeader>
        {/* <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
          <div className="space-y-4">
            <p>
              Modern classrooms are evolving with the integration of AI technologies. CCTV footage 
              combined with face detection and emotion analysis helps educators better understand student 
              engagement and behavior. In real-time, teachers and administrators can track class dynamics 
              and ensure a productive environment.
            </p>
            <p>
              By analyzing student expressions and behaviors, schools can identify patterns that indicate 
              stress, boredom, or confusion, enabling timely intervention. This data can also help design 
              more effective teaching strategies.
            </p>
            <Button size="sm" className="w-full">
              Learn More
            </Button>
          </div>
        </CardContent> */}
      </Card>
    </div>
    </div>
  );
}