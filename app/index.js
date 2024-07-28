import { me } from "appbit";
import { display } from "display";
import { preferences } from "user-settings";
import { vibration } from "haptics";
import clock from "clock";
import document from "document";

const displayToggle = document.getElementById("displayToggle");

const counterLabel = document.getElementById("counterLabel");

// initialize
var counter = 0;
counterLabel.text = `${counter}`;

// on tap
displayToggle.onclick = () => {
  counter++;
  counterLabel.text = `${counter}`;

  vibration.start("confirmation");
}
