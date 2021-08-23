const assertEqual = require("../assertEqual");
const head = require("../head");

// TEST CODE
assertEqual(head([]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
