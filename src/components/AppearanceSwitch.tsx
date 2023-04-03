import { useDark } from "@/hooks"

function AppearanceSwitch() {
  const { isDark, toggleDark } = useDark()
  return (
    <button className="icon-btn" onClick={toggleDark}>
      <div
        className={
          isDark ? "i-mdi-moon-waxing-crescent" : "i-mdi-white-balance-sunny"
        }
      ></div>
    </button>
  )
}

export default AppearanceSwitch
