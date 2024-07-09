const levees = document.getElementById("levees");
const randomizer = document.getElementById("randomizer");

// comentar exactamente que hace su codigo
randomizer.addEventListener("click", function () {
  levees.volume = Math.random();
  levees.autoplay = true;
});
