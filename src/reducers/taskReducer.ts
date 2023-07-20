"use client"
import { TaskActions } from "@/types/TasdActions"
import { Task } from "@/types/Task"

export const taskReducer = (list: Task[], actions: TaskActions) => {

    switch (actions.type) {
        case 'add':
            return [...list, {
                id: list.length,
                title: actions.payload.title,
                category: actions.payload.category,
                done: false,
                order: ''
            }]

        case 'delete':
            return list.filter(task => task.id !== actions.payload.id)

        case 'done':
            return list.map(item => {
                if (item.id === actions.payload.id) {
                    item.done ? item.done = false : item.done = true
                }
                return item
            })

        case 'status':
            if (actions.payload.category === 'Trabalho' || 'Pessoal' || 'Estudos') {
                return list.filter(item => item.category === actions.payload.category)
            } else {
                return list
            }
        case 'order':
            if (actions.payload.order === 'asc') {
                return list.sort(function (a, b) {
                    return a.title < b.title ? 1 : -1
                })
            }
            if (actions.payload.order === 'desc') {
                return list.sort(function (a, b) {
                    return a.title > b.title ? 1 : -1
                })
            }

        case 'search':
            let newList: Task[] = []
            return newList = list.filter(item => item.title.includes('')
                ? item : false)
        default:
            return list
    }
}