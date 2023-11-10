import { auth, currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import { CheckCircle, Clock } from "lucide-react"

import { getDashboardCourses } from "@/actions/get-dashboard-courses"
import { CoursesList } from "@/components/courses-list"
import { InfoCard } from "./_components/info-card"

export default async function Dashboard() {
  const { userId } = auth()
  const user = await currentUser()

  if (!userId) {
    return redirect("/")
  }
  const { completedCourses, coursesInProgress } = await getDashboardCourses(
    userId
  )
  // provide a default value for user's name
  const userName = user?.firstName || "Techie"
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-green-gray text-4xl font-normal leading-snug">
        Hi, {userName}
      </h1>
      <p className="text-green-gray text-base font-normal">
        See what&apos;s happening in your classes.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InfoCard
          icon={Clock}
          label="In progress"
          numberOfItems={coursesInProgress.length}
        />
        <InfoCard
          icon={CheckCircle}
          label="Completed"
          numberOfItems={completedCourses.length}
          variant="success"
        />
      </div>
      <CoursesList items={[...coursesInProgress, ...completedCourses]} />
    </div>
  )
}
