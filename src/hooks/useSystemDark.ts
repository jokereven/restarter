import { useSyncExternalStore } from "react"

export function useSystemDark() {
	return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

function getSnapshot() {
	return window.matchMedia("(prefers-color-scheme: dark)").matches
}

function getServerSnapshot() {
	return false
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
