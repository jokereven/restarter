import type { MenuProps } from "antd"
import { Menu } from "antd"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./menu.css"

type MenuItem = Required<MenuProps>["items"][number]

function menu(
  label: React.ReactNode,
  key: string,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label: <Link to={key}>{label}</Link>,
    type,
  } as MenuItem
}

const items: MenuItem[] = [
  menu("TODO", "todo", <div className="i-mdi-calendar-today-outline"></div>, [
    menu("Item 1", "/example/todos/1"),
    menu("List", "/example/todos/"),
  ]),
]

function NavHeader() {
  return (
    <div className="flex flex-col items-center my-4 text-white gap-4">
      <div className="flex items-center gap-2">
        <span className="i-carbon-alarm text-yellow text-2xl"></span>
        <h1 className="text-lg font-bold">这是标题</h1>
      </div>
      <p className="text-sm opacity-70">这是一句描述</p>
    </div>
  )
}

export default function SidebarNav() {
  const location = useLocation()
  const [current, setCurrent] = useState(location.pathname)

  return (
    <div className="h-full w-64 hidden md:block bg-black">
      <NavHeader />
      <Menu
        onClick={(e) => setCurrent(e.key)}
        selectedKeys={[current]}
        mode="inline"
        items={items}
        defaultOpenKeys={["todo"]}
      />
    </div>
  )
}
