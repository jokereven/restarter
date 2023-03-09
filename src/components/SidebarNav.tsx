import type { MenuProps } from "antd"

import { Menu } from "antd"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

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

const SidebarNav = () => {
  const location = useLocation()
  const [current, setCurrent] = useState(location.pathname)

  return (
    <Menu
      onClick={(e) => setCurrent(e.key)}
      selectedKeys={[current]}
      mode="inline"
      items={items}
      defaultOpenKeys={["todo"]}
      className="h-full w-64 hidden md:block"
    />
  )
}

export default SidebarNav
