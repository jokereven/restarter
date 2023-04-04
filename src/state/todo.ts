import { atom } from "jotai"
import { atomWithLocation } from "jotai-location"
import { atomsWithQuery } from "jotai-tanstack-query"

export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL as string

export const userIdAtom = atom(1)

export const [, todoListAtom] = atomsWithQuery((get) => ({
  queryKey: ["todoList", get(userIdAtom)],
  queryFn: async () => {
    const response = await fetch(`${BASE_URL}/todos/?userId=${get(userIdAtom)}`)
    return response.json() as Promise<Todo[]>
  },
}))

const locationAtom = atomWithLocation()
export const todoIdAtom = atom((get) => {
  // http://localhost:5173/example/todos/
  const pathname = get(locationAtom).pathname
  if (!pathname) {
    return
  }
  if (!pathname.match(/\/todos\/\d+$/)) {
    return
  }

  const todoId = pathname.split("/").at(-1)
  return todoId
})

export const [, todoAtom] = atomsWithQuery((get) => ({
  queryKey: ["todo", get(todoIdAtom)],
  queryFn: async () => {
    const todoId = get(todoIdAtom)
    if (!todoId) {
      return
    }
    const response = await fetch(BASE_URL + `/todos/${todoId}`)
    return response.json() as Promise<Todo>
  },
}))
