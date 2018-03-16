var robot = require("robotjs");

const {app, globalShortcut} = require('electron')

  app.on('ready', () => {
    globalShortcut.register('Control+h', () => {
      robot.keyTap("left")

    })
    globalShortcut.register('Control+j', () => {
      robot.keyTap("down")

    })
    globalShortcut.register('Control+k', () => {
      robot.keyTap("up")

    })
    globalShortcut.register('Control+l', () => {
      robot.keyTap("right")

    })
  })
