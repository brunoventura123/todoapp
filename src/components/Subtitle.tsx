type Props = {
    text: string
}

export const Subtitle = ({ text }: Props) => {
    return (
        <h2 className="font-bold text-xl">{text}</h2>
    )
}