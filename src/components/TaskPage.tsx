import { ReactNode } from "react"
import { Subtitle } from "./Subtitle"
import { Search } from "./Search"
import { Status } from "./Status"
import { Order } from "./Order"
import { Task } from "./Task"
import { CreateTask } from "./CreateTask"
import { useTask } from "@/contexts/taskContext"
import { dividerClasses } from "@mui/material"

export const TaskPage = () => {
    const task = useTask()
    return (
        <div className="py-5 px-2 w-full min-h-screen bg-bottom bg-cover bg-fixed bg-[url(https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]">
            <div className="text-black max-w-2xl mx-auto bg-gray-300 h-full min-h-screen rounded-md p-5">
                <h1 className="text-3xl text-black text-center font-semibold">Lista de Tarefas</h1>
                <div className="border-b border-gray-600 py-5">
                    <Subtitle text="Pesquisar:" />
                    <Search />
                </div>
                <div className="border-b border-gray-600 py-5">
                    <Subtitle text="Filtrar:" />
                    <div className="flex flex-col items-center md:flex-row">
                        <Status />
                        <Order />
                    </div>
                </div>
                <div className="border-b border-gray-600 py-4">
                    {task?.list.length === 0 && <div>Nenhuma tarefa encontrada!</div>}
                    {task?.list.map(t => (
                        <Task
                            key={t.id}
                            id={t.id}
                            title={t.title}
                            category={t.category}
                            done={t.done}
                        />
                    ))}
                </div>
                <div className="py-4">
                    <Subtitle text="Criar tarefa:" />
                    <CreateTask />
                </div>
            </div>
        </div>
    )
}