"use client"
import { useTask } from "@/contexts/taskContext"
import { Button } from "./Button"
import { useState } from "react"

export const CreateTask = () => {
    const task = useTask()
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')

    const addTask = () => {
        if (!title || !category) return
        task?.dispatch({ type: 'add', payload: { title, category } })
        setTitle('')
        setCategory('')
    }
    return (
        <div className="flex flex-col items-start gap-3">
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Digite o título"
                className="w-full mt-3 border border-gray-400 outline-none py-1 px-2 text-base placeholder:text-sm rounded-sm" type="text" />
            <select
                value={category}
                onChange={e => setCategory(e.target.value)}
                className="w-full outline-none py-2 px-1 text-sm"
                name="" id="" placeholder="Selecione uma categoria">
                <option value="" disabled>Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <Button lable="Criar tarefa" bg="bg-slate-900" onclick={addTask} />
        </div>
    )
}