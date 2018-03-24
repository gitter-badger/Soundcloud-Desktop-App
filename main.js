const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

let mainWindow;

// Listen for app to be ready 
app.on('ready', function(){
    //Delete default menu
    electron.app.on('browser-window-created',function(e,window) {
        window.setMenu(null);
    });
    // Create new window
    mainWindow = new BrowserWindow({});
    // Load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol:'file:',
        slashes: true
    }));
});

//Close app when exited
app.on('window-all-closed', () => {
    app.quit()
})