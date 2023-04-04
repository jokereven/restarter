import { todoAtom } from "@/state/todo"
import { Card } from "antd"
import { useAtom } from "jotai"

function TodoTitle() {
  const [{ data: todo, isLoading, error }] = useAtom(todoAtom)
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>
  return (
    <div>
      {todo != null ? <div>{todo.title}</div> : <div>Todo not found</div>}
    </div>
  )
}

function TodoCard() {
  const [{ data: todo }] = useAtom(todoAtom)

  return (
    <div className="mt-8 flex justify-center">
      <Card title={`TODO ${todo?.id ?? ""}`} className="w-80">
        <TodoTitle />
      </Card>
    </div>
  )
}

export default TodoCard
