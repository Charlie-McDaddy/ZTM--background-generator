"use strict";

//declare variables
let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let direction = document.querySelector(".direction");
let body = document.getElementById("gradient");

function setGradient() {
  body.style.background = `linear-gradient(${direction.value}, ${color1.value}, ${color2.value})`;

  css.textContent = body.style.background;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
direction.addEventListener("input", setGradient);
