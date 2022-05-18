const { app, BrowserWindow } = require("electron");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        heigh: 600,
    });


    win.loadFile("index.html");
};

app.whenReady().then(() => createWindow());