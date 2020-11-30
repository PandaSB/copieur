// index.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");
const dbus = require('dbus-native');

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8000";
const bus = dbus.systemBus();

/**
 *  App Configuration
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

/**
 * start dbus
**/
udservice = bus.getService('org.freedesktop.UDisks2');
udservice.getInterface('/org/freedesktop/UDisks', 'org.freedesktop.UDisks', function(err, ud) {
});
/**
 * Routes Definitions
 */
app.get("/", (req, res) => {
  res.render("index", { title : "Home", disques : [{ name : "SSD", status: "active"},{name: "SDCARD",status: "active"}]});
});
app.get("/user", (req, res) => {
  res.render("user", { title: "Profile", userProfile: { nickname: "Auth0" } });
});

/**
 * Server Activation
 */
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
