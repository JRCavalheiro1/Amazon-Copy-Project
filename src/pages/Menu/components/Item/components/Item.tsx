
type itemProps = {
    title: string
}
export const Item = ({title} : itemProps) => {
    return (
        <h1>{title}</h1>
    )
}