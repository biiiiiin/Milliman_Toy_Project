const { app, BrowserWindow } = require('electron') 
const path = require('path') 

function createWindow () { 
  const win = new BrowserWindow({ 
    width: 960, 
    height: 630, 
    resizable:false,
    autoHideMenuBar:true,
    frame: false,
    webPreferences: { 
      nodeIntegration: true,
      contextIsolation : false
    }
  }) 
  win.loadURL("http://localhost:3000")
} 
app.whenReady().then(() => { 
  createWindow() 
}) 
app.on('window-all-closed', function () { 
  if (process.platform !== 'darwin') app.quit() 
})