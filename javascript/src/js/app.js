const title = document.getElementById("title");
const hello = document.querySelectorAll(".hello h1");

title.innerText = "Got you!";

function handleTitleColor() {
  title.style.color = "blue";
}

function handleTitleClick() {
  console.log("title was clicked!");
}

function handleMouseenter() {
  title.innerText = "Mouse is here!!";
}

function handleMouseleave() {
  title.innerText = "Mouse is gone!!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

window.addEventListener("resize", handleWindowResize);

title.addEventListener("click", handleTitleClick);
title.onmouseenter = handleMouseenter;
title.addEventListener("mouseleave", handleMouseleave);
title.addEventListener("auxclick", handleMouseAuxclick);
