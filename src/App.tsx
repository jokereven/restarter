import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User } from "./type"

import { Getter, atom, useAtom } from "jotai"
import { atomsWithQuery } from "jotai-tanstack-query"
import ky from "ky"

const idAtom = atom(1)

const [userAtom] = atomsWithQuery((get: Getter) => ({
	queryKey: ["users", get(idAtom)],
	queryFn: async ({ queryKey: [, id] }) => {
		const res = await ky.get(`https://jsonplaceholder.typicode.com/users/${id}`)
		return res.json<User>()
	},
}))

export default function App() {
	const [data] = useAtom(userAtom)
	return (
		<div>
			<h1>{data?.name}</h1>
			<Avatar>
				<AvatarImage src={"https://via.placeholder.com/150"} />
				<AvatarFallback>{data.name.slice(0, 2)}</AvatarFallback>
			</Avatar>
		</div>
	)
}
