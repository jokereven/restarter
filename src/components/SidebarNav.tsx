import CommonHeader from "@/components/CommonHeader"
import type { MenuProps } from "antd"
import { Menu } from "antd"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./menu.css"

type MenuItem = Required<MenuProps>["items"][number]

function menu(props: {
	label: React.ReactNode
	key: string
	icon?: React.ReactNode
	children?: MenuItem[]
	type?: "group"
	disabled?: boolean
}): MenuItem {
	return {
		key: props.key,
		icon: props.icon,
		children: props.children?.map((child) => {
			if (props.disabled) {
				return {
					...child,
					disabled: true,
				}
			}
			return child
		}),
		label: props.disabled ? (
			props.label
		) : (
			<Link to={props.key}>{props.label}</Link>
		),
		type: props.type,
		disabled: props.disabled,
	} as MenuItem
}

const items: MenuItem[] = [
	menu({
		label: "TODO",
		key: "todo",
		icon: <div className="i-mdi-calendar-today-outline"></div>,
		children: [
			menu({
				label: "Item 1",
				key: "/example/todos/1",
			}),
			menu({
				label: "List",
				key: "/example/todos/",
			}),
		],
	}),
	menu({
		label: "禁用的导航组",
		key: "disabled",
		icon: <div className="i-mdi-calendar-today-outline"></div>,
		disabled: true,
		children: [
			menu({
				label: "禁用的导航项",
				key: "/xxxxx",
			}),
		],
	}),
	menu({
		label: "禁用的导航项",
		key: "disabled-item",
		disabled: true,
	}),
	menu({
		label: "安全退出",
		key: "/logout",
		icon: <div className="i-carbon-logout"></div>,
	}),
]

console.log(items)

export default function SidebarNav() {
	const location = useLocation()
	const [current, setCurrent] = useState(location.pathname)

	return (
		<div className="h-full w-64 hidden md:block bg-black">
			<CommonHeader className="text-white" />
			<Menu
				onClick={(e) => setCurrent(e.key)}
				selectedKeys={[current]}
				theme="dark"
				mode="inline"
				items={items}
				defaultOpenKeys={["todo"]}
			/>
		</div>
	)
}
