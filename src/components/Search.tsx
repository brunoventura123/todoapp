import { useTask } from "@/contexts/taskContext"
import { useState } from "react"

export const Search = () => {
    const task = useTask()
    const [search, setSearch] = useState('')

    const searchInput = () => {
        task?.dispatch({
            type: 'search',
            payload: { text: search }
        })
    }
    setInterval(() => {
        if (search.length > 2) {
            searchInput()
        } else {
            return task?.list
        }
    }, 1000)

    return (
        <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full mt-3 border border-gray-400 outline-none py-1 px-2 text-base placeholder:text-sm rounded-sm"
            placeholder="Digite para pesquisar..."
            type="text" />
    )
}//w-full mt-3 border border-gray-400 outline-none py-1 px-2 text-base placeholder:text-sm rounded-sm