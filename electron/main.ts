import { app, BrowserWindow } from "electron"
import path from "node:path"

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │
process.env.DIST = path.join(__dirname, "../dist")
process.env.PUBLIC = app.isPackaged
  ? process.env.DIST
  : path.join(process.env.DIST, "../public")

let win: BrowserWindow | null
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"]

function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.PUBLIC, "electron-vite.svg"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    width: 1000,
    height: 800,
    titleBarStyle: "hiddenInset",
  })

  if (VITE_DEV_SERVER_URL) {
    void win.loadURL(VITE_DEV_SERVER_URL)
  } else {
    // win.loadFile('dist/index.html')
    void win.loadFile(path.join(process.env.DIST, "index.html"))
  }
}

app.on("window-all-closed", () => {
  app.quit()
})

void app.whenReady().then(createWindow)
