/* Magic Mirror
 * Module: MMM-Saint
 */

Module.register("MMM-Saint", {
  requiresVersion: "2.14.0",
  defaults: {
    debug: true,
    update: 60*1000
  },

  start: function () {
    console.log("[SAINT] Starting MMM-Saint...")
  },

  notificationReceived: function (notification, payload) {
    switch (notification) {
      case "DOM_OBJECTS_CREATED":
        this.sendSocketNotification("CONFIG", this.config)
        break
    }
  },

  socketNotificationReceived: function (notification, payload) {
    switch (notification) {
      case "INITIALIZED":
        console.log("[SAINT] Ready")
        break
      case "DATA":
        if (this.config.debug) console.log("[SAINT] Data", payload)
        this.Saint= payload
        this.displayData()
        break
    }
  },

  getDom: function () {
    var wrapper= document.createElement("div")

    var saint= document.createElement("div")
    saint.id= "SAINT"

    wrapper.appendChild(saint)
    return wrapper
  },

  displayData: function() {
    var saint = document.getElementById("SAINT")
    saint.innerHTML = "<span class=\"fas fa-bible\"></span> " + this.Saint
  },

/*
 *  To debug,
 * @todo with css will be better !
  displayData: function() {
    this.hide(500, () => {
      var saint = document.getElementById("SAINT")
      saint.innerHTML = "<span class=\"fas fa-bible\"></span> " + this.Saint
      this.show(500)
    })
  },
*/

  getStyles: function() {
    return ["MMM-Saint.css", "font-awesome.css"]
  }
});
