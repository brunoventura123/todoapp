import { useTask } from "@/contexts/taskContext"

export const Status = () => {
    const task = useTask()

    const handleStatus = (status: string) => {

        task?.dispatch({
            type: 'status',
            payload: { category: status }
        })
    }

    return (
        <div className="w-full mt-5">
            <p className="text-sm mb-2">Status:</p>
            <select
                onChange={(e) => handleStatus(e.target.value)}
                className="w-full outline-none py-1 px-1 text-base" name="" id="">
                <option value="Todas">Todas</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
        </div>
    )
}