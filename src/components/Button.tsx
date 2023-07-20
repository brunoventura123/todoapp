type Props = {
    lable: string
    bg: string
    onclick: () => void
}

export const Button = ({ lable, bg, onclick }: Props) => {
    const handleClick = () => {
        onclick()
    }
    return (
        <button onClick={handleClick} className={`${bg} hover:opacity-90 text-sm rounded-sm py-1 px-2 font-semibold text-white`}>
            {lable}
        </button>
    )
}