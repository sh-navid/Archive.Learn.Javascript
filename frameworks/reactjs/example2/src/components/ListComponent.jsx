const ListComponent = () => {
    const COLORS = [
        { id: 1, name: "green" },
        { id: 2, name: "blue" },
        { id: 3, name: "red" },
    ]

    return (
        <>
            {COLORS.map((color) => (
                <h1 key={color.id}>Color: {color.name}</h1>
            ))}
        </>
    )
}

export default ListComponent