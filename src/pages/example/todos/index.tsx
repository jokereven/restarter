import { todoListAtom, userIdAtom } from "@/state/todo"
import { Table } from "antd"
import { useAtom } from "jotai"

const columns = [
	{
		title: "ID",
		dataIndex: "id",
	},
	{
		title: "Title",
		dataIndex: "title",
	},
	{
		title: "Completed",
		dataIndex: "completed",
		render: (value: boolean) => (value ? "Yes" : "No"),
	},
]

function TodoTable() {
	const [current, setCurrent] = useAtom(userIdAtom)
	const [{ data: todos, isLoading, error }] = useAtom(todoListAtom)

	if (error) return <div>Error: {(error as Error).message}</div>
	return (
		<Table
			loading={isLoading || !todos}
			dataSource={todos ?? []}
			columns={columns}
			rowKey={(record) => record.id}
			size="middle"
			pagination={{
				current,
				pageSize: 20,
				showSizeChanger: false,
				total: 200,
				position: ["bottomCenter"],
			}}
			onChange={(pagination) => {
				const selectedPage = pagination.current ?? 1
				setCurrent(selectedPage)
			}}
		/>
	)
}

export default function TodoList() {
	return (
		<div className="mx-auto p-8 max-w-2xl">
			<h1 className="mb-4 text-3xl">TODO LIST</h1>
			<TodoTable />
		</div>
	)
}
