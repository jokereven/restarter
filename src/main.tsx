import "./i18n"
import "./styles/globals.css"

import App from "@/App"
import React from "react"
import ReactDOM from "react-dom/client"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<>
			{/* remove this if you are not using Electron */}
			{/* <TitleBar /> */}
			<App />
		</>
	</React.StrictMode>,
)
