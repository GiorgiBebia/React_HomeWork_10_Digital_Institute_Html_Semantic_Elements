let i = 0;
document.querySelector(".burger").addEventListener("click", function () {
  const nav = document.querySelector(".nav");

  if (i === 0) {
    nav.style.display = "flex";
    nav.style.flexDirection = "column";
    i++;
    console.log("1");
  } else {
    nav.style.display = "none";
    i--;
    console.log("2");
  }
});
