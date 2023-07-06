import Player from "./Player";
import Swarm from "./Swarm";

window.addEventListener("load", function() {
  const startButton = document.getElementById("start-button");
  const startScreen = document.getElementById("start-screen");
  const gameContent = document.getElementById("game-content");
  const pauseScreen = document.getElementById("pause-screen");
  const continueButton = document.getElementById("continue-button");
  const restartButton = document.getElementById("restart-button");
  const winScreen = document.getElementById("win-screen");
  const deathScreen = document.getElementById("death-screen");
  const healthBar = document.getElementById("health-bar");

  let gameState = "Start";
  let gameplay = false;
});