import { useSelector } from "react-redux";

export function TodoList() {
    const todos = useSelector(store => {
        return store.todo
    })

    return (
        <ul>
            {todos.map(item => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    )
}