window.addEventListener("load", function () {
  const startButton = document.getElementById("start-button");
  const startScreen = document.getElementById("start-screen");
  const gameContent = document.getElementById("game-content");
  const pauseScreen = document.getElementById("pause-screen");
  const continueButton = document.getElementById("continue-button");
  const restartButton = document.getElementById("restart-button");
  const winScreen = document.getElementById("win-screen");
  const deathScreen = document.getElementById("death-screen");
  const healthBar = document.getElementById("health-bar");
  const backBlur = document.querySelector(".backBlur");

  let isGameActive = false;
  let isGamePaused = false;

  let player; 

  function updateHealthUI() {
    const playerHealth = game.player.health;
    const healthPercentage = (playerHealth / app.max_health) * 100;
    healthBar.style.width = `${healthPercentage}%`;
  }

  function updateUI() {
    updateHealthUI();
    requestAnimationFrame(updateUI);
  }

  updateUI();

  function activateGame() {
    startScreen.style.display = "none";
    gameContent.style.display = "block";
    backBlur.style.display = "none";
    pauseButton.style.display = "block";
    isGameActive = true;
  }

  function pauseGame() {
    isGamePaused = true;
    gameContent.style.display = "none";
    pauseScreen.style.display = "block";
    pauseScreen.style.zIndex = "1000";
    backBlur.style.display = "block";
  }

  function continueGame() {
    isGamePaused = false;
    pauseScreen.style.display = "none";
    pauseScreen.style.zIndex = "auto";
    gameContent.style.display = "block";
    backBlur.style.display = "none";
  }

  function handlePauseButton() {
    if (isGameActive && !isGamePaused) {
      pauseGame();
    }
  }

  function handleContinueButton() {
    if (isGameActive && isGamePaused) {
      continueGame();
    }
  }

  function handleRestartButton() {
    location.reload();
  }

  continueButton.addEventListener("click", handleContinueButton);
  restartButton.addEventListener("click", handleRestartButton);

  const pauseButton = document.createElement("button");
  pauseButton.innerText = "Pause";
  pauseButton.setAttribute("id", "pauseButton");
  pauseButton.addEventListener("click", handlePauseButton);
  pauseButton.style.zIndex = "1000";
  gameContent.appendChild(pauseButton);

  pauseScreen.style.display = "none";
  winScreen.style.display = "none";
  deathScreen.style.display = "none";
  pauseButton.style.display = "none";

  startButton.addEventListener("click", function () {
    activateGame();
  });
});
