import { auth } from "@clerk/nextjs"

import { db } from "@/lib/db"
import { Categories } from "./_components/categories"
import { redirect } from "next/navigation"

interface SearchPageProps {
  searchParams: {
    title: string
    categoryId: string
  }
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const { userId } = auth()
  if (!userId) {
    return redirect("/")
  }
  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  })

  // const courses = await getCourses({
  //   userId,
  //   ...searchParams
  // })

  return (
    <div className="p-6">
      <Categories items={categories} />
    </div>
  )
}

export default SearchPage
