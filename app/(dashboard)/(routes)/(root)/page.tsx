import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import { CheckCircle, Clock } from "lucide-react"

import { getDashboardCourses } from "@/actions/get-dashboard-courses"
import { CoursesList } from "@/components/courses-list"
import { InfoCard } from "./_components/info-card"

// import { UserButton, useUser } from "@clerk/nextjs"

export default async function Dashboard() {
  const { userId } = auth()

  if (!userId) {
    return redirect("/")
  }
  const { completedCourses, coursesInProgress } = await getDashboardCourses(
    userId
  )
  // const { isSignedIn, isLoaded, user } = useUser()
  return (
    <div className="p-6 space-y-4">
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
      {/* <UserButton afterSignOutUrl="/" />
      <h2 className="text-green-gray text-4xl font-normal leading snug">
        Hi, {isSignedIn ? user.firstName : "Techie"}
      </h2>
      <p>See what&apos;s happening in your classes.</p> */}
    </div>
  )
}
