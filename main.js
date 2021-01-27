const { create } = require("domain");
const { app, BrowserWindow } = require("electron");

let win;

function createWindow(){
    win = new BrowserWindow({
        width:500,
        height:500,
        backgroundColor: '#000000',
        autoHideMenuBar: true,
        resizable: true
    })


    win.loadURL('file://${__dirname}/dist/index.html')

    win.webContents.openDevTools()

    win.on('closed', () => {win = null})

}

app.on('ready', createWindow)

app.on('window-all-closed', ()=> {
    if(procecss.platform !== 'drawin')
        app.quit();
})

app.on('activate', ()=>{
    if(win === null) createWindow
})