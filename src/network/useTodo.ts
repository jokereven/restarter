import { useQuery } from "@tanstack/react-query"

export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export const todoListFetcher = (url: string) =>
  fetch((import.meta.env.VITE_API_BASE_URL as string) + url).then(
    (res) => res.json() as Promise<Todo[]>
  )

export const todoItemFetcher = (url: string) =>
  fetch((import.meta.env.VITE_API_BASE_URL as string) + url).then(
    (res) => res.json() as Promise<Todo>
  )

export function useTodoList(userId?: number) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["todos", userId],
    queryFn: () =>
      todoListFetcher(userId ? `/todos/?userId=${userId}` : "/todos"),
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
    queryFn: () => todoItemFetcher(`/todos/${todoId}`),
  })

  return {
    todo: data,
    isLoading,
    error,
  }
}
