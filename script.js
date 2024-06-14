const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");
const thumbs = document.querySelector(".thumb");

container.addEventListener("click", function (e) {
  if (e.target.className == "thumb") {
    jumbo.src = e.target.src;
    jumbo.classList.add("fade");
    setTimeout(() => {
      jumbo.classList.remove("fade");
    }, 500);
  }

  thumbs.forEach((thumbs) => {
    thumbs.className = "thumb";
  });
  e.target.classList.add(".active");
});
