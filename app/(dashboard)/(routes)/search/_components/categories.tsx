"use client"

import { Category } from "@prisma/client"
import { FcEngineering, FcLineChart, FcReading } from "react-icons/fc"
import { IconType } from "react-icons"

import { CategoryItem } from "./category-item"

interface CategoriesProps {
  items: Category[]
}

const iconMap: Record<Category["name"], IconType> = {
  Beginner: FcReading,
  Intermediate: FcLineChart,
  Advanced: FcEngineering,
}

export const Categories = ({ items }: CategoriesProps) => {
  const sortedItems = items.sort((a, b) => {
    const order = ["Beginner", "Intermediate", "Advanced"]
    return order.indexOf(a.name) - order.indexOf(b.name)
  })
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {sortedItems.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  )
}
