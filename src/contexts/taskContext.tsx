"use client"
import { taskReducer } from "@/reducers/taskReducer";
import { TaskActions } from "@/types/TasdActions";
import { Task } from "@/types/Task";
import { Dispatch, ReactNode, createContext, useContext, useEffect, useReducer } from "react";


export type TaskContextType = {
    list: Task[]
    dispatch: Dispatch<TaskActions>
}

export const TaskContext = createContext<TaskContextType | null>(null)

export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [list, dispatch] = useReducer(
        taskReducer,
        JSON.parse(localStorage.getItem('tasks') || '[]')
    )


    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(list))
    }, [list])
    return (
        <TaskContext.Provider value={{ list, dispatch }} >
            {children}
        </TaskContext.Provider>
    )
}

export const useTask = () => useContext(TaskContext)