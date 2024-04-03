let intervalId;

window.addEventListener("blur", () => {
  clearInterval(intervalId);
  document.title = "See you again :)";
  setTimeout(() => {
    document.title = "Portfolio";
  }, 3000);
});
window.addEventListener("focus", () => {
  let titleText = ["P", "O", "R", "T", "F", "O", "L", "I", "O", "Portfolio"];
  let counter = 0;
  document.title = titleText[counter % titleText.length];
  counter++;
  intervalId = setInterval(function () {
    document.title = titleText[counter % titleText.length];
    counter++;
  }, 800);
});
