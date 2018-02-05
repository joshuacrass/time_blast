const electron = require("electron");
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

app.on("window-all-closed", function() {
  if (process.platform != "darwin") {
    app.quit();
  }
});

app.on("ready", function() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: true,
    transparent: false,
    titleBarStyle: "hidden",
    title: "Time Blast"
  });
  mainWindow.setTitle("Time Blast");

  mainWindow.loadURL("file://" + __dirname + "/public/index.html");

  // mainWindow.openDevTools();

  mainWindow.on("closed", function() {
    mainWindow = null;
  });
});
