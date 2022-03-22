/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { eventListeners } from "@popperjs/core";

window.onload = function() {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });

  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["car", "baobab", "doctor", "clown", "wolf", "cyclist"];
  let action = [
    "drove my",
    "is growing on my",
    "screamed at",
    "bit my",
    "threw my",
    "stole my"
  ];
  let possession = [
    "desk",
    "foot",
    "surf board",
    "guitar",
    "little finger",
    "left shoe"
  ];
  let where = [
    "on the street",
    "in my house",
    "in the parking lot",
    "in my garden",
    "at the beach",
    "in Cape Town"
  ];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possessionIndex = Math.floor(Math.random() * possession.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return `${pronoun[pronounIndex]} ${subject[subjectIndex]} ${action[actionIndex]} ${possession[possessionIndex]} ${where[whereIndex]}!`;
};
