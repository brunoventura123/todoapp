"use client"
import { CreateTask } from "@/components/CreateTask"
import { Order } from "@/components/Order"
import { Search } from "@/components/Search"
import { Status } from "@/components/Status"
import { Subtitle } from "@/components/Subtitle"
import { Task } from "@/components/Task"
import { TaskPage } from "@/components/TaskPage"
import { TaskProvider, useTask } from "@/contexts/taskContext"

const Page = () => {
  const task = useTask()
  return (
    <TaskProvider>
      <TaskPage />
    </TaskProvider>
  )
}

export default Page