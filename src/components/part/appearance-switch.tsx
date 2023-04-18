import { useDark } from "@/hooks/index"

export default function AppearanceSwitch() {
	const [isDark, toggleDark] = useDark()

	return (
		<button onClick={toggleDark}>
			<div className={isDark ? "i-carbon-moon" : "i-carbon-sun"} />
		</button>
	)
}
