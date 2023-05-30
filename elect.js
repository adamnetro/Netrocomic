const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1120,
    height: 700,
    icon: "icons/logo2-ico.png"
  })

  win.loadFile('home.html')
}

const { Menu } = require('electron')
Menu.setApplicationMenu(null)

app.whenReady().then(() => {
  createWindow()
})
