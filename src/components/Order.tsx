import { useTask } from "@/contexts/taskContext"
import { Button } from "./Button"

export const Order = () => {
    const task = useTask()

    const orderListAsc = (order: string) => {
        task?.dispatch({
            type: 'order',
            payload: { order }
        })
    }

    return (
        <div className="w-full md:ml-12">
            <p className="text-sm mb-2 mt-4">Ordem alfabética</p>
            <div className="flex gap-2">
                <Button lable="Asc" bg="bg-slate-900" onclick={() => orderListAsc('asc')} />
                <Button lable="Desc" bg="bg-slate-900" onclick={() => orderListAsc('desc')} />
            </div>
        </div>
    )
}