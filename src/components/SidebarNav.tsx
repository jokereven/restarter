import type { MenuProps } from "antd";

import { Menu } from "antd";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { useDark } from "@/hooks";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
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
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    "TODO",
    "todo",
    <div className="i-mdi-calendar-today-outline"></div>,
    [getItem("Item 1", "/example/todos/1"), getItem("List", "/example/todos/")]
  ),
];

const SidebarNav = () => {
  const { isDark } = useDark();
  const location = useLocation();
  const [current, setCurrent] = useState(location.pathname);

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      theme={isDark ? "dark" : "light"}
      onClick={onClick}
      selectedKeys={[current]}
      mode="inline"
      items={items}
      className="h-full w-64 hidden md:block"
    />
  );
};

export default SidebarNav;
