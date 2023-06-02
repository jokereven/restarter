import { Theme } from "@/hooks"

export interface IElectronAPI {
	setTheme: (theme: Theme) => void
}

declare global {
	interface Window {
		electron?: IElectronAPI
	}
}
