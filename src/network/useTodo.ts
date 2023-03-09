import { useQuery } from "@tanstack/react-query"

export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export const todoFetcher = (url: string) =>
  fetch(import.meta.env.VITE_API_BASE_URL + url).then(
    (res) => res.json() as Promise<Todo[]>
  )

export function useTodoList(userId?: number) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["todos", userId],
    queryFn: () => todoFetcher(userId ? `/todos/?userId=${userId}` : "/todos"),
  })

  return {
    todos: data,
    isLoading,
    error,
  }
}

export function useTodo(todoId: number) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["todo", todoId],
    queryFn: () => todoFetcher(`/todos/${todoId}`),
  })

  return {
    todo: data,
    isLoading,
    error,
  }
}
