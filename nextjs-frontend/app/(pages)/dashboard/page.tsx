/** @format */

import PageTitle from "@/components/dashboard/PageTitle";
import BarChart from "@/components/dashboard/BarChart";
import Card, { CardContent, CardProps } from "@/components/dashboard/Card";
import SalesCard, { SalesProps } from "@/components/dashboard/SalesCard";
import { Users, Eye, Smile, Bell } from "lucide-react";

// Updated dummy data based on AI behavioral analysis

const cardData: CardProps[] = [
  {
    label: "Total Students Analyzed",
    amount: "1,240",
    discription: "Students analyzed for behavioral metrics",
    icon: Users,
  },
  {
    label: "Attention Levels",
    amount: "78%",  // Percentage of attentive students
    discription: "Based on AI analysis of student focus",
    icon: Eye,
  },
  {
    label: "Emotion Analysis (Happy)",
    amount: "64%",
    discription: "Percentage of students showing happiness",
    icon: Smile,
  },
  {
    label: "Class Attendance",
    amount: "92%",
    discription: "Current class attendance rate",
    icon: Bell,
  },
];

const classWiseBehaviorData: SalesProps[] = [
  {
    name: "Grade 6",
    email: "Attention: 80%, Non-Attention: 20%",
    saleAmount: "Emotion Analysis: Happy: 70%, Angry: 5%, Neutral: 25%",
  },
  {
    name: "Grade 7",
    email: "Attention: 75%, Non-Attention: 25%",
    saleAmount: "Emotion Analysis: Happy: 60%, Angry: 10%, Neutral: 30%",
  },
  {
    name: "Grade 8",
    email: "Attention: 72%, Non-Attention: 28%",
    saleAmount: "Emotion Analysis: Happy: 65%, Angry: 12%, Neutral: 23%",
  },
  {
    name: "Grade 9",
    email: "Attention: 82%, Non-Attention: 18%",
    saleAmount: "Emotion Analysis: Happy: 68%, Angry: 8%, Neutral: 24%",
  },
  {
    name: "Grade 10",
    email: "Attention: 78%, Non-Attention: 22%",
    saleAmount: "Emotion Analysis: Happy: 63%, Angry: 7%, Neutral: 30%",
  },
];

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Student AI Behavioral Monitoring Dashboard" />
      {/* Section for summary cards */}
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((data, index) => (
          <Card
            key={index}
            amount={data.amount}
            discription={data.discription}
            icon={data.icon}
            label={data.label}
          />
        ))}
      </section>
      {/* Section for detailed charts and data */}
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Class-wise Engagement Overview</p>
          <BarChart />
        </CardContent>
        <CardContent className="flex justify-between gap-4 flex-col">
          <section>
            <p className="font-semibold">Class-wise Behavioral Data</p>
            <p className="text-sm text-gray-400">
              AI analysis of attention, emotions, and engagement across grades.
            </p>
          </section>
          <div className="space-y-4">
            {classWiseBehaviorData.map((data, index) => (
              <SalesCard
                key={index}
                email={data.email}
                name={data.name}
                saleAmount={data.saleAmount}
              />
            ))}
          </div>
        </CardContent>
      </section>
    </div>
  );
}
