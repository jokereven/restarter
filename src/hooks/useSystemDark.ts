import { useSyncExternalStore } from "react"

export function useSystemDark() {
	const isDark = useSyncExternalStore(subscribe, getSnapshot)
	return isDark
}

function getSnapshot() {
	return window.matchMedia("(prefers-color-scheme: dark)").matches
}

function subscribe(callback: () => void) {
	window
		.matchMedia("(prefers-color-scheme: dark)")
		.addEventListener("change", callback)
	return () => {
		window
			.matchMedia("(prefers-color-scheme: dark)")
			.removeEventListener("change", callback)
	}
}
