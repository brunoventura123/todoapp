"use client"
import { useTask } from "@/contexts/taskContext"
import { Button } from "./Button"
type Props = {
    id: number
    title: string
    category: string
    done: boolean
}

export const Task = ({ id, title, category, done }: Props) => {
    const task = useTask()
    const taskDone = () => {
        task?.dispatch({
            type: 'done',
            payload: { id }
        })

    }
    const taskDelete = () => {
        if (id) {
            task?.dispatch({
                type: 'delete',
                payload: { id }
            })
        }
    }

    return (
        <div className="flex flex-col md:items-center md:flex-row px-2 py-4 rounded-sm bg-white mb-3">
            <div className="flex-1 mb-3 md:mb-0">
                <div className={`mb-3 ${done ? 'line-through' : ''}`}>{title}</div>
                <div className="text-sm text-gray-700">({category})</div>
            </div>
            <div className="flex gap-1">
                <Button lable={`${done ? 'Retomar' : 'Completar'}`} bg={`${done ? 'bg-gray-500' : 'bg-green-600'}`} onclick={taskDone} />
                <Button lable="X" bg="bg-red-600" onclick={taskDelete} />
            </div>
        </div>
    )
}