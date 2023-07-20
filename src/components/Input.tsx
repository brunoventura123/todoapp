type Props = {
    type: string
    placeholder: string
    value: string
    onChange: (txt: string) => void
}

export const Input = ({ type, placeholder, value, onChange }: Props) => {

    return (
        <input
            placeholder={''}
            value={''}
            onChange={() => { }}
            className="w-full mt-3 border border-gray-400 outline-none py-1 px-2 text-base placeholder:text-sm rounded-sm"
            type={''} />
    )
}